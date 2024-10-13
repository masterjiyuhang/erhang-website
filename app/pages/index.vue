<template>
  <div class="-top-24 relative">
    <HomeSearch />
    <HomeTopBanner />
    <HomeRecommendMerchant />
    <HomeSeaTransport />
    <HomeAirTransport />
    <HomeLandTransport />
    <HomeComprehensiveServices />
    <HomeOverseasAgents />
    <div class="container p-0 space-x-5 flex h-[45px] mt-4">
      <div class="flex-1 h-full bg-primary-100" />
      <div class="w-[230px] h-full bg-primary-100" />
    </div>

    <HomeTools class="mt-4" />
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    title: 'Home',
    description: ' Thousands of nutrition plans, one act of improvement',
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
    isWhite: true,
  })
</script>

<style></style>
