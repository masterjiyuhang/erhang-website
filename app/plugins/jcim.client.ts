/*
 * @Author: zhangxiangyi
 * @Date: 2024-10-25 14:12:19
 * @LastEditTime: 2024-10-25 14:13:42
 * @LastEditors: zhangxiangyi
 * @Description: description
 * @FilePath: /server-hzh-home-front/app/plugins/jcim.client.ts
 */
// plugins/jcim.client.ts
import JCIM from '~/components/jcim/jcim.js'

export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.provide('JCIM', JCIM)
  window.JCIM = JCIM

  return {
    provide: {
      JCIM: JCIM,
    },
  }
})
