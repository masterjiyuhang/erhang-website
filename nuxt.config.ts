import presetIcons from '@unocss/preset-icons'
import { resolve } from 'pathe'
import { i18nConfig } from './app/config/i18n.config'
import site from './site'

const { name, url } = site
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 8081,
    host: '0.0.0.0',
  },
  runtimeConfig: {
    // NODE_TLS_REJECT_UNAUTHORIZED: '0',
    public: {
      // # 开发环境后端地址
      PROXY_DOMAIN_REAL: 'https://api-dev2.jctrans.com',
      // # 开发环境后端静态JSON地址
      PROXY_DOMAIN_JSON: 'https://sapi-sit.jctrans.com',
    },
  },
  extends: [
    './nuxt-tailwindcss-layer', // NavBar and Footer components
  ],

  site: {
    name,
    url,
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  nitro: {
    devProxy: {
      '/base-api': {
        target: 'http://localhost:3000', // 本地环境
      },
      '/jc-sit-sapi': {
        target: 'https://sapi-sit.jctrans.com',
      },
      '/jc-api': {
        target: 'https://api-dev2.jctrans.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },

  app: {
    baseURL: '/',
    head: {
      title: 'Nuxt 3',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
          charset: 'utf-8',
        },
      ],
      script: [
        {
          src: '/config/config.js',
          type: 'text/javascript',
          defer: true,
        },
      ],
    },
  },

  modules: [
    '@pinegrow/nuxt-module',
    '@unocss/nuxt',
    '@nuxt/devtools',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/image',
    '@vee-validate/nuxt',
    '@nuxtjs/seo',
    '@nuxtjs/fontaine',
    '@nuxtjs/critters',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@element-plus/nuxt',
    'nuxt-lodash',
  ],

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

  fontMetrics: {
    fonts: ['Inter', 'Kalam'],
  },

  critters: {
    config: {
      preload: 'swap',
    },
  },

  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/global.css',
    '@/assets/iconfont/iconfont.css',
  ],

  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
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
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },

  content: {
    sources: {
      contetnt: {
        driver: 'fs',
        base: resolve(__dirname, 'app/content'),
      },
    },
    markdown: {
      anchorLinks: false,
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'external-link',
          },
        ],
      ],
    },
  },

  pinia: {
    storesDirs: ['app/stores/**'],
  },

  image: {
    format: ['webp, png, jpg'],
    providers: {
      ipx: {
        sharp: {
          webp: {
            quality: 80,
          },
        },
      },
    },
    // dir: 'assets/images',
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

  imports: {
    // dirs: ['my-components'],
  },

  sourcemap: {
    client: false,
    server: false,
  },

  routeRules: {
    '/hidden': { robots: false },
  },

  linkChecker: {
    enabled: false,
    excludeLinks: ['https://twitter.com/vuedesigner'],
    report: {
      html: true,
      markdown: true,
    },
  },

  unocss: {
    presets: [
      presetIcons({
        prefix: 'i-', // default prefix, do not change
      }),
    ],
  },

  // i18n: {
  //   vueI18n: './app/config/i18n.config.ts',
  // },
  i18n: i18nConfig,

  plugins: ['~/plugins/fingerprint'],

  elementPlus: {
    /** Options */
    icon: 'ElIcon',
    importStyle: 'scss',
  },
})
