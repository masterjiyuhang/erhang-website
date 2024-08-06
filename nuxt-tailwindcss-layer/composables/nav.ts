import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import site from '~~/site'

export const useNav = () => {
  const { locale } = useI18n()
  const routes = useRouter().getRoutes()

  const navlinksFromRouter = computed(() => {
    return routes
      .filter((route) => route.meta.hidden !== true)
      .filter(
        (route) => route.name && route.name[0] !== route.name[0].toUpperCase(),
      )
      .filter((route) => route.path !== '/try-now')
      .sort((a, b) =>
        a.meta.navOrder &&
        b.meta.navOrder &&
        +a.meta.navOrder > +b.meta.navOrder
          ? 1
          : -1,
      )
      .filter((item) => item.path.includes(locale.value))
      .map((route) => {
        return {
          text: route.meta.title,
          link: route.path,
          icon: route.meta.icon,
          type: route.meta.type,
        }
      })
  })

  const navlinksFromConfig = site.nav

  const navlinks = computed(() => {
    return navlinksFromRouter.value.length
      ? navlinksFromRouter.value
      : navlinksFromConfig
  })

  const navlinksPrimary = computed(() => {
    return navlinks.value.filter(
      (navlink) => !navlink.type || navlink.type === 'primary',
    )
  })

  const navlinksSecondary = computed(() => {
    return navlinks.value.filter((navlink) => navlink.type === 'secondary')
  })

  const currentRoute = useRoute()
  const currentPath = computed(() => currentRoute.path)

  return {
    navlinks,
    navlinksPrimary,
    navlinksSecondary,
    currentPath,
  }
}

export const isCurrentRoute = (navlink, currentPath) => {
  const { locale } = useI18n()
  if (!currentPath) {
    currentPath = useNav().currentPath.value
  }
  return navlink.link === `/${locale.value}`
    ? currentPath === navlink.link
    : currentPath.startsWith(navlink.link)
}
