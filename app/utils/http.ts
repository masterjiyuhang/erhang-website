import type { FetchError, FetchResponse, SearchParameters } from 'ofetch'
import { hash } from 'ohash'
import type { AsyncData, UseFetchOptions } from '#app'
import type { KeysOf, PickFrom } from '#app/composables/asyncData'

type UrlType =
  | string
  | Request
  | Ref<string | Request>
  | (() => string | Request)

type HttpOption<T> = UseFetchOptions<ResOptions<T>, T, KeysOf<T>>
interface ResOptions<T> {
  data: T
  code: number
  success: boolean
  detail?: string
}

function handleError<T>(
  _method: string | undefined,
  _response: FetchResponse<ResOptions<T>> & FetchResponse<ResponseType>,
) {
  // Handle the error
}

function checkRef(obj: Record<string, any>) {
  return Object.keys(obj).some((key) => isRef(obj[key]))
}

function fetch<T>(url: UrlType, opts: HttpOption<T>) {
  // Check the `key` option
  const { key, params, watch } = opts
  if (!key && ((params && checkRef(params)) || (watch && checkRef(watch))))
    console.error(
      '\x1B[31m%s\x1B[0m %s',
      '[useHttp] [error]',
      'The `key` option is required when `params` or `watch` has ref properties, please set a unique key for the current request.',
    )

  const options = opts as UseFetchOptions<ResOptions<T>>
  options.lazy = options.lazy ?? true

  const { PROD_CLIENT_PROXY_API: apiBaseUrl } = useRuntimeConfig().public

  return useFetch<ResOptions<T>>(url, {
    // Request interception
    onRequest({ options }) {
      // Set the base URL
      options.baseURL = apiBaseUrl as string
      // Set the request headers
      const { $i18n } = useNuxtApp()
      const locale = $i18n.locale.value
      options.headers = new Headers(options.headers)
      options.headers.set('Content-Language', locale)
    },
    // Response interception
    onResponse(_context) {
      // Handle the response
    },
    // Error interception
    onResponseError({ response, options: { method } }) {
      handleError<T>(method, response)
    },
    // Set the cache key
    key: key ?? hash(['api-fetch', url, JSON.stringify(options)]),
    // Merge the options
    ...options,
  }) as AsyncData<PickFrom<T, KeysOf<T>>, FetchError<ResOptions<T>> | null>
}

export const useHttp = {
  get: <T>(url: UrlType, params?: SearchParameters, option?: HttpOption<T>) => {
    return fetch<T>(url, { method: 'get', params, ...option })
  },

  post: <T>(
    url: UrlType,
    body?: RequestInit['body'] | Record<string, any>,
    option?: HttpOption<T>,
  ) => {
    return fetch<T>(url, { method: 'post', body, ...option })
  },

  put: <T>(
    url: UrlType,
    body?: RequestInit['body'] | Record<string, any>,
    option?: HttpOption<T>,
  ) => {
    return fetch<T>(url, { method: 'put', body, ...option })
  },

  delete: <T>(
    url: UrlType,
    body?: RequestInit['body'] | Record<string, any>,
    option?: HttpOption<T>,
  ) => {
    return fetch<T>(url, { method: 'delete', body, ...option })
  },
}
