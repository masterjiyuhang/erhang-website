<template>
  <div class="-top-24 relative">
    <HomeSearch />
    <HomeTopBanner />
    <HomeRecommendMerchant />
    <HomeSeaTransport />
    <HomeAirTransport />
    <HomeLandTransport />
    <HomeComprehensiveServices />

    <HomeOverseasAgents />

    <div v-show="false">
      {{ ThreeScreenAdListLeft }} {{ ThreeScreenAdListRight }}
    </div>

    <!-- 首页广告	三屏半通栏 / 首页广告	三屏右按钮 -->
    <div
      v-if="ThreeScreenAdListLeft && ThreeScreenAdListLeft.length > 0"
      class="container p-0 space-x-5 flex h-[70px] mt-4"
    >
      <el-carousel
        height="70px"
        class="flex-1"
        indicator-position="none"
        arrow="never"
      >
        <el-carousel-item v-for="(AdItem, i) in ThreeScreenAdListLeft" :key="i">
          <BaseImg
            :img-url="AdItem?.image || AdItem?.defaultImg"
            :title="AdItem?.title"
            :link="AdItem?.link"
            class="h-full bg-primary-100 w-[948px]"
          />
        </el-carousel-item>
      </el-carousel>
      <template
        v-if="ThreeScreenAdListRight && ThreeScreenAdListRight.length > 0"
      >
        <BaseImg
          v-for="(AdItemRight, i) in ThreeScreenAdListRight"
          :key="'ADRIGHT' + i"
          :img-url="AdItemRight?.image || AdItemRight?.defaultImg"
          :title="AdItemRight?.title"
          :link="AdItemRight?.link"
          class="w-[246px] h-full bg-primary-100"
        />
      </template>
    </div>

    <HomeTools class="mt-4" />

    <ContactInfoDialog />
  </div>
</template>

<script lang="ts" setup>
  import { isClient } from '@vueuse/core'

  definePageMeta({
    name: 'home',
    title: 'Home',
    description: ' Thousands of plans, one act of improvement',
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
    isWhite: true,
  })

  const { getCompanyAdvantage } = useDictStore()
  const { getHomePagesNewsPrice } = useMyHomeStore()
  const {
    ThreeScreenAdListLeft,
    ThreeScreenAdListRight,
    getThreeScreenAdList,
  } = useHomeAdList()

  getCompanyAdvantage()
  getHomePagesNewsPrice()
  if (!isClient) {
    await getThreeScreenAdList()
  }
</script>

<style></style>
