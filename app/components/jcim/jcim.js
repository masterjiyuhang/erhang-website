import {
  Client,
  Server
} from './post-message';

// 生成一个唯一 ID
function generateUniqueId() {
  return `iframe-${Math.random().toString(36).substr(2, 9)}`;
}

class JCIM {
  constructor() {
    this.UNIQUE_IFRAME_ID = generateUniqueId();
    this.iframeInitialized = false;
    this.iframe = null;
    this.targetUrl = '';
    this.targetElement = null;
    this.server = new Server();
    this.width = '300px'; // 默认宽度
    this.height = '600px'; // 默认高度
  }

  // 创建 iframe 元素
  createIframe() {
    this.iframe = document.createElement('iframe');
    this.iframe.src = this.targetUrl;
    this.iframe.id = this.UNIQUE_IFRAME_ID;
    this.iframe.frameBorder = '0';
    this.iframe.style.width = this.width; // 使用传入的宽度
    this.iframe.style.height = this.height; // 使用传入的高度
    this.iframe.style.background = 'transparent';
    return this.iframe;
  }

  // 创建样式元素
  createStyles() {
    const style = document.createElement('style');
    style.textContent = `
      #${this.UNIQUE_IFRAME_ID} {
        box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
        position: fixed;
        bottom: -100%;
        right: 0;
        z-index: 1000;
        transition: transform 0.5s ease, opacity 0.5s ease;
        opacity: 0;
        border-radius: 4px;
      }
      #${this.UNIQUE_IFRAME_ID}.visible {
        bottom: 0;
        opacity: 1;
      }
    `;
    return style;
  }

  // 设置事件监听器
  setupEventListeners() {
    const events = {
      // 打开聊天弹窗
      'OPEN_IM_CHAT_WD': () => {
        console.log('监听到IM 弹窗打开事件');
        if (this.iframeLoaded) {
          this.iframe.style.width = '800px';
          this.openIM(); // 确保 IM 弹窗已打开
        } else {
          this.iframe.addEventListener('load', () => {
            this.iframe.style.width = '800px';
            this.openIM(); // 确保 IM 弹窗已打开
          });
        }
      },
      // 关闭聊天弹窗
      'CLOSE_IM_CHAT_WD': () => {
        console.log('监听到IM 弹窗关闭事件');
        if (this.iframeLoaded) {
          this.iframe.style.width = this.width;
        } else {
          this.iframe.addEventListener('load', () => {
            this.iframe.style.width = this.width;
          });
        }
      },
      // 关闭IM
      'CLOSE_IM': () => {
        this.closeIM()
      },
      // 打开运价弹窗
      'OPEN_CHARGE_WD': () => {
        console.log('运价弹窗打开事件');
        if (this.iframeLoaded) {
          this.iframe.style.width = '1068px';
          this.openIM(); // 确保 IM 弹窗已打开
        } else {
          this.iframe.addEventListener('load', () => {
            this.iframe.style.width = '1068px';
            this.openIM(); // 确保 IM 弹窗已打开
          });
        }
      },
      // 关闭运价弹窗
      'CLOSE_CHARGE_WD': () => {
        console.log('运价弹关闭事件');
        if (this.iframeLoaded) {
          this.iframe.style.width = '800px';
          this.openIM(); // 确保 IM 弹窗已打开
        } else {
          this.iframe.addEventListener('load', () => {
            this.iframe.style.width = '800px';
            this.openIM(); // 确保 IM 弹窗已打开
          });
        }
      },
    };

    for (const [event, handler] of Object.entries(events)) {
      this.server.listen(event, (req) => {
        const {
          data
        } = req;
        if (data) handler();
      });
    }

    // 确保 iframe 加载完毕后才标记为已加载
    if (this.iframe) {
      this.iframe.addEventListener('load', () => {
        setTimeout(() => {
          this.iframeLoaded = true;
        }, 3000);
      });
    }
  }

  // 初始化 IM
  init({
    targetUrl,
    width = '300px',
    height = '600px',
    target = document.body,
    token = '',
    lang = 'zh-CN',
    appId = 'HZH'
  }) {
    this.targetUrl = targetUrl;
    this.width = token ? width : '510px'; // 设置宽度
    this.height = height; // 设置高度
    this.lang = lang; // 设置语言
    this.appId = appId;
    this.token = token;
    if (this.iframeInitialized) return;
    this.iframe = this.createIframe();
    const style = this.createStyles();
    document.head.appendChild(style);
    target.appendChild(this.iframe);
    if (this.iframe && this.iframe.contentWindow) {
      const client = new Client(this.iframe.contentWindow);
      client.request('SET_BASE_DATA', {
        token,
        lang,
        appId
      });
    }

    this.iframeInitialized = true;
    this.setupEventListeners();
  }

  // 检查 iframe 内是否存在特定元素
  checkIframeInitialized() {
    return new Promise((resolve, reject) => {
      if (this.iframe && this.iframe.contentDocument) {
        const iframeDocument = this.iframe.contentDocument;
        const targetElement = iframeDocument.getElementById('jc-im');

        if (targetElement) {
          resolve();
        } else {
          reject(new Error('IM 组件未初始化，请稍后再试'));
        }
      } else {
        reject(new Error('iframe 未加载，请稍后再试'));
      }
    });
  }

  // 打开 IM
  openIM() {
    try {
      if (this.iframe && this.iframeLoaded) {
        // const ser = new Server();
        // ser.listen('READY', (req) => {
        //   const {
        //     data
        //   } = req;
        //   console.log(data, 'read')
        //   if (data && data.ready) {
        //     if (!this.iframe.classList.contains('visible')) {
        //       this.iframe.classList.add('visible');
        //       this.openIMList();
        //     }
        //   } else {
        //     throw new Error('IM iframe 尚未加载');
        //   }
        // })
        if (!this.iframe.classList.contains('visible')) {
          this.iframe.classList.add('visible');
          this.openIMList();
        }

      } else {
        throw new Error('IM iframe 尚未加载');
      }
    } catch (error) {
      console.error('打开 IM 失败:', error);
      return Promise.reject(error); // 返回 Promise 拒绝
    }
  }


  // 关闭 IM
  closeIM() {
    if (this.iframe && this.iframeLoaded) {
      if (this.token) {
        this.iframe.style.width = '300px';
      }
      if (this.iframe.classList.contains('visible')) {
        this.iframe.classList.remove('visible');
      }
    }
  }

  updateLang(newLang) {
    if (this.iframe && this.iframeLoaded) {
      if (this.lang !== newLang) {
        this.lang = newLang
        const client = new Client(this.iframe.contentWindow);
        client.request('CHANGE_LANG', {
          lang: newLang
        });
      }

    } else {
      console.warn('警告：iframe 尚未加载，无法更新语言');
    }
  }

  openIMList() {
    if (this.iframe && this.iframe.contentWindow) {
      const client = new Client(this.iframe.contentWindow);
      client && client.request('OPEN_IM');
    } else {
      console.warn('警告：未打开子应用，消息客户端实例化失败...');
    }
  }

  // 发送消息
  openIMSendMsg(params) {
    try {
      if (this.iframe && this.iframe.contentWindow) {
        const client = new Client(this.iframe.contentWindow);
        client.request('OPEN_IM_SEND_MSG', {
          ...params
        });
        this.openIM(); // 确保 IM 弹窗已打开
      } else {
        throw new Error('消息发送失败，IM iframe 尚未加载');
      }
    } catch (error) {
      console.error('发送消息失败:', error);
      return Promise.reject(error); // 返回 Promise 拒绝
    }
  }

  openIMSendRateCard(params, type) {
    try {
      if (this.iframe && this.iframe.contentWindow) {
        const client = new Client(this.iframe.contentWindow);
        client.request('OPEN_IM_SEND_RATES_CARD', {
          params,
          type
        });
        this.openIM(); // 确保 IM 弹窗已打开
      } else {
        throw new Error('消息发送失败，IM iframe 尚未加载');
      }
    } catch (error) {
      console.error('发送消息失败:', error);
      return Promise.reject(error); // 返回 Promise 拒绝
    }
  }
}

// 导出 JCIM 实例
export default new JCIM();
