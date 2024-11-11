<template>
  <div class="-top-24 relative h-full">网站页面升级中</div>
</template>

<script lang="ts" setup>
  import { isClient } from '@vueuse/core'

  definePageMeta({
    name: 'home',
    title: 'Home',
    description: ' Thousands of plans, one act of improvement',
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
    isWhite: true,
  })
</script>

<style></style>
