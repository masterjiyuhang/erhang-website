export default defineNuxtPlugin(() => {
  const userAuth = useCookie('token')
  const config = useRuntimeConfig()

  const $customFetch = $fetch.create({
    baseURL:
      (config.public.PROD_CLIENT_PROXY_API as string) ??
      'http://localhost:3000/v1/api',
    onRequest({ request, options, error }) {
      if (userAuth.value) {
        // Add Authorization header
        options.headers = options.headers || {}
        options.headers['Authorization'] = `Bearer ${userAuth.value}`
      }
    },
    onRequestError({ request, options, error }) {},
    onResponse({ response }) {
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
