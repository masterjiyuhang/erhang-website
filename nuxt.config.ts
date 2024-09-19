import presetIcons from '@unocss/preset-icons'
import { resolve } from 'pathe'
import { i18nConfig } from './app/config/i18n.config'
import site from './site'

const { name, url } = site
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3555,
    host: '0.0.0.0',
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: '/api',
      nestBaseUrl: '/base-api',
    },
  },
  extends: [
    './nuxt-tailwindcss-layer', // NavBar and Footer components
  ],

  // Defaults options
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },

  site: {
    name,
    url,
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
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
    '@nuxtjs/tailwindcss',
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

  css: ['@/assets/css/global.css', '@/assets/iconfont/iconfont.css'],

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

  plugins: [],

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

  elementPlus: {
    /** Options */
    icon: 'ElIcon',
    importStyle: 'scss',
  },
})
