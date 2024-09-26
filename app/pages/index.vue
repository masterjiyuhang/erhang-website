<template>
  <!-- <div class="flex flex-col min-h-screen"> -->
  <div class="-top-24 relative">
    <HomeSearch />
    <HomeTopBanner />
    <HomeRecommendMerchant />
    <HomeSeaTransport />
    <HomeAirTransport />
    <HomeTestComp />
    <!-- <HomeHeroSection />
    <CurveShape />
    <HomeHeroCard />
    <HomeAboutUs /> -->

    <div
      class="h-[235px] w-[90px] bg-[#7e7e7e] absolute top-[370px] left-0 xl:left-[8%] hidden 2xl:block"
    ></div>
    <div
      class="h-[235px] w-[90px] bg-[#7e7e7e] absolute top-[370px] right-0 xl:right-[8%] hidden 2xl:block"
    ></div>
  </div>
</template>

<script lang="ts" setup>
  import { useGlobalStore } from '@/stores/global'
  const store = useGlobalStore()
  const { increment } = useGlobalStore()

  const cc = store.name

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
