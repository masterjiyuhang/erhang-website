import { isClient } from '@vueuse/core'
import type { RouteLocationNormalizedGeneric } from 'vue-router'

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log('running global auth middleware.')

  if (isClient) {
    // 设置浏览器指纹
    await setClientId()
    // 设置整合营销推广projectId
    setProjectId(to)

    setExchange(to)
  }
})
const setExchange = async (route: RouteLocationNormalizedGeneric) => {
  const exchangeStr = route.query?.exchange
  const { setAuthExchange, logout } = useMySystemStore()
  const {
    getUserCompanyInfo,
    getPermsInfo,
    getJoinCompanyAudit,
    compInfo,
    resetUserCompInfo,
  } = useMyUserStore()

  // 先判断有没有exchange 有的话 通过exchange取回token 用于放到请求的header中请求用户信息
  if (exchangeStr) {
    const exchange = exchangeStr as string
    setAuthExchange({
      code: exchange,
    }).then(() => {
      // 必须要删除exchange 才行 否则会一直重定向会login页面
      const newQuery = omit(route.query, ['exchange'])
      navigateTo({ path: route.path, query: newQuery, replace: true })
    })
  }
  // 如果没有exchange了 判断是否有token
  else if (getToken()) {
    const newQuery = omit(route.query, ['exchange', 'prjId'])
    try {
      await getUserCompanyInfo()
      getPermsInfo()

      navigateTo({ path: route.path, query: newQuery })
    } catch (error) {
      console.error(
        '❌ ~ file: auth.global.ts:39 ~ setExchange ~ 获取用户信息失败:',
        error,
      )

      if (route.meta.needToken) {
        logout().then(() => {
          const localePath = useLocalePath()
          navigateTo(localePath('/'))
        })
      } else {
        navigateTo({ path: route.path, query: newQuery })
      }
    } finally {
      // if (!compInfo?.compId) {
      //   getJoinCompanyAudit()
      // }
    }
  }
  // 没有token也没有exchange还不是白名单时， 跳转到passport登录页 取exchange去
  else if (route.meta.needToken) {
    go2LoginPage()
  }
  // 如果处于白名单中 放行 但需要清除登录信息
  else {
    resetUserCompInfo()
    console.log(
      '🚀 ~ file: auth.global.ts:68 ~ setExchange ~ 路由处于白名单，清除用户信息并放行:',
      route,
    )
  }
}
/**
 * 这个prjId是整合营销做浏览器推广用的 有就取出来加上 没有就拉倒 不用管
 * @param {*} route
 */
const setProjectId = (route) => {
  if (isClient) {
    const prjId = route?.query?.prjId || ''
    if (!_isEmpty(prjId)) {
      sessionStorage.setItem('prjId', prjId)
      delete route.query.prjId
    }
  }
}
