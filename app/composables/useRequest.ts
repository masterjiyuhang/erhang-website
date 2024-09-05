import type { AsyncData, KeysOf, PickFrom } from '#app/composables/asyncData'
import type { FetchError } from 'ofetch'
import { useMySystemStore } from './../stores/system'
import type { UseFetchOptions } from '#app'
import { useStorage } from '@vueuse/core'

// 响应类型
const RESPONSE_TYPE = ['blob', 'stream']

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
  const { apiBaseUrl } = useRuntimeConfig().public

  function handleRefreshToken(options) {
    // 双token 逻辑
    // 换取 refresh token 逻辑
    const refreshTokenStr = getRefreshToken() || ''
    console.log(
      '🚀 ~ file: useRequest.ts:18 ~ handleRefreshToken ~ refreshTokenStr:',
      refreshTokenStr,
    )
    const expiresTimeIn = parseInt(getExpiresTimeIn(), 10)
    console.log(
      '🚀 ~ file: useRequest.ts:20 ~ handleRefreshToken ~ expiresTimeIn:',
      expiresTimeIn,
    )
    // 提前五分中获取token
    const distance = 60 * 5 * 1000

    console.log(
      '🚀 ~ file: useRequest.ts:42 ~ handleRefreshToken ~ expiresTimeIn - Date.now() <= distance:',
      expiresTimeIn - Date.now() <= distance,
    )
    console.log(
      '🚀 ~ file: useRequest.ts:78 ~ handleRefreshToken ~ expiresTimeIn - Date.now() > 0:',
      expiresTimeIn - Date.now() > 0,
    )
    console.log(
      '🚀 ~ file: useRequest.ts:47 ~ handleRefreshToken ~ refreshTokenStr:',
      refreshTokenStr,
    )
    if (
      refreshTokenStr
      // refreshTokenStr &&
      // expiresTimeIn - Date.now() <= distance &&
      // expiresTimeIn - Date.now() > 0
    ) {
      if (!isRefreshing) {
        isRefreshing = true
        $fetch('/auth/refreshToken', {
          method: 'POST',
          body: {
            refreshToken: refreshTokenStr,
          },
        })
          .then((res: any) => {
            console.log('🚀 ~ file: useRequest.ts:53 ~ .then ~ res:', res)
            if (res.code === 0) {
              const { accessToken, expireIn, refreshToken } = res.data
              const newTimestamp = Date.now() + expireIn * 1000
              setToken(accessToken)
              setExpiresIn(expireIn)
              setRefreshToken(refreshToken)
              setExpiresTimeIn(newTimestamp)
              refreshSubscribers.forEach((cb) => cb(accessToken))
              refreshSubscribers = []
            }
          })
          .catch((err) => {
            console.log('🚀 ~ file: useRequest.ts:78 ~ .then ~ err:', err)
          })
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
    options.headers = new Headers()
    options.headers['Accept-Language'] = $i18n.locale.value
    options.headers['APP-ID'] = systemStore.appId
    options.headers['terminal-type'] = 'PC'
    options.headers['Content-Type'] = 'application/json'
    options.headers['Access-Control-Allow-Origin'] = '*'

    if (!_isEmpty(prjId)) {
      options.headers['popular-channel'] = _isNumber(prjId)
        ? prjId.value
        : prjId.value.indexOf(',') > 0
          ? prjId.value.split(',')[0]
          : prjId.value
    }

    if (!_isEmpty(clientId)) {
      options.headers['client-id'] = clientId.value
    }

    if (
      router.currentRoute.value.meta?.PageCode &&
      !options.headers['page-code']
    ) {
      options.headers['page-code'] = router.currentRoute.value.meta.PageCode
    }

    const token = getToken()
    console.log('🚀 ~ file: useRequest.ts:39 ~ handleRequest ~ token:', token)

    handleRefreshToken(options)
  }

  function handleResponse(response) {
    if (response.data.code === 401) {
      if (
        response &&
        response.data &&
        response.data.subcode === 'TOKEN_HAS_BEEN_REJECTED'
      ) {
        if (!confirm) {
          confirm = true // 设置标志为已弹窗

          // TODO: 弹窗提示
          confirm = false
        }
      }
    } else {
      // TODO: 跳转到登录页
    }
  }
  function fetch<T>(url: string, opt) {
    const options = opt
    options.lazy = options?.lazy ?? true

    const ccFetch = $fetch.create({
      baseURL: '/base-api/v1/api',
      onRequest: ({ request, options, error }) => {
        handleRequest(options)
      },
      onRequestError({ request, options, error }) {},
      onResponse({ response, options, error }) {
        handleResponse(response)
      },
      onResponseError({ request, options, error }) {},
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
  }
}
