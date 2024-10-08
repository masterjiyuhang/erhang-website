import { ref } from 'vue'
import icon1 from '@/assets/images/header/inquiry/icon_nav_inquiry1@2x.png'
import icon1_hover from '@/assets/images/header/inquiry/icon_nav_inquiry1_hover@2x.png'
import icon2 from '@/assets/images/header/inquiry/icon_nav_inquiry2@2x.png'
import icon2_hover from '@/assets/images/header/inquiry/icon_nav_inquiry2_hover@2x.png'
import icon3 from '@/assets/images/header/inquiry/icon_nav_inquiry3@2x.png'
import icon3_hover from '@/assets/images/header/inquiry/icon_nav_inquiry3_hover@2x.png'

type MenuType = 'link' | 'dropdown' | 'popover' | 'button' | 'selfLink'

export interface MenuItem {
  nameCn: string
  isActive: boolean
  menuType: MenuType
  nameEn?: string
  path?: string
  children?: SubMenuItem[]
  desc?: string
  descEn?: string
  icon?: string
  iconHover?: string
}
export type SubMenuItem = Omit<MenuItem, 'menuType'>
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
    children: [],
  },
  {
    nameEn: 'Rates',
    nameCn: '运价',
    isActive: false,
    menuType: 'dropdown',
    children: [],
  },
  {
    nameEn: 'Inquiry',
    nameCn: '询盘',
    isActive: false,
    menuType: 'popover',
    children: [
      {
        nameCn: '询盘大厅',
        path: '',
        isActive: false,
        desc: '每月汇聚全球1.4w+询盘，高效获取商机',
        descEn:
          'Monthly global 1.4w+ inquiries, obtain business opportunities.',
        icon: icon1,
        iconHover: icon1_hover,
      },
      {
        nameCn: '货代圈',
        path: '',
        isActive: false,
        desc: '为货代销售，提供微信QQ全网商机，拓展合作机会',
        descEn: '为货代销售，提供微信QQ全网商机，拓展合作机会',
        icon: icon3,
        iconHover: icon3_hover,
      },
      {
        nameCn: '找代理',
        path: '',
        isActive: false,
        desc: '1.1w+全球货代企业聚集，3分钟智能推荐满足您的需求',
        descEn:
          'Over 11,000 global freight forwarding companies, intelligent inquiry recommendations within 3 mins.',
        icon: icon2,
        iconHover: icon2_hover,
      },
    ],
  },
  {
    nameEn: 'Global Event',
    nameCn: '全球会议',
    isActive: false,
    menuType: 'popover',
    children: [
      {
        nameCn: '询盘大厅',
        path: '',
        isActive: false,
      },
      {
        nameCn: '询盘大厅',
        path: '',
        isActive: false,
      },
      {
        nameCn: '询盘大厅',
        path: '',
        isActive: false,
      },
      {
        nameCn: '询盘大厅',
        path: '',
        isActive: false,
      },
    ],
  },
  {
    nameEn: 'Financial Payment',
    nameCn: '金融支付',
    isActive: false,
    menuType: 'popover',
    children: [
      {
        nameCn: '询盘大厅',
        path: '',
        isActive: false,
      },
      {
        nameCn: '询盘大厅',
        path: '',
        isActive: false,
      },
      {
        nameCn: '询盘大厅',
        path: '',
        isActive: false,
      },
    ],
  },
  {
    nameCn: '工具',
    nameEn: 'Tools',
    isActive: false,
    menuType: 'popover',
    children: [],
  },
  {
    nameCn: '新闻资讯',
    nameEn: 'News',
    isActive: false,
    menuType: 'link',
    children: [],
  },
  {
    nameCn: '国际站',
    nameEn: 'International',
    isActive: false,
    menuType: 'link',
    children: [],
  },
  {
    nameCn: '关于我们',
    nameEn: 'About Us',
    isActive: false,
    menuType: 'link',
    children: [],
  },
])

export const useMenu = () => {
  return { menuList }
}
