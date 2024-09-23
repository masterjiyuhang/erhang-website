import { isClient } from '@vueuse/core'

export default defineNuxtRouteMiddleware((to, from) => {
  if (isClient) {
    console.log('running global auth middleware.')
  }
})
