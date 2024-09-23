<template>
  <div
    class="min-w-full sm:px-0 flex flex-col text-white fixed z-50 transition-all duration-700 ease-in-out menu-header"
    :style="{
      top: isScroll ? (isScrollUp ? '0' : '-48px') : '0',
    }"
  >
    <div class="h-12 py-2 flex font-bold items-center justify-between">
      <TopMenuBar :is-white="!isScroll" />
    </div>
    <div class="container h-12">
      <BottomMenuBar />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import TopMenuBar from './TopMenuBar.vue'
  import BottomMenuBar from './BottomMenuBar.vue'

  const props = defineProps({
    scrollY: {
      type: Number,
      default: 0,
    },
    isScrollUp: {
      type: Boolean,
      default: false,
    },
    arrivedState: {
      type: Object,
      default: () => {
        return {
          top: false,
          bottom: false,
          left: false,
          right: false,
        }
      },
    },
  })

  const isScroll = computed(() => props.scrollY > 48)

  const isTop = computed(() => props.arrivedState.top)
</script>

<style lang="scss" scoped>
  .menu-header {
    background-color: transparent;
  }
</style>
