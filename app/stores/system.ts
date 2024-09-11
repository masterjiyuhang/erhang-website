import { defineStore } from 'pinia'
import { authExchangeApi, logoutApi } from '~/api/system'
import { useMyUserStore } from './user'

export const useMySystemStore = defineStore({
  id: 'mySystemStore',
  state: () => ({
    appId: 'ERA',
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
      console.log('🚀 ~ file: system.ts:16 ~ setAuthExchange ~ data:', data)
      try {
        const res: any = await authExchangeApi(data)

        //   {
        //     "msg": "succeed",
        //     "code": 0,
        //     "data": {
        //         "accessToken": "642d4e846c14436bb8be9919fc6dd7ce",
        //         "expireIn": 86394,
        //         "refreshToken": "4841e8dfbccd48d4ba631413d3057759",
        //         "refreshTokenExpireIn": 86394
        //     }
        // }
        console.log('🚀 ~ file: system.ts:17 ~ setAuthExchange ~ res:', res)

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
      const res = await logoutApi()
      console.log('🚀 ~ file: system.ts:26 ~ logout ~ res:', res)
      const { resetUser } = useMyUserStore()
      this.token = ''
      removeToken()
      resetUser()
    },
  },
})
