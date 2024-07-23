import type { NuxtI18nOptions } from '@nuxtjs/i18n'

export const i18nConfig: NuxtI18nOptions = {
  locales: [
    { code: 'en_US', file: 'en-US.json', name: 'English 🇺🇸' },
    { code: 'zh_CN', file: 'zh-CN.json', name: '中国 🇨🇳' },
  ],
  langDir: 'locales',
  defaultLocale: 'en_US',
  strategy: 'no_prefix',
}

// export default defineI18nConfig(() => ({
//   legacy: true,
//   locale: 'en_US',
//   messages: {
//     en_US: {
//       hello: 'Hello world',
//     },
//     zh_CN: {
//       hello: '你好世界',
//     },
//   },
// }))
