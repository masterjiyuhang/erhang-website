<template>
  <div>
    <NuxtImg
      v-if="gravatar"
      preset="avatar"
      class="w-10 h-10 rounded-3xl"
      alt="author image"
      :src="'https://gravatar.com/avatar/' + gravatar"
    />
  </div>
</template>

<script lang="ts" setup>
  defineProps<{
    author: string
    avatar?: string
    gravatar?: string
    twitter?: string
  }>()
</script>

<style></style>
