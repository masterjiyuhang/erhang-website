import presetIcons from '@unocss/preset-icons'
import { i18nConfig } from './app/config/i18n.config'
import site from './site'
import { resolve } from 'pathe'

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

  linkChecker: {
    enabled: false,
    excludeLinks: ['https://twitter.com/vuedesigner'],
    report: {
      html: true,
      markdown: true,
    },
  },
  app: {
    baseURL: '/',
    head: {
      title: 'Nuxt App',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
          charset: 'utf-8',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: '/api2',
      nestBaseUrl: '/base-api',
      baseUrl: '/api',
      constant: {
        OPEN_JOIN_US: 'OPEN_JOIN_US',
      },
    },
    app: {},
  },

  devServer: {
    port: 3555,
  },
  css: ['@/assets/css/global.css', '@/assets/iconfont/iconfont.css'],

  nitro: {
    preset: 'vercel-edge',
    devProxy: {
      '/base-api': {
        target: 'http://localhost:3000', // 本地环境
      },
      '/jc-sit-sapi': {
        target: 'https://sapi-sit.jctrans.com',
      },
    },
  },
  devtools: { enabled: true },

  modules: [
    '@pinegrow/nuxt-module',
    '@unocss/nuxt',
    '@nuxt/devtools',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/image',
    '@vee-validate/nuxt',
    // '@nuxtjs/fontaine',
    '@nuxtjs/seo',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxtjs/fontaine',
    '@nuxtjs/critters',
    '@element-plus/nuxt',
    'nuxt-lodash',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],
  fontMetrics: {
    fonts: ['Inter', 'Kalam'],
  },

  critters: {
    config: {
      preload: 'swap',
    },
  },
  i18n: i18nConfig,

  tailwindcss: {
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
    providers: {
      ipx: {
        sharp: {
          webp: {
            quality: 120,
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
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },

  pinegrow: {
    liveDesigner: {
      iconPreferredCase: 'unocss', // default value (can be removed), Nuxt UI uses the unocss format for icon names
      devtoolsKey: 'devtoolsKey', // see plugins/devtools.client.ts
      tailwindcss: {
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        configPath: 'tailwind.config.ts',
        cssPath: '@/assets/css/tailwind.css',

        restartOnThemeUpdate: true,
      },
    },
  },

  content: {
    sources: {
      content: {
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
  compatibilityDate: '2024-09-19',
})
