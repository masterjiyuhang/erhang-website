import { useUseRequest } from './../composables/useRequest'
// export const getAdDefaultApi = (id: number | string) => {
//   const config = useRuntimeConfig()
//   return useFetch<any>(
//     `${config.public.SAPI_DOMAIN}/collect/ad/default/${id}`,
//     {
//       server: true,
//       lazy: true,
//       timeout: 5000,
//     },
//   )
// }

export const getDefaultApi = (id: number | string) => {
  return useFetch<any>('/api/levelDefault?id=' + id)
}

const getLevel3AdApi = (id: number | string) => {
  return useFetch<any>('/api/level3Ad?id=' + id)
}

export function getLevel4AdApi(positionCode: string | number) {
  return useFetch<any>('/api/level4Ad?id=' + positionCode, {
    server: true,
  })
}

// 首页广告	首屏左按钮一 7435
export const getAdLeftBtnOneApi = () => {
  // return useFetch('/api/level4Ad?id=CLS-1-1003')
  return getLevel3AdApi(`CLS-1-1003`)
}

export const getDefaultAdLeftBtnOneApi = () => {
  return getDefaultApi('CLS-1-1003')
}

// 10104	首页广告	首屏左按钮二					CLS-1-1004
export const getAdLeftBtnTwoApi = () => {
  return getLevel3AdApi(`CLS-1-1004`)
}

export const getDefaultAdLeftBtnTwoApi = () => {
  return getDefaultApi('CLS-1-1004')
}

// 7229	首页广告	首屏左按钮三					CLS-1-1005
export const getAdLeftBtnThreeApi = () => {
  return getLevel3AdApi(`CLS-1-1005`)
}

export const getDefaultAdLeftBtnThreeApi = () => {
  return getDefaultApi('CLS-1-1005')
}

// 7436	首页广告	首屏中部半通栏一				CLS-1-1006
export const getAdMiddleOneApi = () => {
  return getLevel3AdApi(`CLS-1-1006`)
}

export const getDefaultAdMiddleOneApi = () => {
  return getDefaultApi('CLS-1-1006')
}

// 7231	首页广告	首屏中部半通栏					CLS-1-1011
export const getAdMiddleTwoApi = () => {
  return getLevel3AdApi(`CLS-1-1011`)
}

export const getDefaultAdMiddleTwoApi = () => {
  return getDefaultApi('CLS-1-1011')
}

// 7225	首页广告	首屏中部按钮一					CLS-1-1008
export const getAdMiddleBtnOneApi = () => {
  return getLevel3AdApi(`CLS-1-1008`)
}

export const getDefaultAdMiddleBtnOneApi = () => {
  return getDefaultApi('CLS-1-1008')
}

// 7226	首页广告	首屏中部按钮二					CLS-1-1009
export const getAdMiddleBtnTwoApi = () => {
  return getLevel3AdApi(`CLS-1-1009`)
}

export const getDefaultAdMiddleBtnTwoApi = () => {
  return getDefaultApi('CLS-1-1009')
}

// 7227	首页广告	首屏中部按钮三					CLS-1-1010
export const getAdMiddleBtnThreeApi = () => {
  return getLevel3AdApi(`CLS-1-1010`)
}

export const getDefaultAdMiddleBtnThreeApi = () => {
  return getDefaultApi('CLS-1-1010')
}

// 7437	首页广告	首屏右按钮一					CLS-1-1012
export const getAdRightBtnOneApi = () => {
  return getLevel3AdApi(`CLS-1-1012`)
}

export const getDefaultAdRightBtnOneApi = () => {
  return getDefaultApi('CLS-1-1012')
}

// 8561	首页广告	首屏右按钮二					CLS-1-1013
export const getAdRightBtnTwoApi = () => {
  return getLevel3AdApi(`CLS-1-1013`)
}
export const getDefaultAdRightBtnTwoApi = () => {
  return getDefaultApi('CLS-1-1013')
}

// 7463	首页广告	首屏右按钮三					CLS-1-1014
export const getAdRightBtnThreeApi = () => {
  return getLevel3AdApi(`CLS-1-1014`)
}
export const getDefaultAdRightBtnThreeApi = () => {
  return getDefaultApi('CLS-1-1014')
}

// 10105	首页广告	首屏右按钮四					CLS-1-1015
export const getAdRightBtnFourApi = () => {
  return getLevel3AdApi(`CLS-1-1015`)
}
export const getDefaultAdRightBtnFourApi = () => {
  return getDefaultApi('CLS-1-1015')
}

// 7230	首页广告	首屏右按钮五					CLS-1-1016
export const getAdRightBtnFiveApi = () => {
  return getLevel3AdApi(`CLS-1-1016`)
}
export const getDefaultAdRightBtnFiveApi = () => {
  return getDefaultApi('CLS-1-1016')
}

// 7284	首页广告	左浮标（大）					CLS-1-1018
export const getAdLeftFloatBtnApi = () => {
  return getLevel3AdApi(`CLS-1-1018`)
}
export const getDefaultAdLeftFloatBtnApi = () => {
  return getDefaultApi('CLS-1-1018')
}

// 10231	首页广告	左浮标（小）					CLS-1-1019
export const getAdLeftFloatBtnSmallApi = () => {
  return getLevel3AdApi('CLS-1-1019')
}
export const getDefaultAdLeftFloatBtnSmallApi = () => {
  return getDefaultApi('CLS-1-1019')
}

// 7285	首页广告	右浮标（大）					CLS-1-1020
export const getAdRightFloatBtnApi = () => {
  return getLevel3AdApi('CLS-1-1020')
}
export const getDefaultAdRightFloatBtnApi = () => {
  return getDefaultApi('CLS-1-1020')
}

// 10164	首页广告	右浮标（小）					CLS-1-1021
export const getAdRightFloatBtnSmallApi = () => {
  return getLevel3AdApi('CLS-1-1021')
}
export const getDefaultAdRightFloatBtnSmallApi = () => {
  return getDefaultApi('CLS-1-1021')
}

// 10106	首页广告	海运专区右按钮	海运专区右按钮1	CLS-1-1022-1022001
export const getAdRightBtnShipApi = () => {
  return getLevel4AdApi('CLS-1-1022-1022001')
}

export const getDefaultAdRightBtnShipApi = () => {
  return getDefaultApi('CLS-1-1022-1022001')
}

// 10107	首页广告	海运专区右按钮	海运专区右按钮2	CLS-1-1022-1022002
export const getAdRightBtnShipTwoApi = () => {
  return getLevel4AdApi('CLS-1-1022-1022002')
}
export const getDefaultAdRightBtnShipTwoApi = () => {
  return getDefaultApi('CLS-1-1022-1022002')
}

// 7253	首页广告	空运专区右按钮					CLS-1-1023
export const getAdRightBtnAirApi = () => {
  return getLevel3AdApi('CLS-1-1023')
}
export const getDefaultAdRIghtBtnAirApi = () => {
  return getDefaultApi('CLS-1-1023')
}

// 7256	首页广告	陆运专区右按钮					CLS-1-1024
export const getAdRightBtnLandApi = () => {
  return getLevel3AdApi('CLS-1-1024')
}
export const getDefaultAdRightBtnLandApi = () => {
  return getDefaultApi('CLS-1-1024')
}

// 7262	首页广告	综合服务专区右按钮				CLS-1-1025
export const getAdRightBtnComprehensiveApi = () => {
  return getLevel3AdApi('CLS-1-1025')
}
export const getDefaultAdRightBtnComprehensiveApi = () => {
  return getDefaultApi('CLS-1-1025')
}

// 7275	首页广告	三屏半通栏						CLS-1-1026
export const getAdThreeScreenApi = () => {
  return getLevel3AdApi('CLS-1-1026')
}
export const getDefaultAdThreeScreenApi = () => {
  return getDefaultApi('CLS-1-1026')
}

// 7276	首页广告	三屏右按钮						CLS-1-1027
export const getAdThreeScreenRightBtnApi = () => {
  return getLevel3AdApi('CLS-1-1027')
}
export const getDefaultAdThreeScreenRightBtnApi = () => {
  return getDefaultApi(`CLS-1-1027`)
}

/**
 * 获取航运企业公告
 * @returns
 */
export function getNewsMainTopHYGGApi() {
  const config = useRuntimeConfig()
  const { post } = useUseRequest()
  // return post<any>(
  //   `https://mock.erhang.fun/mock/649d33991d5a0a36692f05e2/erhang/api/Info/NewsMainTop`,
  // )
  return post<any>(`${config.public.NEWS_API_DOMAIN}/api/Info/NewsMainTopHYGG`)
}

/**
 * 获取今日焦点
 * @returns
 */
export function getNewsMainTopApi() {
  const config = useRuntimeConfig()
  const { post } = useUseRequest()
  return post<any>(`${config.public.NEWS_API_DOMAIN}/api/Info/NewsMainTop`)
}

// 首页文字链	空运-右侧文字链	空运-右侧文字链1			CLS-2-2001-2001001
export function getAdRightTextLinkAirApi() {
  return getLevel4AdApi('CLS-2-2001-2001001')
}
export function getAdDefaultRightTextLinkAirApi() {
  return getDefaultApi('CLS-2-2001-2001001')
}

// 首页文字链	空运-右侧文字链	空运-右侧文字链2  CLS-2-2001-2001002
export function getAdRightTextLinkAirTwoApi() {
  return getLevel4AdApi('CLS-2-2001-2001002')
}
export function getAdDefaultRightTextLinkAirTwoApi() {
  return getDefaultApi('CLS-2-2001-2001002')
}

// 首页文字链	空运-右侧文字链	空运-右侧文字链3  CLS-2-2001-2001003
export function getAdRightTextLinkAirThreeApi() {
  return getLevel4AdApi('CLS-2-2001-2001003')
}
export function getAdDefaultRightTextLinkAirThreeApi() {
  return getDefaultApi('CLS-2-2001-2001003')
}

// 首页文字链	综合服务-右侧文字链	综合服务-右侧文字链1	CLS-2-2002-2002001
export function getAdRightTextLinkComprehensiveApi() {
  return getLevel4AdApi('CLS-2-2002-2002001')
}
export function getAdDefaultRightTextLinkComprehensiveApi() {
  return getDefaultApi('CLS-2-2002-2002001')
}
// 首页文字链	综合服务-右侧文字链	综合服务-右侧文字链2	CLS-2-2002-2002002
export function getAdRightTextLinkComprehensiveTwoApi() {
  return getLevel4AdApi('CLS-2-2002-2002002')
}
export function getAdDefaultRightTextLinkComprehensiveTwoApi() {
  return getDefaultApi('CLS-2-2002-2002002')
}
// 首页文字链	综合服务-右侧文字链	综合服务-右侧文字链3	CLS-2-2002-2002003
export function getAdRightTextLinkComprehensiveThreeApi() {
  return getLevel4AdApi('CLS-2-2002-2002003')
}
export function getAdDefaultRightTextLinkComprehensiveThreeApi() {
  return getDefaultApi('CLS-2-2002-2002003')
}

/**
 * 获取首页最顶部 浮动一条 广告
 * @returns
 */
export const getAdFloatTopApi = () => {
  return getLevel3AdApi(`CLS-1-1028`)
}

export const getDefaultAdFloatTopApi = () => {
  return getDefaultApi('CLS-1-1028')
}

/**
 * 获取首页推荐货盘
 * @param data
 * @returns
 */
export const findPageListApi = () => {
  const { post } = useUseRequest()
  return post(`/fis/customer/freight/findPageList`, {
    current: 1,
    size: 3,
  })
}
