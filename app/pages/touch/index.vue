<template>
  <div>
    <HomeHeroBanner />
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    title: 'Touch',
    description: ' Thousands of nutrition plans, one act of improvement',
    navOrder: 2,
    type: 'primary',
    icon: 'i-mdi-home',
  })
  // useSeoMeta({
  //   title: 'My Amazing Site',
  //   ogTitle: 'My Amazing Site',
  //   description: 'This is my amazing site, let me tell you all about it.',
  //   ogDescription: 'This is my amazing site, let me tell you all about it.',
  //   ogImage: 'https://example.com/image.png',
  //   twitterCard: 'summary_large_image',
  // })
  useHead({
    title: 'TouchPage',
    meta: [
      {
        name: 'description',
        content: 'Thousands of nutrition plans, one act of improvement',
      },
    ],
  })
</script>

<style></style>
