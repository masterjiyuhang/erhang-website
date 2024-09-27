import type { UseFetchOptions } from 'nuxt/app'

export function useCustomFetch<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {},
) {
  return useFetch(url, {
    method: options.method || 'GET',
    ...options,
    $fetch: useNuxtApp().$customFetch as any,
  })
}
