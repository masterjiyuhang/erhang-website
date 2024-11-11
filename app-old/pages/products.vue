<template>
  <div class="container flex items-start gap-16">
    <div class="w-full">
      <ProductResultCount />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import ProductResultCount from '~/components/shopElements/ProductResultCount.vue'

  definePageMeta({
    title: 'Products',
    description: '3',
    type: 'secondary',
    navOrder: 6,
  })
</script>

<style></style>
