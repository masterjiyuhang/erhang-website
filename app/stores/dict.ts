import { defineStore } from 'pinia'

export const useDictStore = defineStore({
  id: 'myDictStore',
  state: () => ({
    // 海运 箱型列表
    boxTypeList: [
      {
        name: '整箱',
        href: 'https://shipping.jctrans.com/fcl',
      },
      { name: '拼箱', href: 'https://shipping.jctrans.com/lcl' },
      {
        name: '冷藏',
        href: 'https://shipping.jctrans.com/fcl?transportType=fcl&cabType=2',
      },
      {
        name: '危险品',
        href: 'https://shipping.jctrans.com/fcl?transportType=fcl&cabType=1',
      },
      {
        name: '特种柜',
        href: 'https://shipping.jctrans.com/fcl?transportType=fcl&cabType=3',
      },
    ],
    // 海运 散杂货
    BulkCargoTypeList: [
      { name: '大宗散杂', href: '#' },
      { name: '件杂货', href: '#' },
      { name: '车辆', href: '#' },
    ],
    // 海运 航线
    routeList: [
      {
        name: '西北欧',
        href: 'https://shipping.jctrans.com/fcl?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=fcl&cabType=0&routerId=20000011',
      },
      {
        name: '东南亚线',
        href: 'https://shipping.jctrans.com/fcl?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=fcl&cabType=0&routerId=20000003',
      },
      {
        name: '中南美线',
        href: 'https://shipping.jctrans.com/fcl?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=fcl&cabType=0&routerId=20000017',
      },
      {
        name: '地中海线',
        href: 'https://shipping.jctrans.com/fcl?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=fcl&cabType=0&routerId=20000010',
      },
      {
        name: '美西',
        href: 'https://shipping.jctrans.com/fcl?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=fcl&cabType=0&routerId=20000016',
      },
      {
        name: '美东',
        href: 'https://shipping.jctrans.com/fcl?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=fcl&cabType=0&routerId=20000016',
      },
      {
        name: '中东波斯湾',
        href: 'https://shipping.jctrans.com/fcl?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=fcl&cabType=0&routerId=20000005',
      },
      {
        name: '印巴线',
        href: 'https://shipping.jctrans.com/fcl?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=fcl&cabType=0&routerId=20000007',
      },
      {
        name: '澳新线',
        href: 'https://shipping.jctrans.com/fcl?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=fcl&cabType=0&routerId=20000004',
      },
      {
        name: '西非',
        href: 'https://shipping.jctrans.com/fcl?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=fcl&cabType=0&routerId=20000015',
      },
    ],
    // 海运 承运人列表
    carrierList: [
      {
        name: '中远',
        href: 'https://shipping.jctrans.com/fcl?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&destId=10000028&destPortName=%E8%83%A1%E5%BF%97%E6%98%8E&transportType=fcl&cabType=0',
      },
      {
        name: '马士基',
        href: 'https://shipping.jctrans.com/fcl?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=fcl&cabType=0&routerId=20000000',
      },
      {
        name: '地中海',
        href: 'https://shipping.jctrans.com/fcl?fromId=10002797&fromPortName=%E4%B8%8A%E6%B5%B7%E6%B8%AF&transportType=fcl&cabType=0&routerId=20000000',
      },
      {
        name: '长荣',
        href: 'https://shipping.jctrans.com/fcl?fromId=10002797&fromPortName=%E4%B8%8A%E6%B5%B7%E6%B8%AF&transportType=fcl&cabType=0&routerId=20000000',
      },
      {
        name: '达飞',
        href: 'https://shipping.jctrans.com/fcl?fromId=10002797&fromPortName=%E4%B8%8A%E6%B5%B7%E6%B8%AF&transportType=fcl&cabType=0&routerId=20000012',
      },
      {
        name: '阳明',
        href: 'https://shipping.jctrans.com/fcl?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=fcl&cabType=0&routerId=20000000',
      },
      {
        name: '东方海外',
        href: 'https://shipping.jctrans.com/fcl?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=fcl&cabType=0&routerId=20000000',
      },
      {
        name: '现代',
        href: 'https://shipping.jctrans.com/fcl?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=fcl&cabType=0&routerId=20000000',
      },
      {
        name: '美总',
        href: 'https://shipping.jctrans.com/fcl?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=fcl&cabType=0&routerId=20000000',
      },
      {
        name: '赫伯罗特',
        href: 'https://shipping.jctrans.com/fcl?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=fcl&cabType=0&routerId=20000000',
      },
    ],

    // 海运 热门港口
    hotPortList: [
      {
        name: '上海',
        href: 'https://shipping.jctrans.com/fcl?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=fcl&cabType=0&routerId=20000000',
      },
      {
        name: '天津',
        href: 'https://shipping.jctrans.com/fcl?fromId=3763&fromPortName=%E5%A4%A9%E6%B4%A5&transportType=fcl&cabType=0&routerId=20000011',
      },
      {
        name: '青岛',
        href: 'https://shipping.jctrans.com/fcl?fromId=2815&fromPortName=%E9%9D%92%E5%B2%9B&transportType=fcl&cabType=0&routerId=20000000',
      },
      {
        name: '广州',
        href: 'https://shipping.jctrans.com/fcl?fromId=2880&fromPortName=%E5%B9%BF%E5%B7%9E&transportType=fcl&cabType=0&routerId=20000000',
      },
      {
        name: '深圳',
        href: 'https://shipping.jctrans.com/fcl?fromId=2882&fromPortName=%E6%B7%B1%E5%9C%B3&transportType=fcl&cabType=0&routerId=20000000',
      },
    ],
    // 海运 优势业务列表
    advantageList: [
      {
        name: '上海',
        href: 'https://shipping.jctrans.com/fcl?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=fcl&cabType=0&routerId=20000000',
      },
      {
        name: '天津',
        href: 'https://shipping.jctrans.com/fcl?fromId=3763&fromPortName=%E5%A4%A9%E6%B4%A5&transportType=fcl&cabType=0&routerId=20000011',
      },
      {
        name: '青岛',
        href: 'https://shipping.jctrans.com/fcl?fromId=2815&fromPortName=%E9%9D%92%E5%B2%9B&transportType=fcl&cabType=0&routerId=20000000',
      },
      {
        name: '广州',
        href: 'https://shipping.jctrans.com/fcl?fromId=2880&fromPortName=%E5%B9%BF%E5%B7%9E&transportType=fcl&cabType=0&routerId=20000000',
      },
      {
        name: '深圳',
        href: 'https://shipping.jctrans.com/fcl?fromId=2882&fromPortName=%E6%B7%B1%E5%9C%B3&transportType=fcl&cabType=0&routerId=20000000',
      },
    ],

    // 空运 国际到达
    internationalArrivals: [
      {
        name: '大洋洲',
        href: 'https://shipping.jctrans.com/air?fromId=5001157&fromPortName=%E4%B8%8A%E6%B5%B7%E6%B5%A6%E4%B8%9C%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA&transportType=air&cabType=0&routerId=20000028',
      },
      {
        name: '非洲',
        href: 'https://shipping.jctrans.com/air?fromId=5001157&fromPortName=%E4%B8%8A%E6%B5%B7%E6%B5%A6%E4%B8%9C%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA&transportType=air&cabType=0&routerId=20000024',
      },
      {
        name: '美洲',
        href: 'https://shipping.jctrans.com/air?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=air&cabType=0&routerId=20000021',
      },
      {
        name: '欧洲',
        href: 'https://shipping.jctrans.com/air?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=air&cabType=0&routerId=20000022',
      },
      {
        name: '亚洲',
        href: 'https://shipping.jctrans.com/air?fromId=5001157&fromPortName=%E4%B8%8A%E6%B5%B7%E6%B5%A6%E4%B8%9C%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA&transportType=air&cabType=0&routerId=20000026',
      },
    ],

    // 空运 国内航线
    domesticLines: [
      {
        name: '上海',
        href: 'https://shipping.jctrans.com/air?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=air&cabType=0&routerId=20000018',
      },
      {
        name: '北京',
        href: 'https://shipping.jctrans.com/air?fromId=5003945&fromPortName=%E5%8C%97%E4%BA%AC%E9%A6%96%E9%83%BD%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA&transportType=air&cabType=0&routerId=20000020',
      },
      {
        name: '深圳',
        href: 'https://shipping.jctrans.com/air?fromId=2882&fromPortName=%E6%B7%B1%E5%9C%B3&transportType=air&cabType=0&routerId=20000018',
      },
      {
        name: '广州',
        href: 'https://shipping.jctrans.com/air?fromId=2880&fromPortName=%E5%B9%BF%E5%B7%9E&transportType=air&cabType=0&routerId=20000018',
      },
      {
        name: '厦门',
        href: 'https://shipping.jctrans.com/air?fromId=5003213&fromPortName=%E5%8E%A6%E9%97%A8%E9%AB%98%E5%B4%8E%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA&transportType=air&cabType=0&routerId=20000018',
      },
      {
        name: '杭州',
        href: 'https://shipping.jctrans.com/air?fromId=5000057&fromPortName=%E6%9D%AD%E5%B7%9E%E8%90%A7%E5%B1%B1%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA&transportType=air&cabType=0&routerId=20000018',
      },
      {
        name: '宁波',
        href: 'https://shipping.jctrans.com/air?fromId=2768&fromPortName=%E5%AE%81%E6%B3%A2&transportType=air&cabType=0&routerId=20000018',
      },
      {
        name: '青岛',
        href: 'https://shipping.jctrans.com/air?fromId=5001199&fromPortName=%E9%9D%92%E5%B2%9B%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA&transportType=air&cabType=0&routerId=20000018',
      },
      {
        name: '大连',
        href: 'https://shipping.jctrans.com/air?fromId=2701&fromPortName=%E5%A4%A7%E8%BF%9E&transportType=air&cabType=0&routerId=20000020',
      },
      {
        name: '成都',
        href: 'https://shipping.jctrans.com/air?fromId=2975&fromPortName=%E6%88%90%E9%83%BD&transportType=air&cabType=0&routerId=20000018',
      },
    ],

    // 空运 航空公司
    ariCarriers: [
      {
        name: '中国国航',
        href: 'https://shipping.jctrans.com/air?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=air&cabType=0&routerId=20000021',
      },
      {
        name: '中国南航',
        href: 'https://shipping.jctrans.com/air?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=air&cabType=0&routerId=20000021',
      },
      {
        name: '中国东航',
        href: 'https://shipping.jctrans.com/air?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=air&cabType=0&routerId=20000021',
      },
      {
        name: '中国海航',
        href: 'https://shipping.jctrans.com/air?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=air&cabType=0&routerId=20000021',
      },
      {
        name: '土尔其航空',
        href: 'https://shipping.jctrans.com/air?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=air&cabType=0&routerId=20000021',
      },
      {
        name: '阿联酋航空',
        href: 'https://shipping.jctrans.com/air?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=air&cabType=0&routerId=20000021',
      },
      {
        name: '卡塔尔航空',
        href: 'https://shipping.jctrans.com/air?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=air&cabType=0&routerId=20000021',
      },
      {
        name: '阿联酋水晶',
        href: 'https://shipping.jctrans.com/air?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=air&cabType=0&routerId=20000021',
      },
      {
        name: '美国航空公',
        href: 'https://shipping.jctrans.com/air?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=air&cabType=0&routerId=20000021',
      },
      {
        name: '大韩航空公',
        href: 'https://shipping.jctrans.com/air?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=air&cabType=0&routerId=20000021',
      },
    ],

    // 空运 国际始发
    internationalDepartures: [
      {
        name: '广州',
        href: ' https://shipping.jctrans.com/air?fromId=2880&fromPortName=%E5%B9%BF%E5%B7%9E&transportType=air&cabType=0&routerId=20000018',
      },
      {
        name: '北京',
        href: 'https://shipping.jctrans.com/air?fromId=5003945&fromPortName=%E5%8C%97%E4%BA%AC%E9%A6%96%E9%83%BD%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA&transportType=air&cabType=0&routerId=20000020',
      },
      {
        name: '深圳',
        href: 'https://shipping.jctrans.com/air?fromId=2882&fromPortName=%E6%B7%B1%E5%9C%B3&transportType=air&cabType=0&routerId=20000018',
      },
      {
        name: '上海',
        href: 'https://shipping.jctrans.com/air?fromId=4019&fromPortName=%E4%B8%8A%E6%B5%B7&transportType=air&cabType=0&routerId=20000018',
      },
      {
        name: '成都',
        href: 'https://shipping.jctrans.com/air?fromId=2975&fromPortName=%E6%88%90%E9%83%BD&transportType=air&cabType=0&routerId=20000018',
      },
    ],
  }),
  getters: {
    nameDict(state) {
      return {
        air: [
          {
            name: '国际到达',
            dict: state.internationalArrivals,
          },
          {
            name: '国内航线',
            dict: state.domesticLines,
          },
          {
            name: '航空公司',
            dict: state.ariCarriers,
          },
          {
            name: '国际始发',
            dict: state.internationalDepartures,
          },
        ],
      }
    },
  },
  actions: {},
  persist: {
    key: 'globalDict',
  },
})
