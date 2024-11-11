import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app'
import { isClient } from '@vueuse/core'
import { reportCallBack } from '~/api/system'

export default defineNuxtPlugin((nuxtApp) => {
  const app = useNuxtApp()

  const getContactInfo = (data) => {
    if (isClient) {
      const config: any = useRuntimeConfig()
      const key = config.public?.constant.OPEN_CONTACT_INFO

      reportCallBack(
        {
          eventCode: 'HOME.RATE.CARD.CONTACT.INFO.CLICK',
          extensions: {
            COMPID: data?.compId || data?.companyId || '',
          },
        },
        'ZWZ.UC.HOME',
      )
      app.$mitt.emit(key, data)
    } else {
      console.error('getContactInfo is only available on client side')
    }
  }

  return {
    provide: {
      getContactInfo,
    },
  }
})
