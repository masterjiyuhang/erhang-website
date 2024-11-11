/*
 * @Author: zhangxiangyi
 * @Date: 2023-02-20 13:33:04
 * @LastEditTime: 2024-08-14 14:18:52
 * @LastEditors: zhangxiangyi
 * @Description: description
 * @FilePath: /dashboard-jhb-front/src/layouts/jcim/post-message.js
 */

const WILDCARD = "*";
const HAND_SHAKE = "__FRAME_MESSAGE_HANDLE_SHAKE__";
const isNative = (fn) => {
  return /\[native code\]/.test(fn.toString());
};
const noop = () => {};
const warn = (...log) => {
  let _a;
  const print = (_a = console.warn) != null ? _a : console.log;
  print(...log);
};
const generateUid = () => {
  return Number(Math.floor(Math.random() * 1e6) + Date.now()).toString(36);
};
const delay = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

class Reaction {
  constructor(_reactType, _id = generateUid(), type, data = null) {
    this._reactType = _reactType;
    this._id = _id;
    this.type = type;
    this.data = data;
    this._id = _id;
    this.type = type;
    this.data = data;
    this._reactType = _reactType;
  }
}
class Request extends Reaction {
  constructor({
    type,
    id,
    data
  }) {
    super("reaction_request" /* request */ , id, type, data);
  }

  // 是否请求实例
  static isRequest(req) {
    return req._reactType === "reaction_request" /* request */ ;
  }
}
class Response extends Reaction {
  constructor({
    type,
    id,
    data,
    error
  }) {
    super("reaction_response" /* response */ , id, type, data);
    this.error = error != null ? error : false;
  }

  static isResponse(res) {
    return res._reactType === "reaction_response" /* response */ ;
  }
}
class Task {
  constructor(req, res, resolve, reject) {
    this.req = req;
    this.res = res;
    this.resolve = resolve;
    this.reject = reject;
    this.req = req;
    this.res = res;
    this.resolve = resolve;
    this.reject = reject;
  }
}

class Responsable {
  constructor(_request, event) {
    this._request = _request;
    this.event = event;
    this._request = _request;
    this.event = event;
    this.anwsered = false;
  }

  /**
   * 操作成功响应客户端消息
   * @param data 相应数据
   */
  success(data) {
    if (this.anwsered)
      return warn("this request has been anwsered");
    if (this.event.source) {
      const {
        type,
        _id
      } = this._request;
      const res = new Response({
        type,
        data,
        id: _id
      });
      this.event.source.postMessage(res, "*");
      this.anwsered = true;
    }
  }

  /**
   * 操作失败响应客户端消息
   * @param data 相应数据
   */
  error(data) {
    if (this.anwsered)
      return warn("this request has been anwsered");
    if (this.event.source) {
      const {
        type,
        _id
      } = this._request;
      const res = new Response({
        type,
        data,
        error: true,
        id: _id
      });
      this.event.source.postMessage(res, "*");
      this.anwsered = true;
    }
  }
}

class Handler {
  constructor(type, fn) {
    this.type = type;
    this.fn = fn;
  }
}
const defaultErrorHandler = (err, _req, res) => {
  if (!res.anwsered) {
    res.error(err);
  }
};
const notFoundErrorHandler = (req, res) => {
  res.error(`the type of ${req.type} has not been found`);
};
class Server {
  constructor(option = {}) {
    let _a;
    let _b;
    this.self = (_a = option.self) != null ? _a : self;
    this.handlerMap = /* @__PURE__ */ new Map();
    this.state = 1 /* closed */ ;
    this._msgListener = noop;
    this.errorHandler = (_b = option.errorHandler) != null ? _b : defaultErrorHandler;
    this.notFoundErrorHandler = notFoundErrorHandler;
    if (!isNative(this.self.postMessage)) {
      throw new TypeError(
        "`self` parameter must contain native `postMessage` method"
      );
    }
    this.open();
    this._listenInternalType();
  }

  // 开启Server端监听
  open() {
    if (this.state !== 1 /* closed */ )
      return;
    this._msgListener = this._receiver.bind(this);
    this.self.addEventListener("message", this._msgListener);
    this.state = 0 /* open */ ;
  }

  // 关闭Server端监听
  close() {
    if (this.state === 1 /* closed */ )
      return;
    this.self.removeEventListener("message", this._msgListener);
    this._msgListener = noop;
    this.state = 1 /* closed */ ;
  }

  /** 注册监听事件
   * @param {MessageType | HandlerFn} type
   * @param {HandlerFn} handler
   */
  listen(type, handler) {
    if (this.handlerMap.has(type)) {
      throw new Error(`type ${type} has been listen`);
    }
    if (handler) {
      this.handlerMap.set(type, new Handler(type, handler));
    } else if (typeof type === "function") {
      this.handlerMap.set(WILDCARD, new Handler(WILDCARD, type));
    }
  }

  /**
   * 取消事件监听
   * @param {MessageType} type 事件类型
   */
  cancel(type) {
    if (typeof type === "function") {
      type = WILDCARD;
    }
    this.handlerMap.delete(type);
  }

  /** 接收事件信息并处理
   * @param {MessageEvent} event
   */
  async _receiver(event) {
    if (!Request.isRequest(event.data))
      return;
    const {
      type,
      data,
      _id
    } = event.data;
    if (type === "webpackOk")
      return;
    const req = new Request({
      type,
      data,
      id: _id
    });
    const res = new Responsable(req, event);
    const handler = this.handlerMap.get(type);
    if (handler) {
      try {
        await handler.fn(req, res);
      } catch (err) {
        this.errorHandler(err, req, res);
      }
    } else {
      this.notFoundErrorHandler(req, res);
    }
  }

  // 监听内部事件
  _listenInternalType() {
    this.listen(HAND_SHAKE, async (_req, res) => {
      res.success(null);
    });
  }
}

class Client {
  constructor(target, origin = "*", option = {}) {
    let _a;
    let _b;
    this.target = target;
    this.origin = origin;
    this.timeout = (_a = option.timeout) != null ? _a : 5e3;
    this.self = (_b = option.self) != null ? _b : self;
    this.state = 3 /* closed */ ;
    this.tasks = /* @__PURE__ */ Object.create(null);
    this._msgListener = noop;
    this._connector = null;
    if (!isNative(target.postMessage)) {
      throw new TypeError(
        "The first parameter must contain native `postMessage` method"
      );
    }
    this.open();
  }

  /**
   * @description: 开启Client 舰艇
   * @return {*}
   */
  open() {
    if (this.state !== 3 /* closed */ )
      return;
    this.state = 0 /* notConnected */ ;
    this._msgListener = this._receiver.bind(this);
    this.self.addEventListener("message", this._msgListener);
  }

  /**
   * @description: 关闭Client端监听
   * @return {*}
   */
  close() {
    if (this.state === 3 /* closed */ )
      return;
    this.self.removeEventListener("message", this._msgListener);
    this._msgListener = noop;
    this.state = 3 /* closed */ ;
  }

  /**  连接服务端
   * * @return Promise 连接是否成功
   */
  async connect() {
    if (this.state === 3 /* closed */ ) {
      return Promise.reject("The client is closed and needs to be reopened");
    }
    if (this.state === 0 /* notConnected */ ) {
      this._connector = new Promise((resolve, reject) => {
        const onConnected = () => {
          this.state = 2 /* connected */ ;
          resolve();
        };
        const onError = (error) => {
          this.state = 0 /* notConnected */ ;
          reject(error);
        };
        const request = new Request({
          type: HAND_SHAKE
        });
        return this._requestRetry(request).then(onConnected, onError);
      });
    }
    return this._connector;
  }

  /** 触发监听，发布postmessage 事件
   * @param {MessageType} type
   * @param {any} data
   * @param {string} origin
   * @returns {Promise}  Promise 响应结果
   */
  async request(type, data, origin) {
    if (this.state === 3 /* closed */ ) {
      return Promise.reject("The client is closed and needs to be reopened");
    }
    if (typeof type !== "string") {
      throw new TypeError("type must be a string");
    }
    if (this.state === 0 /* notConnected */ ) {
      await this.connect();
    }
    if (this.state === 1 /* connecting */ ) {
      await this._connector;
    }
    const req = new Request({
      type,
      data
    });
    return this._request(req, this.timeout, origin != null ? origin : this.origin);
  }

  /**
   * 移除任务
   * @param id
   */
  removeTask(id) {
    Reflect.deleteProperty(this.tasks, id);
  }

  /** 处理request请求
   * @param {Request} req
   * @param {number} timeout
   * @param {string} origin
   */
  _request(req, timeout = this.timeout, origin = this.origin) {
    if (!Request.isRequest(req)) {
      warn("The return value of requestInterceptor must be a valid request");
      return Promise.reject(req);
    }
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject("timeout");
      }, timeout);
      const cleanup = () => {
        clearTimeout(timer);
        this.removeTask(req._id);
      };
      const fulfilled = (res) => {
        resolve(res);
        cleanup();
      };
      const rejected = (reason) => {
        reject(reason);
        cleanup();
      };
      this.target.postMessage(req, origin);
      this.tasks[req._id] = new Task(req, null, fulfilled, rejected);
    });
  }

  /** 接收来自server的响应
   * @param {MessageEvent} event
   * */
  _receiver(event) {
    if (!Response.isResponse(event.data))
      return;
    const {
      _id
    } = event.data;
    const task = this.tasks[_id];
    if (!task)
      return;
    const res = new Response(event.data);
    task.res = res;
    if (res.error) {
      task.reject(res);
    } else {
      task.resolve(res);
    }
  }

  /**
   * 请求重试
   * @param {Request} req 请求体
   * @param {number} timeout 超时时间
   * @param {number} count 重试次数
   * @param {number} interval 重试间隔
   * @return {Promise}  响应结果
   */
  async _requestRetry(req, timeout = 1e3, count = 3, interval = 500) {
    for (let i = 0; i < count; i++) {
      const time = i * interval;
      if (time > 0)
        await delay(time);
      try {
        return await this._request(req, timeout);
      } catch (err) {
        if (i === count - 1) {
          const {
            type,
            _id
          } = req;
          return Promise.reject(
            new Response({
              type,
              id: _id,
              data: err,
              error: true
            })
          );
        }
      }
    }
  }
}

export {
  Client,
  Server
};
