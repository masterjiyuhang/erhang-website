<template>
  <div class="container">
    Home Page
    <el-button @click="go2LoginPage($route.fullPath)">登录</el-button>
  </div>
</template>

<script lang="ts" setup>
  import { go2LoginPage } from '~/utils/auth'

  definePageMeta({
    title: 'Home',
    description: ' Thousands of nutrition plans, one act of improvement',
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
  })
</script>

<style lang="scss" scoped></style>
