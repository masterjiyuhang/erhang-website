import { defineStore } from 'pinia'

export const useGlobalStore = defineStore({
  id: 'globalStore',
  state: () => ({
    count: 0,
    name: 'Cch',
    EvaluationIcon: [],
    food: [],
    fruit: [],
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
    peopleIcons: (state) => state.EvaluationIcon,
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
