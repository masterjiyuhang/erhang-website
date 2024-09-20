export default defineNuxtPlugin(() => {
  const userAuth = useCookie('token')
  const config = useRuntimeConfig()

  const $customFetch = $fetch.create({
    baseURL:
      (config.public.baseFetchUrl as string) ?? 'http://localhost:3000/v1/api',
    onRequest({ request, options, error }) {
      console.log('🚀 ~ file: customFetch.ts:8 ~ onRequest ~ request:', request)
      if (userAuth.value) {
        // Add Authorization header
        options.headers = options.headers || {}
        options.headers['Authorization'] = `Bearer ${userAuth.value}`
      }
    },
    onRequestError({ request, options, error }) {
      console.log(
        '🚀 ~ file: customFetch.ts:18 ~ onRequestError ~ error:',
        error,
      )
    },
    onResponse({ response }) {
      console.log(
        '🚀 ~ file: customFetch.ts:22 ~ onResponse ~ response:',
        response,
      )
      // response._data = new myBusinessResponse(response._data)
    },
    onResponseError({ response }) {
      // if (response.status === 401) {
      //   return navigateTo('/login')
      // }
    },
  })
  // Expose to useNuxtApp().$customFetch
  return {
    provide: {
      customFetch: $customFetch,
    },
  }
})
