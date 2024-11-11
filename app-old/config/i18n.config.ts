import type { NuxtI18nOptions } from '@nuxtjs/i18n'

export const i18nConfig: NuxtI18nOptions = {
  locales: [
    { code: 'en', file: 'en-US.json', name: 'English 🇺🇸' },
    { code: 'cn', file: 'zh-CN.json', name: '中国 🇨🇳' },
  ],
  langDir: 'locales',
  defaultLocale: 'en',
  strategy: 'prefix',
}
