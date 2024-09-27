<template>
  <div class="container p-0">
    <BaseTitle :title="'推荐商家'" :show-more="true" />

    <div class="w-full mt-4">
      <HeadlessTabGroup :selected-index="selectedTab" @change="changeTab">
        <HeadlessTabList class="flex space-x-2 rounded bg-white p-1">
          <HeadlessTab
            v-for="city in HomeRecommendCityList"
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
          <el-skeleton
            class="w-full h-[432px]"
            :loading="loading"
            animated
            :rows="5"
            :throttle="500"
          >
            <template #default>
              <HeadlessTabPanel
                v-for="(city, idx) in HomeRecommendCityList"
                :key="idx"
                :class="['rounded-xl', ' focus:outline-none']"
              >
                <el-carousel
                  :interval="5000"
                  arrow="hover"
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
                    <div justify="center" class="grid grid-cols-4 gap-4">
                      <div
                        v-for="(item, infoIndex) in splitArr"
                        :key="infoIndex"
                        :class="[
                          'min-h-[208px] bg-white rounded',
                          'text-paper hover:text-primary',
                        ]"
                      >
                        <div class="p-2">
                          <div
                            class="truncate font-medium text-base leading-[19px]"
                          >
                            {{ item.nameCn }}
                          </div>
                          <div class="flex items-center space-x-1 mt-2">
                            <!-- 实力服务商 -->
                            <ShopTagServiceProvider />
                            <!-- 信誉会员 -->
                            <ShopTagCreditMember :year="99" />
                          </div>
                        </div>
                        <div class="p-2">
                          <div class="flex items-center">
                            <img
                              :src="item.headPortrait"
                              alt="Avatar"
                              class="w-[60px] h-[60px] rounded mr-2"
                            />
                            <div>
                              <h3
                                class="text-paper text-sm font-bold leading-[19px]"
                              >
                                <!-- LARRY 杨 -->
                                {{ item.staffNameCn }}
                              </h3>
                              <p class="text-paper-100 text-sm leading-[19px]">
                                <!-- 业务经理 -->
                                {{ item.jobTitleCn }}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="px-2 pt-1 pb-2">
                          <div
                            class="text-sm text-gray-500 flex items-center space-x-2"
                          >
                            <div
                              v-for="r in item.shopsAdvRoutesDtoList.slice(
                                0,
                                2,
                              )"
                              :key="r.id"
                              class="w-[135px] truncate"
                            >
                              <span
                                class="iconfont icon-icon_inquiry_air text-primary base-icon-content mr-2"
                              ></span>
                              <span class="text-paper">
                                <!-- 上海 - 东南亚线 -->
                                {{ r.cityRouteName }}
                              </span>
                            </div>
                            <!-- <div class="w-[135px] truncate">
                              <span
                                class="iconfont icon-icon_inquiry_air text-primary base-icon-content mr-2"
                              ></span>
                              <span class="text-paper">上海 - 东南亚线</span>
                            </div>
                            <div class="w-[135px] truncate">
                              <span
                                class="iconfont icon-icon_inquiry_air text-primary base-icon-content mr-2"
                              ></span>
                              <span class="text-paper">上海 - 东南亚线</span>
                            </div> -->
                          </div>
                          <div class="flex space-x-2 mt-2 flex-wrap">
                            <div
                              v-for="tag in item.advantageCodeResultList"
                              :key="tag"
                              class="bg-[#f5f5f5] rounded-xl text-[#686868] text-center text-xs py-1 px-2 mt-1"
                            >
                              <!-- 公司优势 -->
                              {{
                                getDictLabelByCode(
                                  'companyAdvantageList',
                                  tag.advantageCode,
                                )
                              }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </HeadlessTabPanel>
            </template>
          </el-skeleton>
        </HeadlessTabPanels>
      </HeadlessTabGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { isClient } from '@vueuse/core'
  import { BANNER_BASE_API, BANNER_JC_BASE_API } from './constant'
  const selectedTab = ref(0)
  const loading = ref(false)
  const { getDictLabelByCode } = useDictStore()
  const HomeRecommendCityList = useState('HomeRecommendCityList', () => [
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
    console.log('Changed active tab to:', index)
    selectedTab.value = index
    getHomePageShopList(HomeRecommendCityList.value[index].cityId)
  }
  /**
   * 获取首页推荐商铺
   */
  function getHomePageShopList(cityId: number) {
    if (isClient) {
      const { post } = useUseRequest()
      loading.value = true
      post(
        '/hzh/fr/center/shop/getHomePageShopList',
        { cityId },
        {},
        {
          baseApi:
            process.env.mode === 'development'
              ? '/mock'
              : 'https://mock.erhang.fun/mock/649d33991d5a0a36692f05e2/erhang',
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
    } else {
      useFetch('/hzh/fr/center/shop/getHomePageShopList', {
        method: 'post',
        body: { cityId },
        baseURL: BANNER_BASE_API,
        lazy: true,
        server: true,
      }).then((res) => {
        if (res.status.value === 'success') {
          const r: any = res.data.value
          HomeRecommendCityList.value[selectedTab.value].children =
            r.data.records
        }
      })
    }
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
