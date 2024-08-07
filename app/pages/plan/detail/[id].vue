<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="w-[1200px] mx-auto flex flex-col my-3">
    <!-- <h1>Plan Detail</h1> -->
    <!-- <p>Plan ID: {{ id }}</p> -->
    <div>
      <!-- currentItem: {{ currentItem }} -->
      <h2>{{ getCnOrEn(currentItem.titleCn, currentItem.titleEn) }}</h2>
      <h3>{{ currentItem.createTime }}</h3>
      <div v-html="getCnOrEn(currentItem.contextCn, currentItem.contextEn)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute()
  const { id } = route.params

  const { getPlanList } = usePlanList()
  const { data } = await getPlanList()

  const currentItem = computed(() => {
    return data.value.data.records.find((item) => item.id === Number(id))
  })

  definePageMeta({
    title: 'Plan Detail',
    description: 'Read, Learn, Enjoy: Your Blog Destination!',
  })

  useHead({
    meta: [
      {
        name: 'description',
        content: 'plan detail',
      },
    ],
  })
</script>

<style></style>
