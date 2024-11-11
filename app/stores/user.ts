import { defineStore } from 'pinia'
import {
  getCompanyInfoApi,
  getJoinCompanyApi,
  getPermsApi,
  getUserCompanyInfoApi,
  getUserInfoApi,
  toOpenCcCenterApi,
} from '~/api/system'
import { isDev } from '~/utils'
import type { UserCompanyInfoResponse, BaseResponseType } from '~~/types'

export const useMyUserStore = defineStore({
  id: 'myUserStore',
  state: () => ({
    userId: null,
    userInfo: null,
    userIsMain: null,
    userNameCn: null,
    userNameEn: null,

    compVips: [],
    compInfo: null,
    compStatus: null,
    companyNameCn: null,
    companyNameEn: null,

    tradeFlag: false, //  用户交易权限true有；false没有（默认没登陆的时候没有交易权限）
    shopStatus: null,
    settleStatus: null, // 入驻状态 0 初始， 1 入驻中， 2 已驳回， 3 已入驻
    auditFlag: null, // 商铺审核状态 0 正常， 1 新建待审核， 2 信息异常 人工复审驳回
    isShopCustomerService: false, // 是否为商铺指定客服
    compId: null, // 当前登陆用户公司ID

    joinCompanyInfo: null, // 加入公司待审核信息
    defaultUserLogo:
      'https://resources.jctrans.com/res/account/pc/img/default_avator.png',
  }),
  getters: {
    currentUserId: (state) => {
      return state.userId
    },
  },
  actions: {
    /**
     * 重置用户状态
     *
     * 此方法用于将用户的ID和信息重置为null，以便注销用户或清理用户状态
     */
    resetUser() {
      this.userId = null
      this.userInfo = null
    },

    /**
     * 重置用户和公司信息字段
     * */
    resetUserCompInfo() {
      this.userId = null
      this.userInfo = null
      this.userNameCn = null
      this.userNameEn = null
      this.userIsMain = null

      this.compVips = null
      this.compInfo = null
      this.companyNameCn = null
      this.companyNameEn = null
      this.compStatus = null

      this.tradeFlag = false
      this.shopStatus = null
      this.settleStatus = null
      this.auditFlag = null
    },

    /**
     * 获取用户和公司信息
     * 此函数根据用户ID获取最新的用户和公司信息
     * 它会检查是否需要强制刷新公司信息
     *
     * @param compInfoRefreshFlag - 是否强制刷新公司信息，默认为false
     */
    async getUserCompanyInfo(compInfoRefreshFlag = false) {
      let needRetryComp = true
      let needRetryUser = true

      // 如果没有用户id，则直接走默认请求流程
      if (!this.userId) {
        needRetryComp = false
        needRetryUser = false

        getUserCompanyInfoApi()
          .then((res: UserCompanyInfoResponse) => {
            const { data } = res
            // 更新用户信息
            this.userId = data.account.userId
            this.userInfo = data.account
            this.userIsMain = data.account.isMain

            this.userNameCn = data.account.nameCn
            this.userNameEn = data.account.nameEn

            // 如果数据中包含公司信息，则同时更新公司信息
            if (data.company) {
              this.compVips = data.company.compVips

              this.compInfo = data.company ?? {}
              this.compStatus = data.company.status
              this.companyNameCn = data.company.nameCn
              this.companyNameEn = data.company.nameEn
            }
          })
          .catch((err) => {
            console.error('获取用户和公司信息时出错:', err)
          })
      }

      // 如果需要重试获取公司信息
      if (needRetryComp) {
        let params
        // 如果设置了强制刷新公司信息标志，则传空参数强制请求
        if (compInfoRefreshFlag) {
          params = {}
        }
        // 如果当前用户已有公司信息，则基于现有信息请求更新
        else if (this.compInfo) {
          params = {
            id: this.compInfo.compId,
            version: this.compInfo.version,
          }
        }
        // 如果既没有公司信息又没有强制刷新标志，则不执行任何操作
        else {
          return
        }
        getCompanyInfoApi(params).then((res: BaseResponseType) => {
          const { data, subcode } = res
          // 根据返回的子码处理不同的情况
          if (subcode === 'UPDATED') {
            // 公司信息已更新
            this.compVips = data.compVips
            this.compInfo = data
            this.compStatus = data.status
            this.companyNameCn = data.nameCn ?? ''
            this.companyNameEn = data.nameEn ?? ''
          }
          if (subcode === 'UNCHANGED') {
            // 公司信息未变更
            this.compInfo = { ...this.compInfo, ...data }
          }
          if (subcode === 'NOTFOUND') {
            // 未找到公司信息
            this.compVips = null
            this.compInfo = null
            this.compStatus = null
            this.companyNameCn = null
            this.companyNameEn = null
          }
        })
      }

      // 如果需要重试获取用户信息
      if (needRetryUser) {
        getUserInfoApi({
          id: this.userId,
          version: this.userInfo.version,
        }).then(({ data, subcode }: BaseResponseType) => {
          // 根据返回的子码处理不同的情况
          if (subcode === 'UPDATED') {
            // 用户信息已更新
            this.userId = data.userId
            this.userInfo = data
            this.userIsMain = data.isMain
            this.userNameCn = data.nameCn
            this.userNameEn = data.nameEn
          }
          if (subcode === 'UNCHANGED') {
            // 用户信息未变更
            this.userIsMain = data.isMain
            this.userInfo = {
              ...this.userInfo,
              ...data,
            }
          }
        })
      }
    },

    /**
     * 异步获取权限信息
     *
     * 此方法旨在根据当前环境（开发或生产）来获取相应的权限信息
     * 在开发环境中直接返回一组固定的数据，用于模拟权限信息
     * 在生产环境中，则通过调用后端接口来获取实际的权限信息
     */
    async getPermsInfo() {
      let data = null
      // 在开发环境中，直接返回模拟的权限信息
      if (isDev()) {
        data = {
          compId: 5006000,
          shopStatus: '0',
          settleStatus: '3',
          auditFlag: '0',
          trxFlag: '1',
        }
      } else {
        // 在生产环境中，通过调用接口获取权限信息
        const res: any = await getPermsApi()
        data = JSON.parse(res?.data || '{}')

        // 解析数据并更新当前对象的状态
        this.tradeFlag = data.trxFlag === '1'
        this.shopStatus = data.shopStatus
        this.auditFlag = data.auditFlag
        this.settleStatus = data.settleStatus
        this.compId = data.compId

        // 验证用户是否为商铺指定客服
        if (this.compId) {
          await toOpenCcCenterApi({ compId: this.compId }).then((res: any) => {
            const flag = res?.code === 0 && res.data === true
            this.isShopCustomerService = flag
          })
        }
      }
    },

    // 获取是否加入公司待审核状态
    getJoinCompanyAudit() {
      return new Promise((resolve, reject) => {
        getJoinCompanyApi()
          .then((res: any) => {
            this.joinCompanyInfo = res.data
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },

  persist: {
    storage: persistedState.localStorage,
  },
})
