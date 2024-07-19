import presetIcons from '@unocss/preset-icons'
import { resolve } from 'pathe'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    './nuxt-tailwindcss-layer', // NavBar and Footer components
  ],

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
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
  ],

  fontMetrics: {
    fonts: ['Inter', 'Kalam'],
  },

  critters: {
    config: {
      preload: 'swap',
    },
  },

  css: ['@/assets/css/tailwind.css'],

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
    highlight: {
      langs: [
        'js',
        'jsx',
        'json',
        'ts',
        'tsx',
        'vue',
        'css',
        'html',
        'vue',
        'shell',
        'bash',
        'md',
        'mdc',
        'yaml',
        'diff',
      ],
      theme: 'dracula-soft',
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
    dir: 'assets/images',
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

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'lite-youtube',
    },
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

  pinegrow: {
    liveDesigner: {
      iconPreferredCase: 'unocss', // default value (can be removed), Nuxt UI uses the unocss format for icon names
      devtoolsKey: 'devtoolsKey', // see plugins/devtools.client.ts
      tailwindcss: {
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        configPath: 'tailwind.config.ts',
        cssPath: '@/assets/css/tailwind.css',
        // themePath: false, // Set to false so that Design Panel is not used
        // restartOnConfigUpdate: true,
        restartOnThemeUpdate: true,
      },
      // plugins: [
      //   {
      //     name: 'My Awesome Lib 3.0',
      //     key: 'my-awesome-lib',
      //     pluginPath: fileURLToPath(
      //       new URL('./web-types/my-awesome-lib.json', import.meta.url),
      //     ),
      //   },
      // ],
    },
  },
})
