export const usePath = () => {
  const { locale } = useI18n()
  const localeRoute = useLocaleRoute()
  const router = useRouter()

  function navigateToLocalizedPath(path: string) {
    const route = localeRoute(path, locale.value)
    router.push(route.path)
  }

  return {
    navigateToLocalizedPath,
    locale,
    localeRoute,
  }
}
