import type { AsyncData, KeysOf, PickFrom } from '#app/composables/asyncData'
import type { FetchError } from 'ofetch'
import { useMySystemStore } from './../stores/system'
import type { UseFetchOptions } from '#app'
import { useStorage } from '@vueuse/core'
export const useUseRequest = () => {
  const prjId = useSessionStorage('prjId', '')
  const clientId = useStorage('clientId', '')
  const systemStore = useMySystemStore()
  const { $i18n } = useNuxtApp()
  const router = useRouter()
  const { apiBaseUrl } = useRuntimeConfig().public

  function handleRequest(options) {
    // https://sapi-sit.jctrans.com/evt/evtActivity/exhibitionActivity/all
    options.baseURL = apiBaseUrl ?? 'https://cloudapi.jctrans.com'
    options.headers['Accept-Language'] = $i18n.locale.value
    options.headers['APP-ID'] = systemStore.appId
    options.headers['terminal-type'] = 'PC'

    const userAuth = useCookie('token')

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
  }

  function handleResponse(response) {
    console.log(
      '🚀 ~ file: useRequest.ts:31 ~ handleResponse ~ response:',
      response,
    )
    return response.data
  }

  interface ResOptions<T> {
    data: T
    code: number
    success: boolean
    detail?: string
  }
  function handleError<T>({ response }) {
    // 错误处理逻辑

    console.log(
      '🚀 ~ file: useRequest.ts:79 ~ useUseRequest ~ 处理错误:',
      response.status,
      response.body,
    )
  }

  type HttpOption<T> = UseFetchOptions<ResOptions<T>, T, KeysOf<T>>
  function fetch<T>(url: string, opt?: HttpOption<T>) {
    const options = opt as UseFetchOptions<ResOptions<T>>
    options.lazy = options?.lazy ?? true

    return useFetch<ResOptions<T>>(url, {
      onRequest: ({ request, options, error }) => {
        handleRequest(options)
      },
      onResponse: (context) => {
        handleResponse(context)
      },
      onResponseError: (context) => {
        handleError(context)
      },
      ...options,
    }) as AsyncData<PickFrom<T, KeysOf<T>>, FetchError<ResOptions<T>> | null>
  }

  const get = <T>(url: string, params = {}) => {
    return fetch<T>(url, {
      method: 'GET',
      params,
    })
  }

  const post = <T>(url: string, body = {}, params = {}) => {
    console.log('🚀 ~ file: useRequest.ts:78 ~ post ~ url:', url)
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
