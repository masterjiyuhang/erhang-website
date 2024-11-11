export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    console.log('🚀 ~ file: handleError.ts:3 ~ defineNuxtPlugin ~ info:', info)
    console.log(
      '🚀 ~ file: handleError.ts:3 ~ defineNuxtPlugin ~ instance:',
      instance,
    )
    console.log(
      '🚀 ~ file: handleError.ts:3 ~ defineNuxtPlugin ~ error:',
      error,
    )
    // handle error, e.g. report to a service
  }
})
