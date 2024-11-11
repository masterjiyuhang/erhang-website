<template>
  <div class="-top-24 relative">
    <HomeSearch />

    <HomeHeroCard />
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
