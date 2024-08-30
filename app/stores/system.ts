import { defineStore } from 'pinia'

export const useMySystemStore = defineStore({
  id: 'mySystemStore',
  state: () => ({
    appId: 'ERA',
  }),
  getters: {
    appid: (state) => {
      return state.appId
    },
  },
  actions: {},
})
