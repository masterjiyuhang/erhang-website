import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'
import tailwindCssPluginPinegrow from '@pinegrow/tailwindcss-plugin'
import tailwindAspectRatio from '@tailwindcss/aspect-ratio'
import tailwindHeadless from '@headlessui/tailwindcss'

import {
  pg_colors,
  pg_fonts,
  pg_backgrounds,
} from './themes/pg-tailwindcss/tokens.mjs'

import { getFontsWithFallback } from './app/utils/font'
import { safelist } from './app/utils/colors'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      screens: {
        xl: '1200px',
        '2xl': '1200px',
      },
      boxShadow: {
        'custom-banner': '0px 4px 6px 0px #E9E9E9',
        'back-top': '0px 1px 4px 0px rgba(0,0,0,0.1);',
      },
      borderRadius: {
        'custom-rounded': '8px 8px 1px 8px',
      },
    },
  },
  plugins: [
    tailwindTypography,
    tailwindForms({
      strategy: 'class',
    }),
    tailwindAspectRatio,
    tailwindCssPluginPinegrow({
      colors: pg_colors, // primary, secondary etc
      fonts: getFontsWithFallback(pg_fonts),
      backgrounds: pg_backgrounds, // bg-design-image, bg-design-image-large
    }),
    tailwindHeadless,
  ],
  safelist,
  get content() {
    const _content = [
      '{.,app,*-layer}/components/**/*.{js,vue,ts}',
      '{.,app,*-layer}/layouts/**/*.vue',
      '{.,app,*-layer}/pages/**/*.vue',
      '{.,app,*-layer}/plugins/**/*.{js,ts}',
      '{.,app,*-layer}/app.vue',
      '{.,app,*-layer}/*.{mjs,js,ts}',
      '{.,*-layer}/nuxt.config.{js,ts}',
    ]
    return process.env.NODE_ENV === 'production'
      ? _content
      : [..._content, './_pginfo/**/*.{html,js}']
  },
}
