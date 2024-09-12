import { useMySystemStore } from './../stores/system'
import { useStorage } from '@vueuse/core'

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
  const publicConfig: any = useRuntimeConfig().public

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

  function handleRequest(options) {
    options.headers = {}
    options.headers['Accept-Language'] = $i18n.locale.value
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
              .then(() => {})
              .catch(() => {
                confirm = false
              })
          }
        }
      }
    } catch (error) {
      console.error('处理响应时发生错误:', error)
    }
  }
  function fetch<T>(url: string, opt) {
    const options = opt
    options.lazy = options?.lazy ?? true

    const ccFetch = $fetch.create({
      baseURL: publicConfig.apiBaseUrl ?? '/api',
      onRequest: ({ request, options, error }) => {
        handleRequest(options)
      },
      onRequestError({ request, options, error }) {
        return Promise.reject(error)
      },
      onResponse({ response, options, error }) {
        handleResponse(response)
      },
      onResponseError({ response, options, error }) {
        if (response && response._data) {
          return Promise.reject(error)
        }
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

  const post = <T>(url: string, body = {}, params = {}) => {
    return fetch<T>(url, {
      method: 'POST',
      body,
      params,
    })
  }

  return {
    get,
    post,
    fetch,
  }
}
