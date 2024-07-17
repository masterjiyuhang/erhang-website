import { defineStore } from 'pinia'

export const useGlobalStore = defineStore({
  id: 'globalStore',
  state: () => ({ count: 0, name: 'Cch' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
  persist: {
    key: 'globalStore',
  },
})
