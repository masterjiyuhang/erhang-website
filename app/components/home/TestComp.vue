<template>
  <div class="container">
    <el-button class="mb-3" type="primary" @click="handleClick"
      >Locale</el-button
    >
    <el-button class="mb-3" type="primary" @click="handleClickRouter"
      >Router</el-button
    >

    <div class="flex flex-col">
      <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
      <NuxtLink :to="switchLocalePath('cn')">Chinese</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { navigateToLocalizedPath } = usePath()
  const switchLocalePath = useSwitchLocalePath()
  function handleClick() {
    navigateToLocalizedPath('/nest/2/3')
  }
  const router = useRouter()
  function handleClickRouter() {
    router.push(`/nest/99/66`)
  }
</script>

<style></style>
