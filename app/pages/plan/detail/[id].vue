<template>
  <div>
    <h1>Plan Detail</h1>
    <p>Plan ID: {{ id }}</p>
    <div>currentItem: {{ currentItem }}</div>
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute()
  const { id } = route.params

  const { getPlanList } = usePlanList()
  const { data } = await getPlanList()
  console.log('🚀 ~ file: [id].vue:12 ~ data:', data.value)

  const currentItem = computed(() => {
    return data.value.data.records.find((item) => item.id === Number(id))
  })
</script>

<style></style>
