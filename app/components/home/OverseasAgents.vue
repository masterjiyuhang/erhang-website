<template>
  <div class="container p-0">
    <BaseTitle title="海外代理" class="!leading-[25px] py-2" />

    <div class="w-full flex space-x-1.5">
      <div class="flex flex-col flex-1 space-y-1.5">
        <LinkShowCard
          v-for="(item, idx) in nameList"
          :key="item.name"
          :title="item.name"
          :link-list="item.dict"
          :class="idx === nameList.length - 1 ? 'flex-1' : ''"
        />
      </div>
      <div class="w-[281px] bg-white rounded p-2">
        <BaseTitle
          :show-tag="false"
          show-more
          title="热门商铺"
          @more="openPageByAppId('ERA', '/cn/membership/list')"
        />
        <div class="flex flex-col space-y-2 mt-2">
          <div v-for="item in companyList" :key="item.id">
            <ShopElementsShopCard :current-item="item" />
          </div>
        </div>
      </div>
      <div class="w-[246px] bg-white rounded p-2">
        <div v-show="false">{{ TextList }}</div>
        <div class="flex flex-col space-y-2 mb-2">
          <p
            v-for="(item, idx) in TextList"
            :key="item"
            class="flex items-center leading-4 cursor-pointer"
            @click="openByLink(item[0]?.link)"
          >
            <span
              class="text-primary text-sm py-0.5 px-1 shrink-0 font-extrabold"
              >{{ idx + 1 }}.</span
            >
            <span class="ml-1 text-paper text-sm leading-[14px] truncate">{{
              item[0]?.title
            }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { isClient } from '@vueuse/core'
  import { getDefaultApi, getLevel4AdApi } from '~/api/home'
  import { useDictStore } from '~/stores/dict'
  import { fetchAdData } from '~/utils'

  const { nameDict } = useDictStore()

  const nameList = computed(() => nameDict['overseas'])

  const companyList = useState(() => [])
  const TextList = useState(() => [])
  const { post } = useUseRequest()
  const getCompanyList = async () => {
    post('/era/fr/shop/companyDirectory', {
      current: 1,
      size: 3,
      advCodeList: [],
      vipCodeList: [],
      minVipTotalYears: 0,
      maxVipTotalYears: 150,
    })
      .then((res: any) => {
        console.log('🚀 ~ file: OverseasAgents.vue:73 ~ .then ~ res:', res)
        companyList.value = res.data.records
      })
      .catch((err) => {
        console.error(
          '🚀 ~ file: OverseasAgents.vue:71 ~ getCompanyList ~ err:',
          err,
        )
      })
  }

  const getTextList = async () => {
    const promises = Array.from({ length: 7 }, (_, index) => {
      const formattedIndex = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`
      return getLevel4AdApi(`CLS-7-7001-70010${formattedIndex}`)
    })

    const defaultPromises = Array.from({ length: 7 }, (_, index) => {
      const formattedIndex = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`
      return getDefaultApi(`CLS-7-7001-70010${formattedIndex}`)
    })

    await fetchAdData(defaultPromises, promises)
      .then((adList: any[]) => {
        TextList.value = adList.filter((item) => Object.keys(item).length > 0)
      })
      .catch((error) => {
        console.error(
          ' 首页广告	海外代理-右侧文字链 One or more requests failed:',
          error,
        )
      })
  }

  onMounted(() => {
    getCompanyList()
  })
  getTextList()
</script>

<style></style>
