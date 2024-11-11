<template>
  <div class="container p-0">
    <BaseTitle
      :title="'推荐商家'"
      :show-more="true"
      @more="openPageByAppId('SHOP')"
    />

    <div class="w-full mt-4">
      <HeadlessTabGroup :selected-index="selectedTab" @change="changeTab">
        <HeadlessTabList class="flex space-x-2 rounded bg-white p-1">
          <HeadlessTab
            v-for="city in HomeRecommendCityList"
            :id="city.cityId + ''"
            :key="city.cityId"
            v-slot="{ selected }"
            as="template"
          >
            <button
              :class="[
                'w-[54px] h-6 py-1 px-2 text-xs leading-[14px] font-medium',
                'ring-white/60 ring-offset-2 ring-offset-transparent focus:outline-none focus:ring-2',
                selected
                  ? 'bg-primary text-white'
                  : 'bg-white text-paper  hover:bg-white/[0.12] hover:text-paper-50',
              ]"
            >
              {{ city.name }}
            </button>
          </HeadlessTab>
        </HeadlessTabList>

        <HeadlessTabPanels class="mt-2">
          <HeadlessTabPanel
            v-for="(city, idx) in HomeRecommendCityList"
            :id="idx + city.name"
            :key="idx"
            :class="['rounded-xl', ' focus:outline-none']"
          >
            <el-carousel
              :interval="5000"
              arrow="never"
              indicator-position="outside"
              height="432px"
              :autoplay="false"
            >
              <el-carousel-item
                v-for="(splitArr, iii) in splitArrayIntoGroups(
                  city.children,
                  8,
                )"
                :key="iii"
              >
                <div justify="center" class="grid grid-cols-4 gap-2">
                  <MerchantCard
                    v-for="(item, infoIndex) in sortArr(splitArr)"
                    :key="infoIndex"
                    :subitem="item"
                  />
                </div>
              </el-carousel-item>
            </el-carousel>
          </HeadlessTabPanel>
        </HeadlessTabPanels>
      </HeadlessTabGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const selectedTab = ref(0)
  const loading = ref(false)
  const HomeRecommendCityList = ref([
    {
      name: '上海',
      cityId: 4019,
      children: [],
    },
    {
      name: '大连',
      cityId: 2701,
      children: [],
    },
    {
      name: '宁波',
      cityId: 2768,
      children: [],
    },
    {
      name: '深圳',
      cityId: 2882,
      children: [],
    },
    {
      name: '天津',
      cityId: 3763,
      children: [],
    },
    {
      name: '青岛',
      cityId: 2815,
      children: [],
    },
    {
      name: '广州',
      cityId: 2880,
      children: [],
    },
    {
      name: '其他',
      cityId: -1,
      children: [],
    },
  ])

  function changeTab(index: number) {
    selectedTab.value = index
    getHomePageShopList(HomeRecommendCityList.value[index].cityId)
  }

  function sortArr(arr) {
    return arr.sort((a, b) => {
      const aHasTSP = a.vipCodeList.includes('TSP')
      const aHasQSP = a.vipCodeList.includes('QSP')
      const bHasTSP = b.vipCodeList.includes('TSP')
      const bHasQSP = b.vipCodeList.includes('QSP')

      // TSP 优先
      if (aHasTSP && !bHasTSP) return -1
      if (!aHasTSP && bHasTSP) return 1

      // QSP 优先 (如果双方都没有 TSP)
      if (aHasQSP && !bHasQSP) return -1
      if (!aHasQSP && bHasQSP) return 1

      // 如果都没有 TSP 和 QSP，保持原顺序
      return 0
    })
  }

  const config = useRuntimeConfig()
  /**
   * 获取首页推荐商铺
   */
  function getHomePageShopList(cityId: number) {
    const { post } = useUseRequest()
    loading.value = true
    post(
      '/hzh/fr/center/shop/getHomePageShopList',
      { cityId },
      {},
      {
        baseApi: config.public.PROD_CLIENT_PROXY_API,
      },
    )
      .then((res: any) => {
        HomeRecommendCityList.value[selectedTab.value].children =
          res.data.records
        return
      })
      .finally(() => {
        loading.value = false
      })
  }

  getHomePageShopList(HomeRecommendCityList.value[selectedTab.value].cityId)
</script>

<style lang="scss">
  .el-carousel__button {
    background-color: #d8d8d8;
    opacity: 1;
  }

  .el-carousel__indicator.is-active button {
    opacity: 1;
    background-color: #ff6a00;
  }
</style>
