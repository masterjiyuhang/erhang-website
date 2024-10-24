<template>
  <div class="container flex justify-between">
    <div @click="navigateToLocalizedPath('/')">
      <TheLogo :class="isWhite ? 'text-primary-200' : 'text-primary-400'" />
    </div>

    <div class="flex items-center">
      <PopoverJoinUs />
      <PhoneShow :is-white="isWhite" />
      <LoginShow />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import PopoverJoinUs from './PopoverJoinUs.vue'
  import PhoneShow from './PhoneShow.vue'
  import LoginShow from './LoginShow.vue'

  const { navigateToLocalizedPath } = usePath()
  defineProps({
    isWhite: { type: Boolean, default: false },
  })
</script>

<style></style>
