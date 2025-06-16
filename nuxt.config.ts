import presetIcons from '@unocss/preset-icons'
import site from './site'

const { name, url } = site
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    './nuxt-tailwindcss-layer', // NavBar and Footer components
  ],

  future: {
    compatibilityVersion: 4,
  },

  routeRules: {
    '/hidden': { robots: false },
  },

  sourcemap: {
    client: false,
    server: false,
  },

  site: {
    name,
    url,
  },

  app: {
    baseURL: '/',
    buildAssetsDir: '/statics/',
    head: {
      title: '中国站',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://resources.jctrans.com/res/jc/pc/img/fav.jpg',
        },
      ],
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
          charset: 'utf-8',
        },
      ],
      // script: [
      //   {
      //     src: '/config/config.js',
      //     type: 'text/javascript',
      //     defer: true,
      //   },
      // ],
      // script: [
      //   {
      //     src: 'https://resources.jctrans.com/res/eratracking/pc/static/js/ZWZtracking.js',
      //     type: 'text/javascript',
      //     defer: true,
      //   },
      // ],
    },
  },

  runtimeConfig: {
    // NODE_TLS_REJECT_UNAUTHORIZED: '0', client + server
    public: {
      JCIM_DOMAIN: 'https://im-sit.jctrans.net.cn',
      abc: 'aaa',
      DEV_CLIENT_PROXY_API: '/api2',
      PROD_CLIENT_PROXY_API: 'https://cloudapi-sit.jctrans.net.cn',
      SAPI_DOMAIN: 'https://sapi-sit.jctrans.com',
      NEWS_API_DOMAIN: 'https://apinew.jctrans.com',
      DOMAIN_NAME: 'jctrans.com',
      ENV: 'sit',
      LOGIN_SITE: 'https://passport',
      RELEASE_VERSION: '',
      RELEASE_CNT: '',
      RELEASE_TIME: '',
      RELEASE_TAG: '',
      RELEASE_STARTTIME: '',
      constant: {
        OPEN_JOIN_US: 'OPEN_JOIN_US',
        OPEN_CONTACT_INFO: 'OPEN_CONTACT_INFO',
      },
    },
  },

  devServer: {
    port: 8096,
  },

  css: [
    '@/assets/css/global.css',
    '@/assets/iconfont/iconfont.css',
    '@/assets/fonts/index.css',
  ],

  nitro: {
    devProxy: {
      '/base-api': {
        target: 'http://localhost:3000', // 本地环境
      },
      '/jc-sit-sapi': {
        target: 'https://sapi-sit.jctrans.com',
      },
      '/api2': {
        target: 'https://api-dev2.jctrans.com',
        changeOrigin: true,
        secure: false,
      },
      '/jc-api': {
        target: 'https://api-dev2.jctrans.com',
        changeOrigin: true,
        secure: false,
      },
      '/mock': {
        target: 'https://mock.erhang.fun/mock/649d33991d5a0a36692f05e2/erhang',
        changeOrigin: true,
        secure: false,
      },
    },
  },

  devtools: { enabled: true },

  modules: [
    '@unocss/nuxt',
    '@nuxt/devtools',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/image',
    '@vee-validate/nuxt',
    // '@nuxtjs/fontaine',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxtjs/fontaine',
    '@nuxtjs/critters',
    '@element-plus/nuxt',
    'nuxt-lodash',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-swiper',
    '@nuxtjs/robots',
  ],

  fontMetrics: {
    fonts: ['Inter', 'Kalam'],
  },

  critters: {
    config: {
      preload: 'swap',
    },
  },

  i18n: {
    locales: [
      { code: 'en', file: 'en-US.json', name: 'English 🇺🇸' },
      { code: 'cn', file: 'zh-CN.json', name: '中国 🇨🇳' },
    ],
    defaultLocale: 'cn',
    langDir: 'locales',
    debug: false,
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: 'i18n_redirected',
    //   redirectOn: 'root',
    //   fallbackLocale: 'cn',
    // },
  },

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config.ts',
    viewer: true,
  },

  lodash: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: false,
    exclude: ['map'],
    alias: [
      ['camelCase', 'stringToCamelCase'], // => stringToCamelCase
      ['kebabCase', 'stringToKebab'], // => stringToKebab
      ['isDate', 'isLodashDate'], // => _isLodashDate
    ],
  },

  image: {
    format: ['webp, png, jpg'],
    domains: ['jctrans.net.cn', 'jctrans.com'],
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 100,
          height: 100,
        },
      },
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls: {
          NuxtImg: ['src'],
          OgImage: ['image'],
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
    optimizeDeps: {
      include: ['@element-plus/icons-vue', 'lodash-es', 'element-plus'],
    },
    plugins: [],
  },

  pinia: {
    storesDirs: ['app/stores/**'],
  },

  unocss: {
    presets: [
      presetIcons({
        prefix: 'i-', // default prefix, do not change
      }),
    ],
  },

  elementPlus: {
    /** Options */
    defaultLocale: 'zh-cn',
    icon: 'ElIcon',
    importStyle: 'css',
  },

  headlessui: {
    prefix: 'Headless',
  },

  plugins: ['~/plugins/fingerprint', '~/plugins/jcim.client.ts'],
  compatibilityDate: '2024-09-26',
})
