import FingerprintJS from '@fingerprintjs/fingerprintjs'
import { isClient } from '@vueuse/core'

export default defineNuxtPlugin((nuxtApp) => {
  if (isClient) {
    const fpPromise = FingerprintJS.load()

    nuxtApp.provide('getFingerprint', async () => {
      const fp = await fpPromise

      const result = await fp.get()

      return result.visitorId
    })
  }
})
