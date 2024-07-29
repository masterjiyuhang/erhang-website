<template>
  <!-- <div class="flex flex-col min-h-screen"> -->
  <div>
    <HomeHeroSection />
    <CurveShape />
    <HomeHeroCard />
    <HomeAboutUs />
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
  })
</script>

<style></style>
