/**
 * @description http模块
 */

// 接口基地址
const BASE_URL = import.meta.env.VITE_BASE_URL

// 环境
const MODE = import.meta.env.VITE_MODE ?? 'development'

// 生产环境
const MODE_PRODUCTION = 'production'

// GET请求方法
const METHOD_GET = 'GET'

// 成功状态
const SUCCESS_STATUS_TEXT = 'OK'

// 响应类型
const RESPONSE_TYPE = ['blob', 'stream']

// 请求拦截器
const requestInterceptor = (config) => {
  if (config.options.meta?.needAuth) {
    const token = getToken()

    const method = config.options.method?.toUpperCase()

    if (method === METHOD_GET) {
      const query = config.options.query || {}
      config.options.query = { ...query, token }
    } else {
      const body = config.options.body || {}
      config.options.body = { ...body, token }
    }
  }
  return config
}

// 响应拦截器
const responseInterceptor = (response) => {
  const res = response.response

  if (
    res.status === 200 &&
    res.statusText === SUCCESS_STATUS_TEXT &&
    res._data.data &&
    RESPONSE_TYPE.includes(res?.type)
  ) {
    return response
  }

  if (MODE !== MODE_PRODUCTION) {
    console.log(res.url, {
      code: res._data.code,
      data: res._data.data,
      res: res._data,
      params: response.options,
      resHeaders: res.headers,
    })
  }

  if (res._data.code === 0 || res._data.code === 200) {
    return response
  } else if (res._data.code === -50) {
    // token过期或失效

    removeToken()

    return Promise.reject(res._data)
  }
  return Promise.reject(res._data)
}

// 错误拦截器
const errorInterceptor = (err) => {
  return Promise.reject(err.error)
}

const httpInstance = $fetch.create({
  baseURL: BASE_URL,
  onRequest: requestInterceptor,
  onResponse: responseInterceptor,
  onRequestError: errorInterceptor,
})

export default httpInstance
