// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  name: 'Happy Baby',
  description: 'Adopt Your Fur Mate',
  logo: 'i-noto:baby-bottle',
  author: 'Pinegrow',
  url: 'https://erhang-website.vercel.app/',
  github: 'https://github.com/pinegrow/happy-paws-with-nuxt-tailwindcss',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    { text: 'Home', link: '/', type: 'primary', icon: 'i-mdi-home' },
    { text: 'Adopt Now', link: '/adopt', type: 'primary', icon: 'i-mdi-home' },
    {
      text: 'Donate',
      link: '/quick-start',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
    {
      text: 'Member',
      link: '/member',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
    { text: 'Blog', link: '/blog', type: 'secondary', icon: 'i-mdi-home' },
    {
      text: 'Tools',
      link: '/tools',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
  ],
}
