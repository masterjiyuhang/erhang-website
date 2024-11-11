import { defineStore } from 'pinia'

export const useMySystemStore = defineStore({
  id: 'mySystemStore',
  state: () => ({
    appId: getAppId(),
  }),
  getters: {
    appid: (state) => {
      return state.appId
    },
  },
  actions: {},
})
