<template>
  <div class="container">
    nest page

    <el-button type="danger" @click="handleRefresh">refresh</el-button>
  </div>
</template>

<script setup lang="ts">
  const { get } = useUseRequest()

  async function handleRefresh() {
    const res = await get('/car/list')
    console.log('🚀 ~ file: index.vue:12 ~ res:', res)
  }
</script>

<style scoped></style>
