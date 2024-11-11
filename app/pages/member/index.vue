<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="member-service">
    <div class="banner h-[240px]">
      <div class="w-[1200px] mx-auto">
        <h1 class="text-[40px] pt-[46px] font-bold">中国营销揽货会员</h1>
        <p>帮助您获得更多中国市场客户</p>
        <el-button
          class="join-color mb-3 mt-8"
          type="primary"
          @click="handleClickJoinUs"
          >加入会员</el-button
        >
      </div>
    </div>
    <!-- 尊享四项特权 -->
    <div class="privilege pt-20">
      <h2 class="text-center font-bold">
        尊享<span class="text-[#FF6A00] mb-2">4项</span>特权
      </h2>
      <p class="text-center text-base text-[#686868]">
        国内全网商机，一手直客资源，线上线下推广
      </p>
      <div
        v-for="(item, index) in fourPrivilege"
        :key="index"
        :class="index % 2 == 0 ? 'bg-[#FFF]' : ' bg-[#F5F5F5]'"
      >
        <div
          class="w-[1000px] mx-auto py-10 flex justify-between"
          :class="
            index % 2 == 0
              ? 'flex-row bg-[#FFF]'
              : 'flex-row-reverse  bg-[#F5F5F5]'
          "
        >
          <div class="w-[400px] flex flex-col justify-center">
            <h2 class="mb-[25px] font-bold">{{ item.title }}</h2>
            <ul>
              <li
                v-for="(l, i) in item.list"
                :key="i"
                class="text-sm text-[#727377] mb-3"
              >
                {{ l }}
              </li>
            </ul>
          </div>
          <img :src="item.img" alt="" width="600px" height="300px" />
        </div>
      </div>
    </div>
    <!-- 会员权益介绍 -->
    <div class="introduce bg-[#fff] py-[100px]">
      <div class="w-[1200px] mx-auto">
        <h2 class="text-center text-[32px] mb-10 font-bold">会员权益介绍</h2>
        <div>
          <ul>
            <li
              class="introduce-item flex items-center justify-between py-[8px] text-[#686868]"
            >
              <p class="text-sm w-[247px]">权益项</p>
              <div class="w-[476px] pl-[27px]">
                <img :src="shili" alt="" width="88px" srcset="" />
                <p class="text-[#232324] text-sm py-[4px] font-bold">
                  实力服务商
                </p>
                <p class="text-[#FF6A00] text-2xl leading-[34px]">
                  <span class="text-[18px]">¥</span> 23,800<span
                    class="text-base"
                    >/年</span
                  >
                </p>
                <span class="text-sm">
                  为中国货代企业建立品牌店铺，提供线上全网商机，和线下老板国层合作机会。</span
                >
              </div>
              <div class="w-[476px] pl-[27px]">
                <img :src="youzhi" alt="" width="88px" srcset="" />
                <p class="text-[#232324] text-sm py-[4px] font-bold">
                  优质服务商
                </p>
                <p class="text-[#FF6A00] text-2xl leading-[34px]">
                  <span class="text-[18px]">¥</span> 13,800<span
                    class="text-base"
                    >/年</span
                  >
                </p>
                <span class="text-sm">
                  为中国货代企业提供线上全网商机，丰富的国内同行，货主资源助力业务拓展。</span
                >
              </div>
            </li>
            <li
              v-for="(item, index) in rightsIntroduction"
              :key="index"
              class="introduce-item flex items-center justify-between py-[8px] text-[#686868]"
            >
              <p class="text-sm w-[247px]" v-html="item.name" />
              <div class="w-[476px] pl-[27px]">
                <img
                  v-if="item.strength == 'yes'"
                  :src="yes"
                  alt=""
                  width="24px"
                />
                <img
                  v-else-if="item.strength == 'no'"
                  :src="no"
                  alt=""
                  width="24px"
                />
                <p v-else class="text-sm font-bold">
                  {{ item.strength }}
                </p>
                <span class="text-sm"> {{ item.strengthSub }}</span>
              </div>
              <div class="w-[476px] pl-[27px]">
                <img
                  v-if="item.highQuality == 'yes'"
                  :src="yes"
                  alt=""
                  width="24px"
                />
                <img
                  v-else-if="item.highQuality == 'no'"
                  :src="no"
                  alt=""
                  width="24px"
                />
                <p v-else class="text-sm font-bold">
                  {{ item.highQuality }}
                </p>
                <span class="text-sm"> {{ item.highQualitySub }}</span>
              </div>
            </li>
          </ul>
        </div>
        <p class="text-center mt-14">
          <el-button
            type="primary"
            class="join-button join-color w-[320px] border-0"
            @click="handleClickJoinUs"
            >申请加入</el-button
          >
        </p>
      </div>
    </div>
    <!-- 欢迎加入JCtrans会员 -->
    <div class="swiper-box">
      <h2 class="text-center text-[32px] pt-[100px] pb-[173px]">
        欢迎加入JCtrans会员
      </h2>
      <div
        v-if="swiperData && swiperData.length > 0"
        class="mySwiper w-[1920px]"
      >
        <p class="pagination text-[#9EA0A6]">
          <span class="text-[#FF6A00]">{{ swiperIndex }}</span> ——
          <span>{{
            swiperData.length < 10 ? '0' + swiperData.length : swiperData.length
          }}</span>
        </p>
        <swiper
          ref="mySwiperRef"
          :modules="[SwiperNavigation, SwiperAutoplay, SwiperPagination]"
          :space-between="24"
          navigation
          :pagination="{ type: 'progressbar' }"
          :slides-per-view="5"
          centered-slides
          centered-slides-bounds
          loop
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :speed="1500"
          @swiper="onSwiper"
          @slide-change="onSlideChange"
        >
          <swiper-slide
            v-for="(item, index) in swiperData"
            :key="index"
            class="swiper-item"
          >
            <img class="logo" :src="item.logoFile" alt="" width="208px" />
            <h4 class="mt-6">{{ item.nameCn }}</h4>
            <div class="pt-1 pb-2">
              <div
                v-if="
                  item.shopsAdvRoutesDtoList &&
                  item.shopsAdvRoutesDtoList.length
                "
                class="text-sm text-gray-500 flex items-center space-x-2"
              >
                <div
                  v-for="r in item.shopsAdvRoutesDtoList.slice(0, 2)"
                  :key="r.id"
                  class="w-[135px] truncate flex items-center space-x-2"
                >
                  <span
                    v-if="r.type === '1'"
                    class="iconfont icon-icon_inquiry_air text-primary base-icon-content"
                  />
                  <span
                    v-if="r.type === '2'"
                    class="iconfont icon-icon_inquiry_ship text-primary base-icon-content"
                  />
                  <span class="text-paper">
                    {{ r.cityRouteName }}
                  </span>
                </div>
              </div>
              <div
                v-if="
                  item.advantageCodeResultList &&
                  item.advantageCodeResultList.length > 0
                "
                class="space-x-1 mt-2 flex truncate"
              >
                <div
                  v-for="tag in item.advantageCodeResultList.length > 4
                    ? item.advantageCodeResultList.slice(0, 4)
                    : item.advantageCodeResultList"
                  :key="tag"
                  class="bg-[#f5f5f5] w-[66.5px] rounded-xl text-[#686868] text-center text-xs py-1 px-2 shrink-0"
                >
                  {{
                    getDictLabelByCode(
                      'companyAdvantageList',
                      tag.advantageCode,
                    )
                  }}
                </div>
                <div
                  v-if="item.advantageCodeResultList.length > 4"
                  class="bg-[#f5f5f5] w-6 rounded-xl text-[#686868] text-center text-xs py-1 px-1 shrink-0"
                >
                  ...
                </div>
              </div>
            </div>
            <img class="markup" :src="markup" alt="" width="45px" />
            <p class="text-sm text-[#9EA0A6] mt-[-5px] line-4">
              {{ item.profileCn }}
            </p>
            <el-button
              type="primary"
              size="large"
              class="more-button bg-[#FF6A00] w-[100%]"
              @click="openPageByAppId('SHOP', `/jc/${item.uid}.html`)"
              >查看更多</el-button
            >
          </swiper-slide>
        </swiper>
      </div>

      <p class="text-center mt-6 pt-[59px] pb-[82px]">
        <el-button
          type="primary"
          class="join-button join-color w-[320px]"
          @click="openPageByAppId('SHOP', ``)"
          >查看更多</el-button
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  // import { isClient } from '@vueuse/core'
  // import { Controller } from 'swiper'
  // import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue'

  import img1 from '@/assets/images/memberService/Frame1.png'
  import img2 from '@/assets/images/memberService/Frame2.png'
  import img3 from '@/assets/images/memberService/Frame3.png'
  import img4 from '@/assets/images/memberService/Frame4.png'
  import yes from '@/assets/images/memberService/yes.png'
  import no from '@/assets/images/memberService/no.png'
  import markup from '@/assets/images/memberService/icon_marksup_project@2x.png'
  import shili from '@/assets/images/memberService/shili@2x.png'
  import youzhi from '@/assets/images/memberService/youzhi@2x.png'
  import { getShopPopularize } from '~/api/member'
  const { getCompanyAdvantage } = useDictStore()
  getCompanyAdvantage()
  let mySwiper = null
  definePageMeta({
    name: 'memberService',
    title: 'Member',
    description: ' Thousands of nutrition plans, one act of improvement',
    navOrder: 2,
    type: 'secondary',
    icon: 'i-mdi-home',
    isWhite: false,
  })
  const { getDictLabelByCode } = useDictStore()
  // /** 自定义按钮 */
  // function toPrev() {
  //   mySwiper.slidePrev()
  // }

  // function toNext() {
  //   mySwiper.slideNext()
  // }
  const swiperData = useState<any>(() => [])
  // const loading = ref(false)
  /**
   * 获取热门商家列表
   */
  /**
   * 获取热门商家列表
   */
  async function getShopPopular() {
    try {
      const res: any = await getShopPopularize({ id: -1 })

      if (res.code === 0) {
        swiperData.value = res.data.shopsDetailIfonInVo
      }
    } catch (error) {
      console.error(
        '🚀 ~ file: TopBanner.vue:444 ~ getShopPopular ~ error:',
        error,
      )
    }
  }

  /** swiper加载完毕 */
  const onSwiper = (swiper) => {
    mySwiper = swiper
  }
  const swiperIndex = ref<number | string>(0)
  /** swiper切换 */
  const onSlideChange = (swiper) => {
    swiperIndex.value = swiper.realIndex + 1
    swiperIndex.value =
      Number(swiperIndex.value) < 10
        ? '0' + swiperIndex.value
        : swiperIndex.value
  }

  onMounted(() => {
    getShopPopular()
  })

  const fourPrivilege = [
    {
      title: '全网商机',
      img: img1,
      list: [
        '线上4000+中国企业会员询盘',
        '10万+企微、微信、QQ社群用户商机',
        '企微小程序可一键直聊沟通',
      ],
    },
    {
      title: '专属商铺',
      img: img2,
      list: [
        '中国站专属商铺，易被百度收录和曝光',
        'PC精美店铺，可发布运价，IM实时沟通',
        '微信小程序企业名片，随时分享',
      ],
    },
    {
      title: '营销推广',
      img: img3,
      list: [
        '参加线下8大口岸企业家俱乐部活动',
        '线上中国站优质广告位曝光',
        '客成经理1V1服务，推荐合作机会',
      ],
    },
    {
      title: '客户资源',
      img: img4,
      list: [
        '35万+一手货主资料，每年参加广交会等30场贸易展会',
        '4000+中国代理名录资源',
        '6万+中国同行社群，加入杰西圈千人货代大群',
      ],
    },
  ]
  // const swiperData = [
  //   {
  //     title: 'KC INTERNATIONAL (HA NOI) COMPANY LIMITED',
  //     img: img1,
  //   },
  //   {
  //     title: 'KC INTERNATIONAL (HA NOI) COMPANY LIMITED',
  //     img: img2,
  //     describtion:
  //       'STMS Logistics is a fresh freight forwarder in Senegal but the team is having more than 10 years of experience in the freight forwarding business. our branch manager Mr. Youssef is fully dedicated 24/24 and 7/7 to satisfy our partners and customers globally. Send us a test shipment and will not regret chosing us as a partner...',
  //   },
  //   {
  //     title: '营销推广',
  //     img: img3,
  //     describtion:
  //       'STMS Logistics is a fresh freight forwarder in Senegal but the team is having more than 10 years of experience in the freight forwarding business. our branch manager Mr. Youssef is fully dedicated 24/24 and 7/7 to satisfy our partners and customers globally. Send us a test shipment and will not regret chosing us as a partner...',
  //   },
  //   {
  //     title: '客户资源',
  //     img: img4,
  //     describtion:
  //       'STMS Logistics is a fresh freight forwarder in Senegal but the team is having more than 10 years of experience in the freight forwarding business. our branch manager Mr. Youssef is fully dedicated 24/24 and 7/7 to satisfy our partners and customers globally. Send us a test shipment and will not regret chosing us as a partner...',
  //   },
  //   {
  //     title: '客户资源',
  //     img: img4,
  //     describtion:
  //       'STMS Logistics is a fresh freight forwarder in Senegal but the team is having more than 10 years of experience in the freight forwarding business. our branch manager Mr. Youssef is fully dedicated 24/24 and 7/7 to satisfy our partners and customers globally. Send us a test shipment and will not regret chosing us as a partner...',
  //   },
  //   {
  //     title: '客户资源',
  //     img: img4,
  //     list: [
  //       '35万+一手货丰资料，每年参加广交会等30场贸易展会',
  //       '4000+中国代理名录资源',
  //       '6万+中国同行社群，加入杰西国千人货代大群',
  //     ],
  //   },
  //   {
  //     title: '客户资源',
  //     img: img4,
  //     list: [
  //       '35万+一手货丰资料，每年参加广交会等30场贸易展会',
  //       '4000+中国代理名录资源',
  //       '6万+中国同行社群，加入杰西国千人货代大群',
  //     ],
  //   },
  // ]
  const rightsIntroduction = [
    {
      name: '小程序<br/>同行群商机查看',
      strength: 'yes',
      highQuality: 'yes',
      strengthSub: '',
      highQualitySub: '',
    },
    { name: '线下口岸老板俱乐部活动', strength: '1次', highQuality: 'no' },
    { name: '专属客户经理<br/>1V1服务', strength: 'yes', highQuality: 'yes' },
    { name: '专属中国站店铺', strength: 'yes', highQuality: 'yes' },
    { name: '会员名录', strength: '最优先展示', highQuality: 'yes' },
    {
      name: '贸易商名录',
      strength: '可查看、管理、分配跟进',
      highQuality: '可查看',
    },
    { name: '中国代理资源', strength: 'yes', highQuality: 'yes' },
    { name: '风险黑名单查询', strength: 'yes', highQuality: 'yes' },
    {
      name: '运价列表广告位',
      strength: '5大广告位',
      highQuality: '4大广告位',
      strengthSub: '(运价焦点图1个月、航线秀1条航线12个月、运价置顶3条航线)',
      highQualitySub: '',
    },
    {
      name: '加入千人同行大群',
      strength: '5个',
      highQuality: '1个',
      strengthSub: '',
      highQualitySub: '',
    },
    {
      name: '运价发布',
      strength: '人工协助代发',
      highQuality: '自主发布',
      strengthSub: '',
      highQualitySub: '',
    },
    { name: '会员标识、精美证书', strength: 'yes', highQuality: 'yes' },
    {
      name: 'JCtrans全球会议参会优惠$100起',
      strength: 'yes',
      highQuality: 'yes',
    },
    {
      name: 'JC支付、保险、舱单服务优惠价',
      strength: '最高优惠价',
      highQuality: '优惠价',
      strengthSub: '',
      highQualitySub: '',
    },
    {
      name: '船期、货物跟踪、<br/>Hscode查询工具不限量免费使用',
      strength: '不限量免费使用',
      highQuality: '不超过3000次/年',
      strengthSub: '',
      highQualitySub: '',
    },
  ]
  const { $globalJoinUs } = useNuxtApp()
  function handleClickJoinUs(close: any) {
    $globalJoinUs({
      link: 'https://www.jctrans.com/member/join',
    })
  }
</script>
<style>
  .swiper-horizontal > .swiper-pagination-progressbar,
  .swiper-pagination-progressbar.swiper-pagination-horizontal {
    width: 1200px !important;
    position: absolute;
    left: 0;
    right: 0;
    top: 550px;
    margin: 0 auto;
    margin-top: 50px;
    z-index: 2;
    height: 2px;
  }
  .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background: #ff6a00;
  }
  .swiper-slide-active {
    transform: translateY(-64px) !important;
    transition: transform 1s;
  }
  .swiper {
    padding: 70px 0 100px;
  }

  .swiper-button-prev {
    background: url('@/assets/images/memberService/icon_last_nor@2x.png')
      no-repeat;
    width: 24px;
    height: 24px;
    background-size: 100%;
    position: absolute;
    left: 48%;
    transform: translateX(-50%);
    top: 560px;
  }
  .swiper-button-next {
    background: url('@/assets/images/memberService/icon_next_nor@2x.png')
      no-repeat;
    width: 24px;
    height: 24px;
    background-size: 100%;
    position: absolute;
    right: 48%;
    transform: translateX(-50%);
    top: 560px;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    display: none;
  }
</style>
<style lang="scss" scoped>
  .banner {
    background: url('@/assets/images/memberService/Frame 3462@2x.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
  .privilege {
    background: #fff;
    h2 {
      font-size: 32px;
    }
    li {
      padding-left: 18px;
      position: relative;
    }
    li:before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background: url(@/assets/images/memberService/icon_dot@2x.png) center
        no-repeat;
      background-size: 100%;
    }
  }
  .introduce {
    &-item {
      border-bottom: 1px solid #f5f5f5;
    }
  }
  .join-button {
    line-height: 44px;
    height: 44px;
    font-size: 14px;
    position: relative;
    z-index: 1;
  }
  .join-color {
    background: linear-gradient(90deg, #ff8800 0%, #ffa319 100%);
    border: none;
  }
  .swiper-box {
    position: relative;
    height: 1145px;
    overflow: hidden;
  }
  .mySwiper {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .mySwiper:after {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 50%;
    width: 938px;
    height: 938px;
    transform: translate(-50%, -105px);
    border-radius: 500px;
    background: linear-gradient(
      180deg,
      #fae4d1 0%,
      rgba(250, 228, 209, 0) 100%
    );
  }

  .swiper-item {
    background: #fff;
    padding: 20px;
    height: 440px;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 8px 40px 0px rgba(97, 98, 101, 0.08);
    border-radius: 4px;
    &:hover {
      .more-button {
        transform: translateY(-74px);
        transition: 0.5s;
      }
      .logo {
        transform: scale(1.1);
        transition: 0.5s;
      }
    }
    p {
      background: linear-gradient(
        180deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }

  .line-4 {
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; /* 这里是超出几行省略 */
  }
  .more-button {
    position: absolute;
    bottom: -50px;
    width: 324px;
    background: #ff6a00;
    border-radius: 4px 4px 4px 4px;
    border: none;
  }
  .pagination {
    position: absolute;
    right: 0;
    top: -100px;
  }
</style>
