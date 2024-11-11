import { go2LoginPage } from '~/utils/auth'
import { useMySystemStore } from './../stores/system'
import { useSessionStorage, useStorage } from '@vueuse/core'

// 标识位
let confirm = false
let isRefreshing = false
let refreshSubscribers = []

export const useUseRequest = () => {
  const prjId = useSessionStorage('prjId', '')
  const clientId = useStorage('clientId', '')

  const systemStore = useMySystemStore()
  const { $i18n } = useNuxtApp()
  const router = useRouter()
  const publicConfig = useRuntimeConfig().public

  function handleRefreshToken(options) {
    // 双token 逻辑
    // 换取 refresh token 逻辑
    const refreshTokenStr = getRefreshToken() || ''
    const expiresTimeIn = parseInt(getExpiresTimeIn(), 10)
    // 提前五分中获取token
    const distance = 60 * 5 * 1000
    if (
      refreshTokenStr &&
      expiresTimeIn - Date.now() <= distance &&
      expiresTimeIn - Date.now() > 0
    ) {
      if (!isRefreshing) {
        isRefreshing = true
        fetch('/auth/refreshToken', {
          method: 'POST',
          body: {
            refreshToken: refreshTokenStr,
          },
        })
          .then((res: any) => {
            if (res.code === 0) {
              const { accessToken, expireIn, refreshToken } = res.data
              const newTimestamp = Date.now() + expireIn * 1000
              setToken(accessToken)
              setExpiresIn(expireIn)
              setRefreshToken(refreshToken)
              setExpiresTimeIn(newTimestamp)
              refreshSubscribers.forEach((cb) => cb(accessToken))
              refreshSubscribers = []
            } else {
              console.error('刷新立牌失败')
            }
          })
          .catch((err) => {})
          .finally(() => {
            isRefreshing = false
          })

        return new Promise((resolve) => {
          refreshSubscribers.push((newToken) => {
            options.headers.Authorization = `Bearer ${newToken}`
            resolve(options)
          })
        })
      }
    }
  }

  function handleRequest(options, headers = {}) {
    options.headers = headers
    options.headers['Accept-Language'] = $i18n.locale.value
    // 复杂的请求头 会触发预检导致GET 请求失败 这里做逻辑区分
    if (options.method === 'POST') {
      options.headers['APP-ID'] = systemStore.appId
      options.headers['terminal-type'] = 'PC'
      options.headers['Content-Type'] = 'application/json'
      options.headers['Access-Control-Allow-Origin'] = '*'

      if (!_isEmpty(prjId.value)) {
        options.headers['popular-channel'] = _isNumber(prjId.value)
          ? prjId.value
          : prjId.value.indexOf(',') > 0
            ? prjId.value.split(',')[0]
            : prjId.value
      }

      if (!_isEmpty(clientId.value)) {
        options.headers['client-uid'] = clientId.value
      }

      if (
        router.currentRoute.value.meta?.PageCode &&
        !options.headers['page-code']
      ) {
        options.headers['page-code'] = router.currentRoute.value.meta.PageCode
      }
    }

    const token = getToken()
    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`
    }

    handleRefreshToken(options)
  }

  function handleResponse(response) {
    try {
      if (response._data.code === 401) {
        if (
          response &&
          response._data &&
          response._data.subcode === 'TOKEN_HAS_BEEN_REJECTED'
        ) {
          if (!confirm) {
            confirm = true // 设置标志为已弹窗

            const { t } = useI18n()
            ElMessageBox({
              message: t('common.reLoginDesc'),
              confirmButtonText: t('common.confirm'),
              cancelButtonText: t('common.cancel'),
              title: t('common.tips'),
              type: 'warning',
              showCancelButton: true,
            })
              .then(() => {
                systemStore.logout().then(() => {
                  go2LoginPage()
                })
              })
              .catch(() => {
                confirm = false
              })
          } else {
            systemStore.logout().then(() => {
              go2LoginPage()
            })
          }
        }
      }
    } catch (error) {
      console.error('处理响应时发生错误:', error)
    }
  }
  function fetch<T>(url: string, opt: any, apiOptions: any = {}) {
    const options = opt
    options.lazy = options?.lazy ?? true

    const ccFetch = $fetch.create({
      timeout: apiOptions?.timeout ?? 15000,
      baseURL:
        apiOptions?.baseApi ?? publicConfig.PROD_CLIENT_PROXY_API ?? '/api',
      onRequest: ({ request, options, error }) => {
        handleRequest(options, apiOptions?.headers)
      },
      onRequestError({ request, options, error }) {
        return Promise.reject(error)
      },
      onResponse({ response, options, error }) {
        handleResponse(response)
      },
      onResponseError({ response, options, error }) {
        // 检查是否有 response 数据
        if (response && response._data) {
          const { code, describe } = response._data

          // // 根据不同的状态码进行统一处理
          // switch (code) {
          //   case 400:
          //     // 处理客户端错误，如输入验证错误
          //     console.error('400 错误: ', describe || '请求无效')
          //     break
          //   case 401:
          //     // 处理未授权的请求
          //     console.error('401 错误: 未授权')
          //     // 可以选择在这里执行登出操作或者重定向到登录页
          //     // logoutUser();
          //     break
          //   case 403:
          //     // 处理权限不足的请求
          //     console.error('403 错误: 权限不足')
          //     break
          //   case 404:
          //     // 处理资源未找到的请求
          //     console.error('404 错误: 资源未找到')
          //     break
          //   case 500:
          //     // 处理服务器错误
          //     console.error('500 错误: 服务器内部错误')
          //     break
          //   default:
          //     // 处理其他错误
          //     console.error('未知错误: ', describe || '发生了错误')
          // }

          // 将错误抛出，方便调用者可以根据情况处理
          return Promise.reject({
            message: describe || '请求失败',
            code: code || 500,
            data: response._data,
          })
        }

        // 如果 response 数据不存在，返回通用错误
        return Promise.reject({
          message: error.message || '发生未知错误',
          code: 500,
        })
      },
    })
    return ccFetch(url, options)
  }

  const get = <T>(url: string, params = {}) => {
    return fetch<T>(url, {
      method: 'GET',
      params,
    })
  }

  const getAsset = <T>(url: string, params = {}) => {
    return fetch<T>(
      url,
      {
        method: 'GET',
        params,
      },
      {
        baseApi: 'https://sapi.jctrans.com',
      },
    )
  }

  const post = <T>(url: string, body = {}, params = {}, options = {}) => {
    return fetch<T>(
      url,
      {
        method: 'POST',
        body,
        params,
      },
      options,
    )
  }

  return {
    get,
    post,
    getAsset,
    fetch,
  }
}
