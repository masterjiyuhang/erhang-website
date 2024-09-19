<template>
  <!-- <div class="flex flex-col min-h-screen"> -->
  <div>
    <el-popover
      placement="bottom"
      title="Title"
      :width="200"
      trigger="click"
      content="this is content, this is content, this is content"
    >
      <template #reference>
        <el-button class="m-2">Click to activate</el-button>
      </template>
    </el-popover>
    <!-- <HomeTestComp />
    <HomeHeroSection />
    <CurveShape />
    <HomeHeroCard />
    <HomeAboutUs /> -->
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
