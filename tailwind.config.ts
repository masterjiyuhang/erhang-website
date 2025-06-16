import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'
import tailwindAspectRatio from '@tailwindcss/aspect-ratio'
import tailwindHeadless from '@headlessui/tailwindcss'

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
    tailwindHeadless,
  ],
}
