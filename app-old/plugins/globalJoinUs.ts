import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app'
import mitt from 'mitt'
import { isClient } from '@vueuse/core'

export default defineNuxtPlugin((nuxtApp) => {
  const emitter = mitt()

  const globalJoinUs = (data) => {
    if (isClient) {
      const config: any = useRuntimeConfig()
      const key = config.public?.constant.OPEN_JOIN_US
      emitter.emit(key, data)
    } else {
      console.error('globalJoinUs is only available on client side')
    }
  }

  return {
    provide: {
      mitt: emitter,
      globalJoinUs,
    },
  }
})
