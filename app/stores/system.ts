import { defineStore } from 'pinia'
import { authExchangeApi, logoutApi } from '~/api/system'

export const useMySystemStore = defineStore({
  id: 'mySystemStore',
  state: () => ({
    appId: getAppId(),
    token: getToken(),
    regChannel: '',
  }),
  getters: {
    appid: (state) => {
      return state.appId
    },
  },
  actions: {
    async setAuthExchange(data) {
      try {
        const res: any = await authExchangeApi(data)

        setToken(res.data?.accessToken)
        setExpiresIn(res.data?.expireIn)
        this.token = res.data?.accessToken
        this.regChannel = res.data?.regChannel
        // 加这个逻辑是为了防止他在其他站退出，回来之后刷新页面无法同步刷新账号信息
        const { resetUser } = useMyUserStore()
        resetUser()

        if (res.data?.refreshToken) {
          const newTimestamp = new Date().getTime() + res.data?.expireIn * 1000
          setRefreshToken(res.data?.refreshToken)
          setExpiresTimeIn(newTimestamp)
        }
      } catch (error) {
        throw new Error(error + '获取exchange信息失败')
      }
    },

    async logout() {
      await logoutApi()
      const { resetUser } = useMyUserStore()
      this.token = ''
      removeToken()
      resetUser()
    },
  },
})
