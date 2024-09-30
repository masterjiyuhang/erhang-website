import { ref } from 'vue'

type MenuType = 'link' | 'dropdown' | 'popover' | 'button' | 'selfLink'

export interface MenuItem {
  nameEn: string
  nameCn: string
  isActive: boolean
  menuType: MenuType
  path?: string
  children?: MenuItem[]
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
    children: [],
  },
  {
    nameEn: 'Global Event',
    nameCn: '全球会议',
    isActive: false,
    menuType: 'popover',
    children: [],
  },
  {
    nameEn: 'Financial Payment',
    nameCn: '金融支付',
    isActive: false,
    menuType: 'popover',
    children: [],
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
