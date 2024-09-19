<template>
  <div class="container flex">
    <div @click="navigateToLocalizedPath('/')">
      <NuxtImg
        src="/images/panada2.png"
        class="w-[154px] h-[41px] cursor-pointer"
      />
    </div>

    <div>
      <PopoverJoinUs />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import PopoverJoinUs from './PopoverJoinUs.vue'
  const { navigateToLocalizedPath } = usePath()
</script>

<style></style>
