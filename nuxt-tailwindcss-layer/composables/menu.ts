import { ref } from 'vue'

const menuList = ref([
  {
    nameEn: 'MemberShip',
    nameCn: '会员服务',
    path: '/member',
    isActive: false,
  },
  {
    nameEn: 'Company Directory',
    nameCn: '公司名录',
    path: '/membership/list',
    isActive: false,
  },
])
export const useMenu = () => {
  return { menuList }
}
