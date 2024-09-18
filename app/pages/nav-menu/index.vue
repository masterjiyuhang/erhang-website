<template>
  <div class="mx-auto bg-secondary-500 lg:min-h-full max-w-[1200px]">
    Nav Menu
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    title: 'Nav Menu',
    description: 'Global website nav menu.',
    type: 'secondary',
    navOrder: 111,
  })

  useSeoMeta({
    ogDescription: 'Global website nav menu.',
    description: 'Nav Menu.',
  })
</script>

<style></style>
