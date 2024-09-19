<template>
  <div class="container">
    <div @click="navigateToLocalizedPath('/')">
      <NuxtImg
        src="/images/panada2.png"
        class="w-[154px] h-[41px] cursor-pointer"
      />
    </div>

    <div>
      <!-- <PopoverJoinUs /> -->
      sss test <el-button>sssswqeqwe</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { navigateToLocalizedPath } = usePath()
</script>

<style></style>
