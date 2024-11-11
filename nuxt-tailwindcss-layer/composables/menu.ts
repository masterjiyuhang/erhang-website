import { ref } from 'vue'
import icon1 from '@/assets/images/header/inquiry/icon_nav_inquiry1@2x.png'
import icon1_hover from '@/assets/images/header/inquiry/icon_nav_inquiry1_hover@2x.png'
import icon2 from '@/assets/images/header/inquiry/icon_nav_inquiry2@2x.png'
import icon2_hover from '@/assets/images/header/inquiry/icon_nav_inquiry2_hover@2x.png'
import icon3 from '@/assets/images/header/inquiry/icon_nav_inquiry3@2x.png'
import icon3_hover from '@/assets/images/header/inquiry/icon_nav_inquiry3_hover@2x.png'
import qatar_logo from '@/assets/images/header/evnet/qatar.png'
import mangu_logo from '@/assets/images/header/evnet/mangu.png'

import schedulePlanLogo from '@/assets/images/header/tools/icon_nav_schedule@2x.png'
import cn_huoyunxian from '@/assets/images/header/tools/icon_nav_insure@2x.png'
import cn_huodaizerenxian from '@/assets/images/header/tools/icon_nav_liabilityinsure@2x.png'
import cn_quanlianlugenzong from '@/assets/images/header/tools/icon_nav_tracking@2x.png'
import cn_ams from '@/assets/images/header/tools/icon_nav_ams@2x.png'
import cn_isf from '@/assets/images/header/tools/icon_nav_isf@2x.png'
import cn_aci from '@/assets/images/header/tools/icon_nav_aci@2x.png'
import cn_afr from '@/assets/images/header/tools/icon_nav_afr@2x.png'
import cn_sh from '@/assets/images/header/tools/icon_nav_sh@2x.png'
import cn_qd from '@/assets/images/header/tools/icon_nav_qd@2x.png'
import cn_ns from '@/assets/images/header/tools/icon_nav_ns@2x.png'
import cn_sz from '@/assets/images/header/tools/icon_nav_sz@2x.png'
import cn_zaixianbaoguan from '@/assets/images/header/tools/icon_nav_clearance@2x.png'
import cn_fmc from '@/assets/images/header/tools/icon_nav_fmc@2x.png'

import FinIcon1 from '@/assets/images/header/financial/icon_nav_payment1@2x.png'
import FinIcon1Hover from '@/assets/images/header/financial/icon_nav_payment1_hover@2x.png'
import FinIcon2 from '@/assets/images/header/financial/icon_nav_payment2@2x.png'
import FinIcon2Hover from '@/assets/images/header/financial/icon_nav_payment2_hover@2x.png'
import FinIcon3 from '@/assets/images/header/financial/icon_nav_payment3@2x.png'
import FinIcon3Hover from '@/assets/images/header/financial/icon_nav_payment3_hover@2x.png'

type MenuType = 'link' | 'dropdown' | 'popover' | 'button' | 'selfLink'

export interface MenuItem {
  nameCn: string
  isActive: boolean
  menuType: MenuType
  nameEn?: string
  path?: string
  children?: SubMenuItem[] | EventItem[]
  desc?: string | string[]
  descEn?: string | string[]
  icon?: string
  iconHover?: string
  appId?: string
}
export type SubMenuItem = Omit<MenuItem, 'menuType'> & {
  link?: string
  isHot?: boolean
}

interface EventItem {
  nameEn: string
  nameCn: string
  startTime: string
  icon: any
  appId: string
  targetPath: string
  link?: string
}
const menuList = ref<MenuItem[]>([
  {
    nameEn: 'MemberShip',
    nameCn: '会员服务',
    path: '/member',
    isActive: false,
    menuType: 'selfLink',
  },
  {
    nameEn: 'Company Directory',
    nameCn: '公司名录',
    isActive: false,
    menuType: 'dropdown',
    children: [
      {
        nameCn: '国内代理',
        isActive: false,
        appId: 'SHOP',
        link: '',
      },
      {
        nameCn: '海外代理',
        isActive: false,
        appId: 'ERA',
        link: '/en/membership/list',
      },
      {
        nameCn: '贸易公司',
        isActive: false,
        appId: 'TRADE',
        link: '',
      },
    ],
  },
  {
    nameEn: 'Rates',
    nameCn: '运价',
    isActive: false,
    menuType: 'dropdown',
    children: [
      {
        label: '整箱',
        value: 'fcl',
        code: '1',
        onlyCity: false,
        transportType: 'Sea',
      },
      {
        label: '拼箱',
        value: 'lcl',
        code: '3',
        onlyCity: false,
        transportType: 'Sea',
      },
      {
        label: '散杂货',
        value: 'bkc',
        code: '4',
        onlyCity: false,
        transportType: 'Sea',
      },
      {
        label: '空运',
        value: 'air',
        code: '2',
        onlyCity: false,
        transportType: 'Air',
        subTypeList: [],
      },
      {
        label: '快递',
        code: '7',
        value: 'exp',
        onlyCity: true,
        transportType: 'other',
        subTypeList: [],
      },
      {
        label: '集卡',
        code: '5',
        value: 'ctt',
        onlyCity: true,
        transportType: 'other',
        subTypeList: [],
      },
      {
        label: '陆运',
        code: '8',
        value: 'ldt',
        onlyCity: true,
        transportType: 'other',
        subTypeList: [],
      },
      {
        label: '铁路',
        code: '6',
        value: 'rlw',
        onlyCity: true,
        transportType: 'other',
        subTypeList: [],
      },
      {
        label: '仓储',
        value: 'whs',
        code: '9',
        onlyCity: true,
        transportType: 'other',
        subTypeList: [],
      },
      {
        label: '报关',
        value: 'ctc',
        code: '10',
        onlyCity: true,
        transportType: 'other',
        subTypeList: [],
      },
    ].map((item) => {
      return {
        nameCn: item.label,
        appId: 'RATE',
        link: item.value,
        isActive: false,
      }
    }),
  },
  {
    nameEn: 'Inquiry',
    nameCn: '询盘',
    isActive: false,
    menuType: 'popover',
    children: [
      {
        nameCn: '询盘大厅',
        isActive: false,
        desc: '每月汇聚全球1.4w+询盘，高效获取商机',
        descEn:
          'Monthly global 1.4w+ inquiries, obtain business opportunities.',
        icon: icon1,
        iconHover: icon1_hover,
        appId: 'TPS',
        path: '/freightinquiry',
      },
      {
        nameCn: '货代圈',
        isActive: false,
        desc: '为货代销售，提供微信QQ全网商机，拓展合作机会',
        descEn: '为货代销售，提供微信QQ全网商机，拓展合作机会',
        icon: icon3,
        iconHover: icon3_hover,
        link: 'https://marketing.jctrans.com/promotion/hdq/pc/index.html#/',
      },
      {
        nameCn: '找代理',
        isActive: false,
        desc: '1.1w+全球货代企业聚集，3分钟智能推荐满足您的需求',
        descEn:
          'Over 11,000 global freight forwarding companies, intelligent inquiry recommendations within 3 mins.',
        icon: icon2,
        iconHover: icon2_hover,
        appId: 'TPS',
        path: '/findAgent',
      },
    ],
  },
  {
    nameEn: 'Event',
    nameCn: '全球会议',
    desc: '物流行业最具影响力的高端会议之一',
    isActive: false,
    menuType: 'popover',
    children: [
      {
        nameCn: '交洽会',
        descEn: [
          `Efficient 1-1 Meeting`,
          `Foster Collaboration`,
          `Expand Global Opportunities`,
        ],
        desc: [`高效洽谈`, `促进合作`, `拓展全球商机`],
        isHot: true,
        path: '/eve',
        icon: icon1,
        iconHover: icon1_hover,
        isActive: false,
        appId: 'ERA',
        children: [
          {
            nameEn: 'DoHa, Qatar',
            nameCn: '卡塔尔·多哈',
            startTime: '2024-10',
            icon: qatar_logo,
            appId: 'EVT',
            targetPath: 'conferenceQatar',
          },
          {
            nameEn: 'Bangkok, Thailand',
            nameCn: '泰国·曼谷',
            startTime: '2025-02',
            icon: mangu_logo,
            appId: 'EVT',
            targetPath: 'conferenceBangkokEighteen',
          },
        ],
      },
      {
        nameCn: '博览会',
        path: '/coExhibiton',
        descEn: [`Expand Networks`, `Build Brands`, `Empower Business Growth`],
        desc: [`扩展人脉`, `品牌塑造`, `助力企业发展`],
        isActive: false,
        icon: icon2,
        iconHover: icon2_hover,
        appId: 'EVT',
        children: [],
      },
      {
        nameCn: '行业活动',
        path: '/industryEvent',
        appId: 'EVT',
        isActive: false,
        descEn: [`Industry Event Forecast`],
        desc: [`会议动态`, `分享实践`, `把握行业脉搏`],
        icon: icon3,
        iconHover: icon3_hover,
        children: [],
      },
    ],
  },
  {
    nameEn: 'Financial Payment',
    nameCn: '金融支付',
    desc: '高效安全的结算服务，一年节省上万元手续费',
    isActive: false,
    menuType: 'popover',
    children: [
      {
        nameCn: '全球会员间免费结算',
        appId: 'FIN',
        path: '/JCPAY',
        desc: '无银行手续费，资金即时到账，为了保护您的资金安全，推荐您和会员间在平台内结算',
        isActive: false,
        icon: FinIcon1,
        iconHover: FinIcon1Hover,
      },
      {
        nameCn: '国内在线收付海运费',
        appId: 'FIN',
        path: '/USDExpress',
        desc: '联合中国银行推出的收付海运费秒到服务,为货代提升结算效率提供更优选择',
        isActive: false,
        icon: FinIcon2,
        iconHover: FinIcon2Hover,
      },
      {
        nameCn: '跨境收付汇安全省钱',
        desc: '为超过6000家企业提供在线跨境收付汇服务，汇率和手续费均低于银行',
        appId: 'FIN',
        path: '/TCS',
        isActive: false,
        icon: FinIcon3,
        iconHover: FinIcon3Hover,
      },
    ],
  },
  {
    nameCn: '工具',
    nameEn: 'Tools',
    isActive: false,
    menuType: 'popover',
    children: [
      {
        nameCn: '货运险',
        desc: '普货费率0.02%起，最低保费15元；在线投保，秒出单',
        link: 'https://www.jinhangbao.net/products/cargoInsurance',
        isActive: false,
        icon: cn_huoyunxian,
      },
      {
        nameCn: '货代责任险',
        desc: '保障货代公司经营风险，提供免费法律咨询',
        link: 'https://www.jinhangbao.net/products/liabilityInsurance',
        isActive: false,
        icon: cn_huodaizerenxian,
      },
      {
        nameCn: '船期',
        desc: '覆盖全球主流航线，主流船司，随时随地想查就查',
        link: 'https://www.jctrans.com/cn/tools/Container/SchedulePlan',
        isActive: false,
        icon: schedulePlanLogo,
      },
      {
        nameCn: '全链路跟踪',
        desc: '打通所有国际海运节点链路，实现跨国集装箱跟踪数字化，可视化体系',
        link: 'https://www.jctrans.com/cn/linktrack/list',
        isActive: false,
        icon: cn_quanlianlugenzong,
      },
      {
        nameCn: 'AMS',
        desc: '提供资质完备SCAC code，告别繁琐认证和跟踪',
        link: 'https://e.jctrans.com/?redirectFrom=ERA',
        isActive: false,
        icon: cn_ams,
      },
      {
        nameCn: 'ISF',
        desc: '支持ISF5+2和ISF10+2申报，提供Filer code',
        link: 'https://e.jctrans.com/?redirectFrom=ERA',
        isActive: false,
        icon: cn_isf,
      },
      {
        nameCn: 'ACL',
        desc: '提供 Bonded 8000 CODE 回执快速，推送及时',
        link: 'https://e.jctrans.com/?redirectFrom=ERA',
        isActive: false,
        icon: cn_aci,
      },
      {
        nameCn: 'AFR',
        desc: '一站式完成日本海关进境舱单预申报',
        link: 'https://e.jctrans.com/?redirectFrom=ERA',
        isActive: false,
        icon: cn_afr,
      },
      {
        nameCn: '上海预配',
        desc: '上海口岸预配舱单申报，支持主流船司、船代，回执迅速，价格优惠！',
        link: 'https://e.jctrans.com/?redirectFrom=ERA',
        isActive: false,
        icon: cn_sh,
      },
      {
        nameCn: '青岛预配',
        desc: '青岛口岸预配舱单，一键导入场站数据！覆盖全船司，全船代，支持日照舱单！',
        link: 'https://e.jctrans.com/?redirectFrom=ERA',
        isActive: false,
        icon: cn_qd,
      },
      {
        nameCn: '深圳预配',
        desc: '深圳预配+报关，在线跟踪，一键委托',
        link: 'https://e.jctrans.com/?redirectFrom=ERA',
        isActive: false,
        icon: cn_sz,
      },
      {
        nameCn: '南沙预配',
        desc: '南沙预配+报关，在线跟踪，一键委托',
        link: 'https://e.jctrans.com/?redirectFrom=ERA',
        isActive: false,
        icon: cn_ns,
      },
      {
        nameCn: '在线报关',
        desc: '支持全国主流口岸报关，AEO高认报关行为您报价护航，报关从未如此简单！',
        link: 'https://my.jctrans.com/mftCustoms',
        isActive: false,
        icon: cn_zaixianbaoguan,
      },
      {
        nameCn: 'FMC资质服务',
        desc: 'FMC在手，美线无忧',
        link: 'https://e.jctrans.com/fmcQualification',
        isActive: false,
        icon: cn_fmc,
      },
    ],
  },
  {
    nameCn: '新闻资讯',
    nameEn: 'News',
    isActive: false,
    menuType: 'link',
    appId: '',
    path: 'https://info.jctrans.com/',
    children: [],
  },
  {
    nameCn: '国际站',
    nameEn: 'International',
    isActive: false,
    menuType: 'link',
    appId: 'ERA',
    path: '',
    children: [],
  },
  {
    nameCn: '关于我们',
    nameEn: 'About Us',
    isActive: false,
    menuType: 'link',
    appId: 'ERA',
    path: '/cn/aboutus',
    children: [],
  },
])

export const useMenu = () => {
  return { menuList }
}
