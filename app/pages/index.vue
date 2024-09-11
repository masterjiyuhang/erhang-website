<template>
  <div class="container">
    Home Page
    <el-button @click="go2LoginPage($route.fullPath)">登录</el-button>
    <el-button @click="handleExchange">auth exchange</el-button>
  </div>
</template>

<script lang="ts" setup>
  import { authExchangeApi } from '~/api/system'
  import { go2LoginPage } from '~/utils/auth'

  definePageMeta({
    title: 'Home',
    description: ' Thousands of nutrition plans, one act of improvement',
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
  })

  async function handleExchange() {
    const res = await authExchangeApi({
      code: 'b7707031-ad7b-4216-a3de-1b552b757eb9',
    })
    console.log('🚀 ~ file: index.vue:25 ~ handleExchange ~ res:', res)
  }
</script>

<style lang="scss" scoped></style>
