<template>
  <div>
    <NuxtImg
      v-if="imgUrl"
      :src="imgUrl"
      :alt="title"
      class="w-full h-full rounded object-cover"
      loading="lazy"
      @click="openByLink(link)"
    />
    <div v-else class="w-full h-full bg-primary-100 rounded" />
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    imgUrl: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  })
</script>

<style></style>
