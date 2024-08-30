<template>
  <div>
    {{ router.params }}
  </div>
</template>

<script lang="ts" setup>
  const { get, post } = useUseRequest()

  // const res = await get('/evt/evtActivity/exhibitionActivity/all')
  // console.log('🚀 ~ file: [childId].vue:11 ~ res:', res.data.value)

  const getList = async () => {
    const res = await post('/e你妈脸上QWER', {
      dictType: 'cmc_company_industry_sector',
      // dictType: 'cmc_company_industry_sector',
    })
    // const res = await post('/system/admin/dict/data/type/dictType', {
    //   dictType: 'cmc_company_industry_sector',
    //   // dictType: 'cmc_company_industry_sector',
    // })
    console.log('🚀 ~ file: [childId].vue:19 ~ getList ~ res:', res)
  }

  getList()

  definePageMeta({
    title: 'Test seo Detail',
    description: 'WDNDNG!',
    hidden: true,
  })

  useSeoMeta({
    description: 'wqeJJJJJ',
  })

  const router = useRoute()
</script>

<style></style>
