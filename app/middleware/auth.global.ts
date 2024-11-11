import { isClient } from '@vueuse/core'
import type { RouteLocationNormalizedGeneric } from 'vue-router'
import { reportApi } from '~/api/system'
import { go2LoginPage, setClientId } from '~/utils/auth'

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log(
    'running global auth middleware.',
    import.meta.server,
    import.meta.client,
    to.fullPath,
  )

  if (isClient) {
    // 设置浏览器指纹
    await setClientId()
    // 设置整合营销推广projectId
    setProjectId(to)

    await setExchange(to)
    console.log(
      '🚀 ~ file: auth.global.ts:20 ~ defineNuxtRouteMiddleware ~ to:',
      to,
    )

    try {
      reportApi(
        {
          fromCode: from.meta?.name || null,
          status: 'OK',
          eventCode: getAppId() + '.PAGE_INFO',
          extensions: {
            ZWZ_FROM_PAGE_PARAMS: {},
            ZWZ_TO_PAGE_PARAMS: {},
          },
        },
        {
          'operation-timestamp': new Date().getTime(), // 客户端的当前时间的时间戳
          'operation-stay': 0,
          'operation-type': 'EVENT',
          'page-code': to.meta.name?.toUpperCase()
            ? `ZWZ.UC.` + to.meta.name?.toUpperCase()
            : 'PAGE-CODE-IS-NULL',
        },
      )
    } catch (error) {
      throw createError(error)
    }
  } else {
    // 在服务端，构造完整的 URL
    const proto = useRequestHeaders(['x-forwarded-proto'])
    const protocol = proto['x-forwarded-proto'] || 'http'
    const host = useRequestHeaders(['host']).host
    const fullUrl = `${protocol}://${host}${to.fullPath}`

    console.log(
      '🚀 ~ file: auth.global.ts:58 ~ defineNuxtRouteMiddleware ~ fullUrl 完整请求路径:',
      fullUrl,
    )
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
    })
      .then(async () => {
        // 必须要删除exchange 才行 否则会一直重定向会login页面
        // const newQuery = omit(route.query, ['exchange'])
        console.log(
          '🚀 ~ file: auth.global.ts:42 ~ setExchange ~ route.path:',
          route.path,
          route.query,
          'window',
          window.location,
        )

        // 获取当前的 URL
        const currentUrl = window.location.href

        // 创建 URL 对象
        const url = new URL(currentUrl)

        // 删除 exchange 参数
        url.searchParams.delete('exchange')

        // 进行重定向
        window.location.href = url.href
        await nextTick()
      })
      .catch((err) => {
        console.log(
          '🚀 ~ file: auth.global.ts:105 ~ setAuthExchange ~ err:',
          err,
        )
      })
  }
  // 如果没有exchange了 判断是否有token
  else if (getToken()) {
    const newQuery = omit(route.query, ['exchange', 'prjId'])
    try {
      await getUserCompanyInfo()
      getPermsInfo()
      return useNuxtApp().runWithContext(() => {
        return navigateTo({
          path: route.path,
          query: newQuery,
          replace: true,
          force: true,
        })
      })
    } catch (error) {
      console.error(
        '❌ ~ file: auth.global.ts:39 ~ setExchange ~ 获取用户信息失败:',
        error,
      )

      if (route.meta.needToken) {
        logout().then(() => {
          const localePath = useLocalePath()
          // navigateTo(localePath('/'))
          return useNuxtApp().runWithContext(() => {
            return navigateTo('/')
          })
        })
      } else {
        try {
          return useNuxtApp().runWithContext(() => {
            return navigateTo({
              path: route.path,
              query: newQuery,
              replace: true,
              force: true,
            })
          })
        } catch (error) {
          console.log('奇奇怪怪的错误又出现了', error)
          useNuxtApp().runWithContext(() => {
            return navigateTo({
              path: route.path,
              query: newQuery,
              replace: true,
              force: true,
            })
          })
        }
      }
    } finally {
      if (!compInfo?.compId) {
        getJoinCompanyAudit().catch((err) => {
          console.log(
            '🚀 ~ file: auth.global.ts:161 ~ setExchange ~ 获取用户加入公司审核状态失败:',
            err,
          )
        })
      }
    }
  }
  // 没有token也没有exchange还不是白名单时， 跳转到passport登录页 取exchange去
  else if (route.meta.needToken) {
    go2LoginPage()
  }
  // 如果处于白名单中 放行 但需要清除登录信息
  else {
    resetUserCompInfo()
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
