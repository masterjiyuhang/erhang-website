export const useGlobal = () => {
  const { locale } = useI18n()

  const isEnglish = computed(() => locale.value === 'en')
  return {
    isEnglish,
  }
}
