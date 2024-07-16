export default defineNuxtRouteMiddleware((to, from) => {
  console.log('running global auth middleware.')
})
