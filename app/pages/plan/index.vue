<template>
  <div class="w-[1200px] mx-auto flex flex-col">
    <h1>plan list</h1>
    <div
      v-for="item in data.data.records"
      :key="item.id"
      class="my-4 bg-primary-100 p-8"
      @click="handleDetail(item)"
    >
      <span>{{ getCnOrEn(item.titleCn, item.titleEn) }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    title: 'Plan',
    description: '1',
    type: 'secondary',
    navOrder: 4,
  })

  const { navigateToLocalizedPath } = usePath()

  const { getPlanList } = usePlanList()
  const { data } = await getPlanList()
  function handleDetail(item: any) {
    navigateToLocalizedPath(`/plan/detail/${item.id}`)
  }
</script>

<style></style>
