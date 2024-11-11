<template>
  <div class="flex container p-0 relative -top-10 top-banner">
    <div class="w-[310px]">
      <!-- 首屏左按钮 一 -->
      <BaseImg
        :img-url="AdList.AdLeftBtnOne?.image || AdList.AdLeftBtnOne?.defaultImg"
        :title="AdList.AdLeftBtnOne?.title"
        :link="AdList.AdLeftBtnOne?.link"
        class="w-full h-20 bg-primary-100 rounded"
      />

      <!-- 首屏左按钮 二 -->
      <BaseImg
        :img-url="AdList.AdLeftBtnTwo?.image || AdList.AdLeftBtnTwo?.defaultImg"
        :title="AdList.AdLeftBtnTwo?.title"
        :link="AdList.AdLeftBtnTwo?.link"
        class="w-full h-20 bg-primary-100 my-1.5 rounded"
      />

      <!-- 今日焦点 -->
      <div class="pt-2">
        <BaseTitle :title="'今日焦点'" class="my-2" />
        <div
          class="h-[131px] p-2 bg-white rounded shadow-custom-banner font-extrabold"
        >
          <div
            v-for="(baseItem, i) in MainTopList?.slice(0, 1)"
            :key="i"
            class="text-primary text-xl mb-2 cursor-pointer"
            @click.stop="openByLink(baseItem?.link)"
          >
            {{ baseItem.title }}
          </div>
          <div class="flex flex-wrap justify-between">
            <div
              v-for="(item, i) in MainTopList?.slice(1)"
              :key="item"
              class="p-2 mt-2 bg-[#f5f5f5] text-left rounded text-xs text-paper w-[48%] cursor-pointer truncate break-all"
              :class="(i + 1) % 2 === 0 ? '' : 'mr-2'"
              @click.stop="openByLink(item?.link)"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>

      <!-- 航运企业公告 -->
      <div class="pt-2 mt-1.5">
        <BaseTitle :title="'航运企业公告'" />
        <el-carousel
          height="76px"
          class="mt-2 p-2 bg-white rounded shadow-custom-banner font-normal overflow-y-auto"
          direction="vertical"
          :autoplay="true"
          :indicator-position="'none'"
        >
          <el-carousel-item
            v-for="(ww, i) in splitArrayIntoGroups(MainTopHyList, 3)"
            :key="i"
            class="space-y-2"
          >
            <div
              v-for="(item, ix) in ww"
              :key="ix"
              class="cursor-pointer"
              @click.stop="openByLink(item?.link)"
            >
              <div class="flex text-xs">
                <div
                  class="px-1 py-0.5 bg-primary-50 bg-opacity-10 h-5 text-primary shrink-0"
                >
                  {{ item.title }}
                </div>
                <div
                  class="ml-1 py-0.5 truncate text-paper text-xs font-normal"
                >
                  {{ item.text }}
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <!-- 最新货盘 -->
      <div class="mt-1.5">
        <div
          class="relative h-[108px] p-2 bg-white rounded shadow-custom-banner font-extrabold flex flex-col justify-between"
        >
          <div
            :style="{
              writingMode: 'sideways-lr',
            }"
            class="absolute top-0 left-0 rounded bg-primary w-[30px] text-center text-sm text-white h-full px-2 py-4"
          >
            最新货盘
          </div>
          <div
            v-for="(item, iid) in recommendList"
            :key="iid"
            class="ml-[38px] text-xs flex items-center h-5 cursor-pointer"
            @click="
              openPageByAppId(
                'TPS',
                `/myFreight/postFreightInquiryDetail/${item.id}`,
              )
            "
          >
            <span class="iconfont icon-position !text-xs text-primary" />

            <div class="ml-1 text-paper font-medium font-[Poppins-B] leading-5">
              {{
                (
                  item.cargoFromPortNameEn ||
                  item.cargoFromCityNameEn ||
                  item.cargoFromCountryNameEn
                ).length > 5
                  ? (
                      item.cargoFromPortNameEn ||
                      item.cargoFromCityNameEn ||
                      item.cargoFromCountryNameEn
                    ).slice(0, 5) + '...'
                  : item.cargoFromPortNameEn ||
                    item.cargoFromCityNameEn ||
                    item.cargoFromCountryNameEn
              }}
              -
              {{
                (
                  item.targetPortNameEn ||
                  item.cargoToCityNameEn ||
                  item.cargoToCountryNameEn
                ).length > 5
                  ? (
                      item.targetPortNameEn ||
                      item.cargoToCityNameEn ||
                      item.cargoToCountryNameEn
                    ).slice(0, 5) + '...'
                  : item.targetPortNameEn ||
                    item.cargoToCityNameEn ||
                    item.cargoToCountryNameEn
              }}
            </div>
            <div class="ml-2 text-paper-50 text-opacity-100">
              {{
                getDictLabelByCode('companyAdvantageList', item.transportType)
              }}
            </div>
            <!--    v-if="item.industrySector === 'Trade'"           -->
            <div
              class="bg-primary bg-opacity-10 text-primary text-xs px-1 py-0.5 ml-auto"
            >
              {{ getCnOrEn(`货主`, `Trader`) }}
            </div>
          </div>
        </div>
      </div>

      <!-- 今日特价 -->
      <div class="mt-1.5">
        <div
          class="relative h-[136px] p-2 bg-white rounded shadow-custom-banner font-extrabold flex flex-col justify-between"
        >
          <div
            :style="{
              writingMode: 'sideways-lr',
            }"
            class="absolute top-0 left-0 rounded bg-primary w-[30px] text-center text-sm text-white h-full px-2 py-4 flex items-center"
          >
            今日特价
          </div>
          <div v-show="false">
            {{ TodaySpecialsList }}
          </div>
          <template v-for="(item, idx) in TodaySpecialsList" :key="idx">
            <div
              v-if="item.specialPriceList && item.specialPriceList.length > 0"
              class="ml-[30px] p-2 text-xs flex justify-center h-14 bg-[#f5f5f5] rounded flex-col cursor-pointer"
              @click="
                openPageByAppId(
                  'RATE',
                  `/${item.freightType === '1' ? 'fcl' : item.freightType === '2' ? 'air' : 'lcl'}/detail/${item.specialPriceList[0].uid}.html`,
                )
              "
            >
              <div class="text-paper text-xs font-medium truncate">
                {{ item.specialPriceList[0]?.title }}
              </div>
              <div class="flex space-x-1 overflow-hidden">
                <div v-for="num in Object.values(NUM_MAP)" :key="num">
                  <div
                    v-if="item.specialPriceList[0]?.[`boxType${num}`]"
                    class="px-2 py-1 text-primary bg-white rounded"
                  >
                    {{ item.specialPriceList[0]?.[`boxType${num}`] }}
                    <!-- {{ item.specialPriceList }} -->
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>

      <!-- 首屏左侧按钮 三 -->
      <BaseImg
        :img-url="
          AdList.AdLeftBtnThree?.image || AdList.AdLeftBtnThree?.defaultImg
        "
        :title="AdList.AdLeftBtnThree?.title"
        :link="AdList.AdLeftBtnThree?.link"
        class="w-full h-[45px] mt-1.5 bg-primary-100 rounded"
      />
    </div>
    <div class="mx-1.5 flex-1 min-w-[648px]">
      <!-- 首屏中部半通栏 一 -->
      <BaseImg
        :img-url="AdList.AdMiddleOne?.image || AdList.AdMiddleOne?.defaultImg"
        :title="AdList.AdMiddleOne?.title"
        :link="AdList.AdMiddleOne?.link"
        class="w-full h-20 bg-primary-100 rounded"
      />

      <!-- 精品商家展示 -->
      <div class="w-full mt-1.5">
        <HomeBannerLoopAD />

        <BaseTitle
          v-if="
            shopPopularList &&
            shopPopularList.data &&
            shopPopularList.data.shopsDetailIfonInVo &&
            shopPopularList.data.shopsDetailIfonInVo.length
          "
          :title="'精品商家'"
          class="my-2.5"
        />
        <div v-show="false">{{ shopPopularList }}</div>
        <div
          v-if="
            shopPopularList &&
            shopPopularList.data &&
            shopPopularList.data.shopsDetailIfonInVo &&
            shopPopularList.data.shopsDetailIfonInVo.length
          "
        >
          <el-carousel
            :interval="5000"
            indicator-position="outside"
            height="202px"
            :arrow="'never'"
          >
            <el-carousel-item
              v-for="(item, i) in splitArrayIntoGroups(
                shopPopularList.data.shopsDetailIfonInVo?.slice(0, 14),
                2,
              )"
              :key="i"
            >
              <div class="w-full grid grid-cols-2 gap-2">
                <MerchantCard
                  v-for="(subitem, infoIndex) in item"
                  :key="infoIndex"
                  :subitem="subitem"
                />
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

      <div class="w-full pt-1 pb-1.5">
        <div class="flex space-x-[15px]">
          <!-- 7225	首页广告	首屏中部按钮一					CLS-1-1008 -->
          <BaseImg
            :img-url="
              AdList.AdMiddleBtnOne?.image || AdList.AdMiddleBtnOne?.defaultImg
            "
            :title="AdList.AdMiddleBtnOne?.title"
            :link="
              AdList.AdMiddleBtnOne?.link || AdList.AdMiddleBtnOne?.defaultLink
            "
            class="h-20 w-[206px] bg-primary-100 rounded-lg border"
          />
          <!-- 7226	首页广告	首屏中部按钮二					CLS-1-1009 -->
          <BaseImg
            :img-url="
              AdList.AdMiddleBtnTwo?.image || AdList.AdMiddleBtnTwo?.defaultImg
            "
            :title="AdList.AdMiddleBtnTwo?.title"
            :link="AdList.AdMiddleBtnTwo?.link"
            class="h-20 w-[206px] bg-primary-100 rounded-lg border"
          />
          <!-- 7227	首页广告	首屏中部按钮三					CLS-1-1010 -->
          <BaseImg
            :img-url="
              AdList.AdMiddleBtnThree?.image ||
              AdList.AdMiddleBtnThree?.defaultImg
            "
            :title="AdList.AdMiddleBtnThree?.title"
            :link="AdList.AdMiddleBtnThree?.link"
            class="h-20 w-[206px] bg-primary-100 rounded-lg border"
          />
        </div>
      </div>
      <BaseImg
        :img-url="AdList.AdMiddleTwo?.image || AdList.AdMiddleTwo?.defaultImg"
        :title="AdList.AdMiddleTwo?.title"
        :link="AdList.AdMiddleTwo?.link"
        class="w-full rounded shadow-custom-banner bg-white h-[45px]"
      />
    </div>

    <!-- 右侧部分 -->
    <div class="w-[230px]">
      <BaseImg
        :img-url="
          AdList.AdRightBtnOne?.image || AdList.AdRightBtnOne?.defaultImg
        "
        :title="AdList.AdRightBtnOne?.title"
        :link="AdList.AdRightBtnOne?.link"
        class="w-full h-20 bg-primary-100 rounded"
      />
      <BaseImg
        :img-url="
          AdList.AdRightBtnTwo?.image || AdList.AdRightBtnTwo?.defaultImg
        "
        :title="AdList.AdRightBtnTwo?.title"
        :link="AdList.AdRightBtnTwo?.link"
        class="w-full h-20 bg-primary-100 mt-1.5 rounded"
      />

      <!-- 物流企业公告 -->
      <div class="mt-2.5 pt-2">
        <BaseTitle :title="'物流企业公告'" class="mt-1" />
        <div
          class="h-[320px] mt-2 py-2.5 px-3 bg-white rounded shadow-custom-banner font-normal space-y-3"
        >
          <div
            v-for="(item, i) in TransPortCompanyAnnouncementList"
            :key="i"
            class="cursor-pointer"
            @click="openPageByAppId('SHOP', `/jc/news/detail/${item.id}.html`)"
          >
            <div class="flex text-xs">
              <div
                v-if="item.compShorter || item.compName"
                class="px-1 py-0.5 bg-primary-50 bg-opacity-10 h-5 text-primary shrink-0"
              >
                {{
                  (item.compShorter && item.compShorter.trim()) ||
                  (item.compName
                    ? item.compName.length > 5
                      ? item.compName.slice(0, 5) + '...'
                      : item.compName
                    : '')
                }}
              </div>
              <div class="ml-1 py-0.5 truncate text-paper text-xs font-normal">
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 首屏右侧按钮三 -->
      <BaseImg
        :img-url="
          AdList.AdRightBtnThree?.image || AdList.AdRightBtnThree?.defaultImg
        "
        :title="AdList.AdRightBtnThree?.title"
        :link="AdList.AdRightBtnThree?.link"
        class="mt-2 h-[88px]"
      />

      <!-- 首屏右侧按钮四 -->
      <BaseImg
        :img-url="
          AdList.AdRightBtnFour?.image || AdList.AdRightBtnFour?.defaultImg
        "
        :title="AdList.AdRightBtnFour?.title"
        :link="AdList.AdRightBtnFour?.link"
        class="mt-2 h-[100px]"
      />

      <!-- 首屏右侧按钮五 -->
      <BaseImg
        :img-url="
          AdList.AdRightBtnFive?.image || AdList.AdRightBtnFive?.defaultImg
        "
        :title="AdList.AdRightBtnFive?.title"
        :link="AdList.AdRightBtnFive?.link"
        class="mt-2 h-[45px]"
      />
    </div>

    <ClientOnly>
      <NuxtImg
        v-if="FloatAdList.left?.image || FloatAdList.left?.defaultImg"
        :src="FloatAdList.left?.image || FloatAdList.left?.defaultImg"
        :alt="FloatAdList.left?.title"
        loading="lazy"
        class="h-[235px] w-[90px] bg-[#7e7e7e] absolute top-[90px] left-[-100px]"
        @click="openByLink(FloatAdList.left?.link)"
      />

      <NuxtImg
        v-if="FloatAdList.leftSmall?.image || FloatAdList.leftSmall?.defaultImg"
        :src="FloatAdList.leftSmall?.image || FloatAdList.leftSmall?.defaultImg"
        :alt="FloatAdList.leftSmall?.title"
        loading="lazy"
        class="h-[90px] w-[90px] bg-[#7e7e7e] absolute top-[335px] left-[-100px]"
        @click="openByLink(FloatAdList.leftSmall?.link)"
      />

      <NuxtImg
        v-if="FloatAdList.right?.image || FloatAdList.right?.defaultImg"
        :src="FloatAdList.right?.image || FloatAdList.right?.defaultImg"
        :alt="FloatAdList.right?.title"
        loading="lazy"
        class="h-[235px] w-[90px] bg-[#7e7e7e] absolute top-[90px] right-[-100px]"
        @click="openByLink(FloatAdList.right?.link)"
      />
      <NuxtImg
        v-if="
          FloatAdList.rightSmall?.image || FloatAdList.rightSmall?.defaultImg
        "
        :src="
          FloatAdList.rightSmall?.image || FloatAdList.rightSmall?.defaultImg
        "
        :alt="FloatAdList.rightSmall?.title"
        loading="lazy"
        class="h-[90px] w-[90px] bg-[#7e7e7e] absolute top-[335px] right-[-100px]"
        @click="openByLink(FloatAdList.rightSmall?.link)"
      />
    </ClientOnly>
  </div>
  <ClientOnly>
    <div
      v-if="TopicAdList?.length > 0"
      class="mt-1.5 flex flex-col container p-0 relative -top-10"
    >
      <el-carousel height="120px" indicator-position="none">
        <el-carousel-item v-for="(topicItem, i) in TopicAdList" :key="i">
          <BaseImg
            :img-url="topicItem?.image || topicItem?.defaultImg"
            :title="topicItem?.title"
            :link="topicItem?.link"
            class="mt-2 w-full h-[120px] bg-primary-100 rounded"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
  import {
    findPageListApi,
    getNewsMainTopApi,
    getNewsMainTopHYGGApi,
  } from '~/api/home'
  import { isClient } from '@vueuse/core'

  const {
    AdList,
    getAdList,
    TopicAdList,
    getTopicAdList,
    FloatAdList,
    getFloatAdList,
  } = useHomeAdList()

  const NUM_MAP = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
  }

  const shopPopularList = useState<any>(() => [])

  const MainTopList = useState(() => [])
  // 航运企业公告
  const MainTopHyList = useState(() => [])
  // 今日特价
  const TodaySpecialsList = useState(() => [])
  // 物流企业公告
  const TransPortCompanyAnnouncementList = useState(() => [])

  // 推荐货盘列表
  const recommendList = ref([])

  const { getDictLabelByCode } = useDictStore()

  /**
   * 获取热门商家列表
   */
  async function getShopPopular() {
    if (isDev()) {
      shopPopularList.value = {
        msg: '操作成功',
        code: 0,
        data: {
          shopsDetailIfonInVo: [
            {
              id: 2035187,
              openShopStatus: '1',
              shopStatus: '0',
              settleStatus: '-1',
              hideStatus: '0',
              shopHide: '0',
              shopType: '4',
              submitTime: '2023-05-09T18:34:21',
              mobile: '',
              contactsId: 2035187,
              jobTitleCn: '',
              headPortrait:
                'https://resources.jctrans.com/res/account/pc/img/default_avator.png',
              staffNameCn: '趙兴起',
              shopScore: 337.0,
              responsivityTotle: 0.0,
              receptionTimes: 0,
              responsivity: 0,
              imResponsivity: 0,
              putThroughNum: 0,
              respondCount: 0,
              shopPoint: 33700,
              shopId: 36876,
              uid: '5c56b86385e975f3678a6e075a8ab332',
              verificated: '1',
              logoFile:
                'https://wlw-obs-online-bj4-public.obs.cn-north-4.myhuaweicloud.com:443/COMPANY_LOGO%2Fbd97c47b-b815-46f5-8cb9-247a171174d3',
              nameCn: '天津正旭航运物流有限公司',
              nameEn: 'Tianjin Zhengxu Logistics Co,Ltd.',
              countryId: 1,
              cityId: 3763,
              countryNameCn: '中国',
              cityNameCn: '天津',
              countryNameEn: 'China',
              cityNameEn: 'Tianjin',
              scale: 'mini',
              estabYears: '1900-01-01',
              profileCn:
                '天津正旭航运物流有限公司是一家经营全球海运、陆运、空运及物流管理业务的国际运输机构。公司以口岸为依托，面向广大客户，提供高效快捷的第三方物流服务。\r\n\r\n二.服务能力\r\n天津正旭航运物流有限公司，在新港内设进/出口监管仓库、集装箱堆场、报关行，为客户提供集海关监管通道、仓储、配送、集装箱运输.\r\n\r\n三.服务种类\r\n代理业务：为客户提供海运货物的订舱、配载、拼箱发运以及国内陆路长、短运输的门到门服务，空运服务；我司是保险公司的兼业代理，代理各类运输保险，提供优惠的保险费率；并且为客户提供货物熏蒸、商检等服务。\r\n仓储业务：公司提供进出口货物仓库，集装箱整箱及拼箱货物的堆存，装箱、存储、分拨、包装等业务。\r\n报关业务：提供出口货物报关及商检、进口清关、专业咨询等服务。\r\n\r\n四.机构设置\r\n我司在中国大陆各个沿海城市均设有办事处。（天津、上海、青岛、大连，广州，宁波）\r\n公司以港口为依托面向市场以满足客户需求为宗旨，为客户提供最理想的价格，最优质的服务，最便捷的运输方案。',
              profileEn:
                'Wellcome to tianjin zhengxu logistics co.,ltd.We can offer logistics facilities with full functions.We are able to cover all XINGANG for any in/out cargo.',
              industrySector: 'Logistics',
              currentOfficeAddressCn: '天津市河西区解放南路256号泰达大厦26G',
              currentOfficeAddressEn:
                'Unit G,26/F, TEDA Building No. 256 Jiefang South Road, Hexi District, Tianjin 300042 P.R. China',
              addressCn: '天津市河西区解放南路256号泰达大厦26G',
              addressEn:
                'Unit G,26/F, TEDA Building No. 256 Jiefang South Road, Hexi District, Tianjin 300042 P.R. China',
              certificates: [
                {
                  id: 27121,
                  version: 1,
                  fileName: 'TSP',
                  fileType: '7',
                  filePath:
                    'https://assets.jctrans.com/COMMON_IMG_GEN/352431a8-1acc-4cc2-9e85-f71a07a4c86b.png',
                  isShow: '1',
                  isVip: '1',
                },
              ],
              shopOwnerEvaluateVoList: [],
              shopsAdvRoutesDtoList: [],
              vipList: [
                {
                  name: 'TSP',
                  code: 'TSP',
                  start: '2024-04-15',
                  expireAt: '2026-04-14',
                  yearsAddUp: 14,
                  vipType: '2',
                  vipCertificateWeb:
                    'https://assets.jctrans.com/COMMON_IMG_GEN/352431a8-1acc-4cc2-9e85-f71a07a4c86b.png',
                  vipCertificatePrint:
                    'https://assets.jctrans.com/COMMON_IMG_GEN/3194402e-1028-4eb0-8e12-7f691f0ccb26.png',
                  vipLogoFile:
                    'https://assets.jctrans.com/COMMON_IMG_GEN/cd85b175-048b-4c05-9f30-c69153639b13.png',
                },
              ],
              version: 1,
              companyVersion: 3,
              violationStatus: '0',
              auditFlag: '0',
              onlineStatus: '0',
              sort: 14,
              companyId: 2035187,
            },
          ],
        },
      }
    } else {
      try {
        const res = await useFetch('/api/homeShopPopularize')
        if (res.status.value === 'success') {
          shopPopularList.value = res.data.value
        } else {
          shopPopularList.value = []
        }
      } catch (error) {
        console.error(
          '🚀 ~ file: TopBanner.vue:444 ~ getShopPopular ~ error:',
          error,
        )
      }
    }
  }

  /**
   * 获取今日特价
   */
  function getPlatformSpecialOffer() {
    useFetch(
      `${useRuntimeConfig().public.PROD_CLIENT_PROXY_API}/hzh/fr/freightPrice/getPlatformSpecialOffer`,
      {
        method: 'post',
        lazy: true,
        server: true,
      },
    )
      .then((res) => {
        if (res.status.value === 'success') {
          const r: any = res.data.value
          TodaySpecialsList.value = r.data.records
        }
        return
      })
      .catch((err) => {
        console.log(err)
      })
  }

  /**
   * 获取右侧物流企业公告
   */
  function getHomePageNewsList() {
    useFetch(
      `${useRuntimeConfig().public.PROD_CLIENT_PROXY_API}/hzh/fr/center/shop/getHomePageNewsList`,
      {
        method: 'post',
        lazy: true,
        server: true,
      },
    ).then((res) => {
      if (res.status.value === 'success') {
        const r: any = res.data.value
        TransPortCompanyAnnouncementList.value = r.data.records
      }
    })
  }

  async function getNewsMainTop() {
    try {
      const res: any = await getNewsMainTopApi()
      console.log('🚀 ~ file: TopBanner.vue:564 ~ getNewsMainTop ~ res:', res)
      MainTopList.value = res?.data
    } catch (error) {
      console.log(
        '🚀 ~ file: TopBanner.vue:568 ~ getNewsMainTop ~ error:',
        error,
      )
    }
    try {
      const resHy: any = await getNewsMainTopHYGGApi()
      console.log(
        '🚀 ~ file: TopBanner.vue:567 ~ getNewsMainTopHYGGApi ~ resHy:',
        resHy,
      )
      MainTopHyList.value = resHy.data
    } catch (error) {
      console.log(
        '🚀 ~ file: TopBanner.vue:581 ~ getNewsMainTopHYGGApi ~ error:',
        error,
      )
    }
  }

  /**
   * 获取推荐货盘列表
   */
  async function findPageList() {
    const res: any = await findPageListApi()
    recommendList.value = res.data.records
  }

  onMounted(() => {
    getNewsMainTop()
    findPageList()
  })

  if (!isClient) {
    await getShopPopular()
    getHomePageNewsList()
    getPlatformSpecialOffer()

    getAdList()
    await getFloatAdList()

    getTopicAdList()
  }
</script>

<style lang="scss">
  .top-banner {
    .el-carousel__button {
      background-color: #d8d8d8;
      opacity: 1;
    }

    .el-carousel__indicator.is-active button {
      opacity: 1;
      background-color: #ff6a00;
    }
  }
</style>

<style scoped>
  /* 定义向上滚动的过渡动画 */
  .scroll-enter-active,
  .scroll-leave-active {
    transition: all 0.5s ease; /* 过渡时长和缓动效果 */
  }
  .scroll-enter-from {
    opacity: 0;
    transform: translateY(100%); /* 元素从下方进入 */
  }
  .scroll-enter-to {
    opacity: 1;
    transform: translateY(0); /* 进入后元素的位置 */
  }
  .scroll-leave-from {
    opacity: 1;
    transform: translateY(0); /* 离开前元素的位置 */
  }
  .scroll-leave-to {
    opacity: 0;
    transform: translateY(-100%); /* 元素向上离开 */
  }
</style>
