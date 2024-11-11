import { isClient } from '@vueuse/core'
import {
  getAdDefaultRightTextLinkAirApi,
  getAdDefaultRightTextLinkAirThreeApi,
  getAdDefaultRightTextLinkAirTwoApi,
  getAdDefaultRightTextLinkComprehensiveApi,
  getAdDefaultRightTextLinkComprehensiveThreeApi,
  getAdDefaultRightTextLinkComprehensiveTwoApi,
  getAdFloatTopApi,
  getAdLeftBtnOneApi,
  getAdLeftBtnThreeApi,
  getAdLeftBtnTwoApi,
  getAdLeftFloatBtnApi,
  getAdLeftFloatBtnSmallApi,
  getAdMiddleBtnOneApi,
  getAdMiddleBtnThreeApi,
  getAdMiddleBtnTwoApi,
  getAdMiddleOneApi,
  getAdMiddleTwoApi,
  getAdRightBtnAirApi,
  getAdRightBtnComprehensiveApi,
  getAdRightBtnFiveApi,
  getAdRightBtnFourApi,
  getAdRightBtnLandApi,
  getAdRightBtnOneApi,
  getAdRightBtnShipApi,
  getAdRightBtnShipTwoApi,
  getAdRightBtnThreeApi,
  getAdRightBtnTwoApi,
  getAdRightFloatBtnApi,
  getAdRightFloatBtnSmallApi,
  getAdRightTextLinkAirApi,
  getAdRightTextLinkAirThreeApi,
  getAdRightTextLinkAirTwoApi,
  getAdRightTextLinkComprehensiveApi,
  getAdRightTextLinkComprehensiveThreeApi,
  getAdRightTextLinkComprehensiveTwoApi,
  getAdThreeScreenApi,
  getAdThreeScreenRightBtnApi,
  getDefaultAdFloatTopApi,
  getDefaultAdLeftBtnOneApi,
  getDefaultAdLeftBtnThreeApi,
  getDefaultAdLeftBtnTwoApi,
  getDefaultAdLeftFloatBtnApi,
  getDefaultAdLeftFloatBtnSmallApi,
  getDefaultAdMiddleBtnOneApi,
  getDefaultAdMiddleBtnThreeApi,
  getDefaultAdMiddleBtnTwoApi,
  getDefaultAdMiddleOneApi,
  getDefaultAdMiddleTwoApi,
  getDefaultAdRIghtBtnAirApi,
  getDefaultAdRightBtnComprehensiveApi,
  getDefaultAdRightBtnFiveApi,
  getDefaultAdRightBtnFourApi,
  getDefaultAdRightBtnLandApi,
  getDefaultAdRightBtnOneApi,
  getDefaultAdRightBtnShipApi,
  getDefaultAdRightBtnShipTwoApi,
  getDefaultAdRightBtnThreeApi,
  getDefaultAdRightBtnTwoApi,
  getDefaultAdRightFloatBtnApi,
  getDefaultAdRightFloatBtnSmallApi,
  getDefaultAdThreeScreenApi,
  getDefaultAdThreeScreenRightBtnApi,
  getDefaultApi,
  getLevel4AdApi,
} from '~/api/home'
import { fetchAdData } from '~/utils'

export const useHomeAdList = () => {
  interface AdItem {
    image: string
    defaultImg: string
    defaultLink?: string
    [key: string]: any
    // 你可以根据需要添加更多字段
  }

  /**
   * 首页焦点图广告列表
   */
  const TopicAdList = useState<AdItem[]>('TopicAdList', () => {
    return []
  })

  /**
   * 海运广告列表
   */
  const ShipAdList = useState<AdItem[]>('ShipAdList', () => {
    return []
  })

  /**
   * 空运广告列表
   */
  const AirAdList = useState<AdItem[]>('AirAdList', () => {
    return []
  })

  const AirTextAdList = useState<AdItem[]>('AirTextAdList', () => {
    return []
  })

  /**
   * 陆运广告列表
   */
  const LandAdList = useState<AdItem[]>('LandAdList', () => {
    return []
  })

  /**
   * 综合服务广告列表
   */
  const ComprehensiveAdList = useState<AdItem[]>('ComprehensiveAdList', () => {
    return []
  })
  const ComprehensiveTextAdList = useState<AdItem[]>(
    'ComprehensiveTextAdList',
    () => {
      return []
    },
  )

  /**
   * 首页三屏广告列表
   */
  const ThreeScreenAdListRight = useState<AdItem[]>(
    'ThreeScreenAdListRight',
    () => {
      return []
    },
  )
  const ThreeScreenAdListLeft = useState<AdItem[]>(
    'ThreeScreenAdListLeft',
    () => {
      return []
    },
  )

  /**
   * 悬浮广告列表
   */
  const FloatAdList = useState<{
    left: AdItem
    leftSmall: AdItem
    right: AdItem
    rightSmall: AdItem
  }>('FloatAdList', () => {
    return {
      left: { image: '', defaultImg: '', link: '', title: '' },
      leftSmall: { image: '', defaultImg: '', link: '', title: '' },
      right: { image: '', defaultImg: '', link: '', title: '' },
      rightSmall: { image: '', defaultImg: '', link: '', title: '' },
    }
  })

  /**
   * 首页顶部浮动那个小条
   */
  const topFloatAdList = useState<AdItem[]>('topFloatAdList', () => {
    return []
  })

  /**
   * 首页广告列表
   */
  const AdList = useState<{
    AdLeftBtnOne: AdItem
    AdLeftBtnTwo: AdItem
    AdLeftBtnThree: AdItem

    AdRightBtnOne: AdItem
    AdRightBtnTwo: AdItem
    AdRightBtnThree: AdItem
    AdRightBtnFour: AdItem
    AdRightBtnFive: AdItem

    AdMiddleOne: AdItem
    AdMiddleTwo: AdItem

    AdMiddleBtnOne?: AdItem
    AdMiddleBtnTwo?: AdItem
    AdMiddleBtnThree?: AdItem
  }>('HomeAdList', () => {
    return {
      AdLeftBtnOne: {
        image: '',
        defaultImg: '',
        link: '',
        title: '',
      },
      AdLeftBtnTwo: {
        image: '',
        defaultImg: '',
        link: '',
        title: '',
      },
      AdLeftBtnThree: {
        image: '',
        defaultImg: '',
        link: '',
        title: '',
      },

      AdRightBtnOne: { image: '', defaultImg: '', link: '', title: '' },
      AdRightBtnTwo: { image: '', defaultImg: '', link: '', title: '' },
      AdRightBtnThree: { image: '', defaultImg: '', link: '', title: '' },
      AdRightBtnFour: { image: '', defaultImg: '', link: '', title: '' },
      AdRightBtnFive: { image: '', defaultImg: '', link: '', title: '' },

      AdMiddleOne: {
        image: '',
        defaultImg: '',
        link: '',
        title: '',
      },
      AdMiddleTwo: { image: '', defaultImg: '', link: '', title: '' },

      AdMiddleBtnOne: { image: '', defaultImg: '', link: '', title: '' },
      AdMiddleBtnTwo: { image: '', defaultImg: '', link: '', title: '' },
      AdMiddleBtnThree: { image: '', defaultImg: '', link: '', title: '' },
    }
  })

  /**
   * 获取首屏左侧按钮1
   */
  async function getAdLeftBtnOne() {
    try {
      await fetchAdData(
        [getDefaultAdLeftBtnOneApi()],
        [getAdLeftBtnOneApi()],
      ).then((adList: AdItem[]) => {
        if (adList.length > 0) {
          AdList.value.AdLeftBtnOne = adList[0]
        }
      })
    } catch (error) {
      console.error('获取首屏左侧按钮1失败:', error)
    }
  }

  /**
   * 获取首屏左侧按钮2
   */
  async function getAdLeftBtnTwo() {
    try {
      await fetchAdData(
        [getDefaultAdLeftBtnTwoApi()],
        [getAdLeftBtnTwoApi()],
      ).then((adList: AdItem[]) => {
        if (adList.length > 0) {
          AdList.value.AdLeftBtnTwo = adList[0]
        }
      })
    } catch (error) {
      console.error('获取首屏左侧按钮2失败:', error)
    }
  }

  /**
   * 获取首屏左侧按钮3
   */
  async function getAdLeftBtnThree() {
    try {
      await fetchAdData(
        [getDefaultAdLeftBtnThreeApi()],
        [getAdLeftBtnThreeApi()],
      ).then((adList: AdItem[]) => {
        if (adList.length > 0) {
          AdList.value.AdLeftBtnThree = adList[0]
        }
      })
    } catch (error) {
      console.error('获取首屏左侧按钮3失败:', error)
    }
  }
  /**
   * 获取首屏中部 半通栏一 648*80
   */
  async function getAdMiddleOne() {
    try {
      await fetchAdData(
        [getDefaultAdMiddleOneApi()],
        [getAdMiddleOneApi()],
      ).then((adList: AdItem[]) => {
        if (adList.length > 0) {
          AdList.value.AdMiddleOne = adList[0]
        }
      })
    } catch (error) {
      console.error('获取首屏中部通栏一 648*80 失败:', error)
    }
  }

  /**
   * 获取首屏中部半通栏 650*45
   */
  async function getAdMiddleTwo() {
    try {
      await fetchAdData(
        [getDefaultAdMiddleTwoApi()],
        [getAdMiddleTwoApi()],
      ).then((adList: AdItem[]) => {
        if (adList.length > 0) {
          AdList.value.AdMiddleTwo = adList[0]
        }
      })
    } catch (error) {
      console.error('获取首屏中部半通栏 650*45 失败:', error)
    }
  }

  /**
   * 获取中间按钮1
   */
  async function getAdMiddleBtnOne() {
    try {
      await fetchAdData(
        [getDefaultAdMiddleBtnOneApi()],
        [getAdMiddleBtnOneApi()],
      ).then((adList: AdItem[]) => {
        if (adList.length > 0) {
          AdList.value.AdMiddleBtnOne = adList[0]
        }
      })
    } catch (error) {
      console.error('获取中间按钮1失败:', error)
    }
  }

  /**
   * 获取中间按钮2
   */
  async function getAdMiddleBtnTwo() {
    try {
      await fetchAdData(
        [getDefaultAdMiddleBtnTwoApi()],
        [getAdMiddleBtnTwoApi()],
      ).then((adList: AdItem[]) => {
        if (adList.length > 0) {
          AdList.value.AdMiddleBtnTwo = adList[0]
        }
      })
    } catch (error) {
      console.error('获取中间按钮2失败:', error)
    }
  }

  /**
   * 获取首屏中部按钮三 中间按钮3
   */
  async function getAdMiddleBtnThree() {
    try {
      await fetchAdData(
        [getDefaultAdMiddleBtnThreeApi()],
        [getAdMiddleBtnThreeApi()],
      ).then((adList: AdItem[]) => {
        if (adList.length > 0) {
          AdList.value.AdMiddleBtnThree = adList[0]
        }
      })
    } catch (error) {
      console.error('获取中间按钮3失败:', error)
    }
  }
  /**
   * 获取右侧按钮1
   */
  async function getAdRightBtnOne() {
    try {
      await fetchAdData(
        [getDefaultAdRightBtnOneApi()],
        [getAdRightBtnOneApi()],
      ).then((adList: AdItem[]) => {
        if (adList.length > 0) {
          AdList.value.AdRightBtnOne = adList[0]
        }
      })
      // const res = await getAdRightBtnOneApi()
      // const rr = res.data.value?.data?.records.filter((item) =>
      //   isWithinRange(item.fromTime, item.toTime),
      // )
      // if (rr && rr.length) {
      //   AdList.value.AdRightBtnOne = rr[0]
      // } else {
      //   const defaultRes = await getDefaultAdRightBtnOneApi()
      //   AdList.value.AdRightBtnOne.defaultImg =
      //     defaultRes.data.value?.image || ''
      //   AdList.value.AdRightBtnOne.link = defaultRes.data.value?.link || ''
      // }
    } catch (error) {
      console.error('获取右侧按钮1失败:', error)
    }
  }

  /**
   * 获取右侧按钮2
   */
  async function getAdRightBtnTwo() {
    try {
      await fetchAdData(
        [getDefaultAdRightBtnTwoApi()],
        [getAdRightBtnTwoApi()],
      ).then((adList: AdItem[]) => {
        if (adList.length > 0) {
          AdList.value.AdRightBtnTwo = adList[0]
        }
      })
    } catch (error) {
      console.error('获取右侧按钮2失败:', error)
    }
  }

  /**
   * 获取右侧按钮3
   */
  async function getAdRightBtnThree() {
    try {
      await fetchAdData(
        [getDefaultAdRightBtnThreeApi()],
        [getAdRightBtnThreeApi()],
      ).then((adList: AdItem[]) => {
        if (adList.length > 0) {
          AdList.value.AdRightBtnThree = adList[0]
        }
      })
    } catch (error) {
      console.error('获取右侧按钮3失败:', error)
    }
  }

  /**
   * 获取右侧按钮4
   */
  async function getAdRightBtnFour() {
    try {
      await fetchAdData(
        [getDefaultAdRightBtnFourApi()],
        [getAdRightBtnFourApi()],
      ).then((adList: AdItem[]) => {
        if (adList.length > 0) {
          AdList.value.AdRightBtnFour = adList[0]
        }
      })
    } catch (error) {
      console.error('获取右侧按钮4失败:', error)
    }
  }

  /**
   * 获取右侧按钮5
   */
  async function getAdRightBtnFive() {
    try {
      await fetchAdData(
        [getDefaultAdRightBtnFiveApi()],
        [getAdRightBtnFiveApi()],
      ).then((adList: AdItem[]) => {
        if (adList.length > 0) {
          AdList.value.AdRightBtnFive = adList[0]
        }
      })
    } catch (error) {
      console.error('获取右侧按钮4失败:', error)
    }
  }

  /**
   * 获取左侧浮动广告
   */
  async function getAdLeftFloatBtn() {
    try {
      await fetchAdData(
        [getDefaultAdLeftFloatBtnApi()],
        [getAdLeftFloatBtnApi()],
      ).then((adList: AdItem[]) => {
        if (adList.length > 0) {
          FloatAdList.value.left = adList[0]
        }
      })
    } catch (error) {
      console.error('获取左侧浮动广告:', error)
    }
  }
  /**
   * 获取左侧浮动广告 小
   */
  async function getAdLeftFloatBtnSmall() {
    try {
      await fetchAdData(
        [getDefaultAdLeftFloatBtnSmallApi()],
        [getAdLeftFloatBtnSmallApi()],
      ).then((adList: AdItem[]) => {
        if (adList.length > 0) {
          FloatAdList.value.leftSmall = adList[0]
        }
      })
    } catch (error) {
      console.error('获取左侧浮动广告 小:', error)
    }
  }

  /**
   * 获取右侧浮动广告
   */
  async function getAdRightFloatBtn() {
    try {
      await fetchAdData(
        [getDefaultAdRightFloatBtnApi()],
        [getAdRightFloatBtnApi()],
      ).then((adList: AdItem[]) => {
        if (adList.length > 0) {
          FloatAdList.value.right = adList[0]
        }
      })
    } catch (error) {
      console.error('获取右侧浮动广告失败:', error)
    }
  }

  /**
   * 获取右侧浮动广告 小
   */
  async function getAdRightFloatBtnSmall() {
    try {
      await fetchAdData(
        [getDefaultAdRightFloatBtnSmallApi()],
        [getAdRightFloatBtnSmallApi()],
      ).then((adList: AdItem[]) => {
        if (adList.length > 0) {
          FloatAdList.value.rightSmall = adList[0]
        }
      })
    } catch (error) {
      console.error('获取右侧浮动广告小失败:', error)
    }
  }
  // 首页广告	焦点图	焦点图1~16
  async function getTopicAdList() {
    const defaultPromises = Array.from({ length: 16 }, (_, index) => {
      const formattedIndex = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`
      return getDefaultApi(`CLS-1-1017-10170${formattedIndex}`)
    })
    const promises = Array.from({ length: 16 }, (_, index) => {
      const formattedIndex = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`
      return getLevel4AdApi(`CLS-1-1017-10170${formattedIndex}`)
    })

    await fetchAdData(defaultPromises, promises)
      .then((adList: AdItem[]) => {
        TopicAdList.value = adList.filter((item) => !_isEmpty(item))
      })
      .catch((error) => {
        console.error(
          '🚀 ~ file: useHomeAdList.ts ~ getTopicAdList error:',
          error,
        )
      })
  }
  /**
   * 获取首页 顶部 浮动广告
   */
  async function getHomeTopFloatAdList() {
    if (!isClient) {
      const defaultPromises = [getDefaultAdFloatTopApi()]

      const promises = [getAdFloatTopApi()]
      await fetchAdData(defaultPromises, promises)
        .then((adList: AdItem[]) => {
          topFloatAdList.value = adList
        })
        .catch((error) => {
          console.error(
            '🚀 ~ file: useHomeAdList.ts ~ getHomeTopFloatAdList error:',
            error,
          )
        })
    }
  }

  /**
   * 获取海运广告
   */
  async function getSeaTransportAdList() {
    if (!isClient) {
      const defaultPromises = [
        getDefaultAdRightBtnShipApi(),
        getDefaultAdRightBtnShipTwoApi(),
      ]

      const promises = [getAdRightBtnShipApi(), getAdRightBtnShipTwoApi()]
      await fetchAdData(defaultPromises, promises)
        .then((adList: AdItem[]) => {
          ShipAdList.value = adList
        })
        .catch((error) => {
          console.error(
            '🚀 ~ file: useHomeAdList.ts ~ getSeaTransportAdList error:',
            error,
          )
        })
    }
  }

  /**
   * 获取空运广告
   */
  async function getAirTransportAdList() {
    if (!isClient) {
      const defaultPromises = [getDefaultAdRIghtBtnAirApi()]
      const promises = [getAdRightBtnAirApi()]
      await fetchAdData(defaultPromises, promises)
        .then((adList: AdItem[]) => {
          AirAdList.value = adList
        })
        .catch((error) => {
          console.error(
            '🚀 ~ file: useHomeAdList.ts ~ getAirTransportAdList error:',
            error,
          )
        })

      await fetchAdData(
        [
          getAdDefaultRightTextLinkAirApi(),
          getAdDefaultRightTextLinkAirTwoApi(),
          getAdDefaultRightTextLinkAirThreeApi(),
        ],
        [
          getAdRightTextLinkAirApi(),
          getAdRightTextLinkAirTwoApi(),
          getAdRightTextLinkAirThreeApi(),
        ],
      )
        .then((adList: AdItem[]) => {
          AirTextAdList.value = adList.filter(
            (item) => !!item && Object.keys(item).length,
          )
        })
        .catch((error) => {
          console.error(
            '🚀 ~ file: useHomeAdList.ts ~ getAirTransportAdList 获取空运广告 右侧文字链 error: ',
            error,
          )
        })
    }
  }

  /**
   * 获取陆运广告
   */
  async function getLandTransportAdList() {
    if (!isClient) {
      const defaultPromises = [getDefaultAdRightBtnLandApi()]
      const promises = [getAdRightBtnLandApi()]
      await fetchAdData(defaultPromises, promises)
        .then((adList: AdItem[]) => {
          LandAdList.value = adList
        })
        .catch((error) => {
          console.error(
            '🚀 ~ file: useHomeAdList.ts ~ getLandTransportAdList error:',
            error,
          )
        })
    }
  }

  /**
   * 获取综合服务广告
   */
  async function getComprehensiveAdList() {
    if (!isClient) {
      const defaultPromises = [getDefaultAdRightBtnComprehensiveApi()]
      const promises = [getAdRightBtnComprehensiveApi()]
      await fetchAdData(defaultPromises, promises)
        .then((adList: AdItem[]) => {
          ComprehensiveAdList.value = adList
        })
        .catch((error) => {
          console.error(
            '🚀 ~ file: useHomeAdList.ts ~ getComprehensiveAdList error:',
            error,
          )
        })

      await fetchAdData(
        [
          getAdDefaultRightTextLinkComprehensiveApi(),
          getAdDefaultRightTextLinkComprehensiveTwoApi(),
          getAdDefaultRightTextLinkComprehensiveThreeApi(),
        ],
        [
          getAdRightTextLinkComprehensiveApi(),
          getAdRightTextLinkComprehensiveTwoApi(),
          getAdRightTextLinkComprehensiveThreeApi(),
        ],
      )
        .then((adList: AdItem[]) => {
          ComprehensiveTextAdList.value = adList.filter(
            (item) => !!item && Object.keys(item).length,
          )
        })
        .catch((error) => {
          console.error(
            '🚀 ~ file: useHomeAdList.ts ~ getComprehensiveAdList 获取综合服务广告 右侧文字链 error: ',
            error,
          )
        })
    }
  }

  /**
   * 获取三屏广告
   */
  async function getThreeScreenAdList() {
    await fetchAdData([getDefaultAdThreeScreenApi()], [getAdThreeScreenApi()])
      .then((adList: AdItem[]) => {
        ThreeScreenAdListLeft.value = adList.filter(
          (item) => Object.keys(item).length > 0,
        )
      })
      .catch((error) => {
        console.error(
          '🚀 ~ file: useHomeAdList.ts ~ getThreeScreenAdList left error:',
          error,
        )
      })
    await fetchAdData(
      [getDefaultAdThreeScreenRightBtnApi()],
      [getAdThreeScreenRightBtnApi()],
    )
      .then((adList: AdItem[]) => {
        ThreeScreenAdListRight.value = adList.filter(
          (item) => Object.keys(item).length > 0,
        )
      })
      .catch((error) => {
        console.error(
          '🚀 ~ file: useHomeAdList.ts ~ getThreeScreenAdList right error:',
          error,
        )
      })
  }

  /**
   * 获取浮动广告
   */
  async function getFloatAdList() {
    await getAdLeftFloatBtn()
    await getAdLeftFloatBtnSmall()
    await getAdRightFloatBtn()
    await getAdRightFloatBtnSmall()
  }

  /**
   * 获取广告
   */
  function getAdList() {
    getAdLeftBtnOne()
    getAdLeftBtnTwo()
    getAdLeftBtnThree()
    getAdRightBtnOne()
    getAdRightBtnTwo()
    getAdRightBtnThree()
    getAdRightBtnFour()
    getAdRightBtnFive()
    getAdMiddleOne()
    getAdMiddleTwo()
    getAdMiddleBtnOne()
    getAdMiddleBtnTwo()
    getAdMiddleBtnThree()
  }

  return {
    getAdLeftBtnOne,

    AdList,
    getAdList,

    FloatAdList,
    getFloatAdList,

    TopicAdList,
    getTopicAdList,

    ShipAdList,
    getSeaTransportAdList,

    AirAdList,
    AirTextAdList,
    getAirTransportAdList,

    LandAdList,
    getLandTransportAdList,

    ComprehensiveAdList,
    ComprehensiveTextAdList,
    getComprehensiveAdList,

    ThreeScreenAdListRight,
    ThreeScreenAdListLeft,
    getThreeScreenAdList,

    topFloatAdList,
    getHomeTopFloatAdList,
  }
}
