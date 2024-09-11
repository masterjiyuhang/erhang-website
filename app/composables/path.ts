export const usePath = () => {
  const { locale } = useI18n()
  const localeRoute = useLocaleRoute()
  // const router = useRouter()

  /**
   * 导航到本地化路径
   *
   * 此函数的作用是根据给定的路径和当前的语言设置，导航到相应的页面
   * 它首先通过localeRoute函数生成一个包含本地化路径的route对象，然后使用navigateTo函数进行页面跳转
   *
   * @param path - 目标页面的路径，不包含语言前缀
   */
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
