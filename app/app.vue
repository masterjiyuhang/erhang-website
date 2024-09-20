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
  provideHeadlessUseId(() => useId())
</script>
