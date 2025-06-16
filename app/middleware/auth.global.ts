export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log(
    'running global auth middleware.',
    import.meta.server,
    import.meta.client,
    to.fullPath,
  )
})
