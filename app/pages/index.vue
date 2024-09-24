<template>
  <!-- <div class="flex flex-col min-h-screen"> -->
  <div class="-top-24 relative">
    <HomeSearch />
    <HomeTopBanner />
    <HomeTestComp />
    <HomeHeroSection />
    <CurveShape />
    <HomeHeroCard />
    <HomeAboutUs />

    <div
      class="h-[235px] w-[90px] bg-[#7e7e7e] absolute top-[370px] left-0 lg:left-[8%]"
    ></div>
    <div
      class="h-[235px] w-[90px] bg-[#7e7e7e] absolute top-[370px] right-0 lg:right-[8%]"
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
