<template>
  <div>
    <!-- <h1 class="cursor-pointer" @click="increment">{{ store.count }}{{ cc }}</h1> -->
    <HeroSection />
  </div>
</template>

<script lang="ts" setup>
  import { useGlobalStore } from '@/stores/global'
  const store = useGlobalStore()
  const { increment } = useGlobalStore()
  const cc = store.name
</script>

<style></style>
