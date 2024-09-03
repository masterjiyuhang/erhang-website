<template>
  <div>
    {{ router.params }}
    {{ list }}
    <h1>BaseList</h1>
    {{ baseList }}
    <el-button type="primary" @click="handleClick"> test get click</el-button>

    <h2>useCustomer</h2>

    <el-button type="primary" @click="refresh()"> test server list</el-button>
  </div>
</template>

<script lang="ts" setup>
  const list = ref([])
  const baseList = ref()

  const { data, refresh } = await useCustomFetch('/car/list')

  // 直接发起请求的情景 比如直接请求静态资源
  async function handleClick() {
    const res: any = await $fetch('/base-api/v1/api/car/list', {
      method: 'get',
    })
    console.log('🚀 ~ file: [childId].vue:19 ~ handleClick ~ res:', res)
    list.value = res.data.list
  }

  // 服务端请求 页面初始化的时候加载出来 不支持点击事件请求  会跨域
  async function getMountedList() {
    const res = await useCustomFetch('/car/getListByName', {
      method: 'post',
      body: { name: '' },
      baseURL: 'http://localhost:3000/v1/api',
    })
    console.log('🚀 ~ file: [childId].vue:45 ~ res:', res)
  }

  definePageMeta({
    title: 'Test seo Detail',
    description: 'WDNDNG!',
    hidden: true,
  })

  useSeoMeta({
    description: 'wqeJJJJJ',
  })

  const router = useRoute()

  getMountedList()
</script>

<style></style>
