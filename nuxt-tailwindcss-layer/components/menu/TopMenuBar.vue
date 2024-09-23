<template>
  <div class="container flex justify-between">
    <div @click="navigateToLocalizedPath('/')">
      <NuxtImg
        :src="
          isWhite
            ? 'https://resources.jctrans.com/res/hzh/pc/img/logo_dark@2x.png'
            : 'https://resources.jctrans.com/res/hzh/pc/img/logo_nor@2x.png'
        "
        class="w-[298px] h-[32px] cursor-pointer"
      />
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
