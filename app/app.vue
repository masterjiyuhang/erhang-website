<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
      <!-- <HttpErrorProvider> <NuxtPage /> </HttpErrorProvider> -->
    </NuxtLayout>
  </div>
</template>

<script setup>
  // Use SSR-safe IDs for Headless UI
  provideHeadlessUseId(() => useId())

  const { locale, getLocaleCookie } = useI18n()
  locale.value = getLocaleCookie()
</script>
