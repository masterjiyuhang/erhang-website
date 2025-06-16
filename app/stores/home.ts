import { defineStore } from 'pinia'

export const useMyHomeStore = defineStore({
  id: 'myHomeStore',
  state: () => ({
    seaTransportPriceList: [],
    airTransportPriceList: [],
    landTransportPriceList: [],
    comprehensiveTransportPriceList: [],
  }),
  actions: {
    getHomePagesNewsPrice() {
      const { public: pb } = useRuntimeConfig()
      useFetch('/hzh/fr/freightPrice/getHomePageNewestPrice', {
        method: 'post',
        baseURL: pb.PROD_CLIENT_PROXY_API,
        lazy: true,
        server: true,
        timeout: 500,
      }).then((res: any) => {
        console.log('🚀 ~ file: home.ts:21 ~ getHomePagesNewsPrice ~ res:', res)
        const r1 = res.data.value.data.records.filter(
          (item: any) => item.freightType === '1',
        )
        if (r1 && r1.length) {
          this.seaTransportPriceList = r1[0].homePagePriceVoList
        }
        const r2 = res.data.value.data.records.filter(
          (item: any) => item.freightType === '2',
        )
        if (r2 && r2.length) {
          this.airTransportPriceList = r2[0].homePagePriceVoList
        }
        const r3 = res.data.value.data.records.filter(
          (item: any) => item.freightType === '3',
        )
        if (r3 && r3.length) {
          this.landTransportPriceList = r3[0].homePagePriceVoList
        }
        const r4 = res.data.value.data.records.filter(
          (item: any) => item.freightType === '4',
        )
        if (r4 && r4.length) {
          this.comprehensiveTransportPriceList = r4[0].homePagePriceVoList
        }
      })
    },
  },
})
