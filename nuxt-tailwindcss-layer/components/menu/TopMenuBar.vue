<template>
  <div class="container flex justify-between">
    <div @click="navigateToLocalizedPath('/')">
      <NuxtImg
        src="/images/panada2.png"
        class="w-[154px] h-[41px] cursor-pointer"
      />
    </div>

    <div class="flex items-center">
      <PopoverJoinUs />
      <PhoneShow />
      <LoginShow />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import PopoverJoinUs from './PopoverJoinUs.vue'
  import PhoneShow from './PhoneShow.vue'
  import LoginShow from './LoginShow.vue'

  const { navigateToLocalizedPath } = usePath()
</script>

<style></style>
