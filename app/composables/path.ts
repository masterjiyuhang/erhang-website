export const usePath = () => {
  const { locale } = useI18n()
  const localeRoute = useLocaleRoute()

  function navigateToLocalizedPath(path: string) {
    const route = localeRoute(path, locale.value)
    navigateTo(route.path)
  }

  return {
    navigateToLocalizedPath,
    locale,
    localeRoute,
  }
}
