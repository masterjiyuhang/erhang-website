<script setup lang="ts">
  import redbook from '@/assets/images/footer/icon_redbook@2x.png'
  import tiktok from '@/assets/images/footer/icon_tiktok@2x.png'
  import wechat from '@/assets/images/footer/icon_wechat@2x.png'
  import weibo from '@/assets/images/footer/icon_weibo@2x.png'
  import qr_gzh from '@/assets/images/footer/img_qr_gzh@2x.png'
  import qr_weibo from '@/assets/images/footer/img_qr_weibo@2x.png'
  import qr_tiktok from '@/assets/images/footer/img_qr_tiktok@2x.png'
  import qr_xhs from '@/assets/images/footer/img_qr_xhs@2x.png'
  import img_footer_logo from '@/assets/images/footer/img_footer_logo.png'

  const QR_LIST = [
    {
      title: '公众号',
      icon: wechat,
      qr: qr_gzh,
    },
    {
      title: '微博',
      icon: weibo,
      qr: qr_weibo,
    },
    {
      title: '抖音',
      icon: tiktok,
      qr: qr_tiktok,
    },
    {
      title: '小红书',
      icon: redbook,
      qr: qr_xhs,
    },
  ]

  const config = useRuntimeConfig()

  const FOOTER_LIST = [
    {
      name: '商机链接',
      children: [
        {
          name: '运价方案',
          appId: 'RATE',
          targetPath: '/',
        },
        {
          name: '公司名录',
          appId: 'SHOP',
          targetPath: '/',
        },
        {
          name: '询盘',
          appId: 'TPS',
          targetPath: '/',
        },
        {
          name: '找代理',
          appId: 'TPS',
          targetPath: '/findAgent',
        },
        {
          name: '货代圈',
          href: 'https://marketing.jctrans.com/promotion/hdq/pc/index.html#/',
          type: 2,
        },
        {
          name: '加入会员',
          type: 3,
          code: config.public.constant.OPEN_JOIN_US,
        },
      ],
    },
    {
      name: '会员联盟',
      children: [
        {
          name: '会员介绍',
          appId: 'ERA',
          targetPath: '/cn/membership/introduction',
        },
        {
          name: '会员权益',
          appId: 'ERA',
          targetPath: '/cn/membership/benefits',
        },
        {
          name: '加入会员',
          type: 3,
          code: config.public.constant.OPEN_JOIN_US,
        },
      ],
    },
    {
      name: '全球会议',
      children: [
        {
          title: 'Global Conference',
          name: '交洽会',
          appId: 'EVT',
          targetPath: '',
        },
        {
          title: 'Exhibiton',
          name: '博览会',
          appId: 'EVT',
          targetPath: '/coExhibiton',
        },
        {
          title: 'Industry Event',
          name: '行业活动',
          appId: 'EVT',
          targetPath: '/industryEvent',
        },
      ],
    },
    {
      name: '金融支付',
      children: [
        {
          title: 'Settlement between members without any fees',
          name: '全球会员间免费结算',
          appId: 'FIN',
          targetPath: '/JCPAY?redirectFrom=ZWZ',
        },
        {
          title: 'Collect money from your Chinese partner cheap and fast',
          name: '跨境收付汇安全省钱',
          appId: 'FIN',
          targetPath: '/TCS?redirectFrom=ZWZ',
        },
        {
          title: '国内在线收付海运费',
          name: '国内在线收付海运费',
          appId: 'FIN',
          targetPath: '/USDExpress?redirectFrom=ZWZ',
        },
      ],
    },
    {
      name: '工具',
      children: [
        {
          name: '货运险',
          appId: 'JHB',
          targetPath: '/products/cargoInsurance',
        },
        {
          name: '货代责任险',
          appId: 'JHB',
          targetPath: '/products/liabilityInsurance',
        },
        {
          name: '船期',
          appId: 'ERA',
          targetPath: '/tools/Container/SchedulePlan',
        },
        {
          name: '全链路跟踪',
          appId: 'ERA',
          targetPath: '/tools/Container/ContainerTracking',
        },
        {
          name: 'AMS',
          appId: 'DDC',
          targetPath: '/?redirectFrom=ERA',
        },
        { name: 'ISF', appId: 'DDC', targetPath: '/?redirectFrom=ERA' },
        { name: 'ACL', appId: 'DDC', targetPath: '/?redirectFrom=ERA' },
        { name: 'AFR', appId: 'DDC', targetPath: '/?redirectFrom=ERA' },
        { name: '上海预配', appId: 'DDC', targetPath: '/?redirectFrom=ERA' },
        { name: '青岛预配', appId: 'DDC', targetPath: '/?redirectFrom=ERA' },
        { name: '深圳预配', appId: 'DDC', targetPath: '/?redirectFrom=ERA' },
        { name: '南沙预配', appId: 'DDC', targetPath: '/?redirectFrom=ERA' },
        {
          name: '在线报关',
          appId: 'JCB',
          targetPath: '/mftCustoms',
        },
        { name: 'FMC资质服务', appId: 'DDC', targetPath: '/fmcQualification' },
      ],
    },
    {
      name: '关于我们',
      children: [
        {
          name: '关于我们',
          appId: 'ERA',
          targetPath: '/cn/aboutus',
        },
        { name: '新闻资讯', href: 'http://info.jctrans.com/', type: 2 },
        {
          name: '成功案例',
          href: 'https://marketing.jctrans.com/case/landing/pc/#/',
          type: 2,
        },
        { name: '官方客服', code: 'IM', type: 3 },
        {
          name: '我的工作台',
          appId: 'JCB',
          targetPath: '/',
        },
        { name: '登录', code: 'login', type: 3 },
        { name: '注册', code: 'register', type: 3 },
      ],
    },
  ]

  const app = useNuxtApp()

  async function handleClick(item) {
    console.log('🚀 ~ file: TheFooter.vue:155 ~ handleClick ~ item:', item)
    if (item.type === 3) {
      console.log(
        '🚀 ~ file: TheFooter.vue:211 ~ handleClick ~ item.type:',
        item.type,
      )
      if (item.code === 'login') {
        go2LoginPage()
      }
      if (item.code === 'register') {
        openByLink('https://passport.jctrans.com/register?appId=ZWZ')
      }
      if (item.code === 'IM') {
        try {
          await app.$JCIM.openIM()
        } catch (error) {
          ElMessage.error('IM加载中，请稍后再试')
        }
      }
      if (item.code === config.public.constant.OPEN_JOIN_US) {
        app.$mitt.emit(config.public.constant.OPEN_JOIN_US, {})
      }
    } else if (item.type === 2) {
      openByLink(item.href)
    } else {
      openPageByAppId(item.appId, item.targetPath)
    }
  }
</script>

<template>
  <footer class="pb-24 pt-12 bg-white">
    <div class="container">
      <!--  eslint-disable-next-line vue/html-self-closing -->
      <img :src="img_footer_logo" class="w-[212px] h-[34px]" />
      <div class="mt-11 flex">
        <div class="flex flex-col w-[276px]">
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="item in QR_LIST"
              :key="item.title"
              class="flex flex-col items-center"
            >
              <img :src="item.qr" class="w-[130px] h-[130px]" />
              <div class="flex items-center mt-1 text-[#000] text-sm">
                <img :src="item.icon" class="size-4 mr-1" /> {{ item.title }}
              </div>
            </div>
          </div>

          <div
            class="bg-primary/10 text-center text-primary text-sm py-1.5 mt-4"
          >
            关注JCtrans杰西圈 了解行业新动态
          </div>
        </div>

        <div class="flex-1 ml-14">
          <div class="flex space-x-11">
            <div v-for="item in FOOTER_LIST" :key="item.name">
              <div class="flex flex-col space-y-3">
                <div
                  class="text-paper font-medium leading-[22px] text-base pb-1"
                >
                  {{ item.name }}
                </div>
                <div
                  v-for="aa in item.children"
                  :key="aa.name"
                  :class="[
                    'flex items-center leading-5 text-[#727377] text-sm',
                    'hover:text-primary',
                    'sub-title',
                  ]"
                  @click="handleClick(aa)"
                >
                  {{ aa.name }}
                  <NuxtImg
                    src="/icons/icon_more_slope_basic.svg"
                    width="16"
                    height="16"
                    alt="More"
                    loading="lazy"
                    class="ml-1"
                    :class="['sub-title-icon']"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container mx-auto px-8">
      <div class="flex flex-wrap relative">
        <div
          class="mx-auto flex flex-col flex-wrap items-center px-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start lg:w-1/3"
        >
          <TheLogo />

          <LangSwitcher />

          <div class="my-6 text-center flex flex-col">
            <NuxtLinkLocale to="/">+1 234 567-890</NuxtLinkLocale>
            <NuxtLinkLocale to="/">hello@fantico.com</NuxtLinkLocale>
          </div>
        </div>

        <div class="flex flex-col sm:w-full md:items-end">
          <div class="mb-4 opacity-25" />
          <p class="py-1 text-sm sm:text-center">
            &copy; 2002 - 2021. All Rights Reserved - ErHang is the King
          </p>
        </div>
      </div>
    </div> -->
  </footer>
</template>

<style scoped>
  .sub-title {
    cursor: pointer;
    height: 20px;
    /* font-family: Alibaba PuHuiTi; */
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: left;

    .sub-title-icon {
      visibility: hidden;
    }

    &:hover .sub-title-icon {
      visibility: visible;
    }
  }
</style>
