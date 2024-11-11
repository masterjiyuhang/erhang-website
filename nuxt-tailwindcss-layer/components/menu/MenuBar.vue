<template>
  <div
    ref="menuBarRef"
    class="min-w-full sm:px-0 flex flex-col fixed z-50 transition-all duration-700 ease-in-out menu-header"
    :style="{
      top: isScroll ? (isScrollUp ? '0' : '-88px') : '0',
      backgroundColor: isTop ? 'transparent' : '#f5f5f5',
    }"
  >
    <ClientOnly>
      <BaseImg
        :link="topFloatAdList[0]?.link"
        :img-url="topFloatAdList[0]?.image"
        :title="topFloatAdList[0]?.title"
        class="h-10 bg-white object-cover"
      />
    </ClientOnly>
    <!-- <div class="h-10 bg-white">
      {{ topFloatAdList }}
    </div> -->

    <div class="h-12 py-2 flex font-bold items-center justify-between">
      <TopMenuBar :is-white="!isScroll && isWhite" />
    </div>
    <div class="container h-12 px-0">
      <BottomMenuBar @change="changeColor" @change-color="changeColor" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import TopMenuBar from './TopMenuBar.vue'
  import BottomMenuBar from './BottomMenuBar.vue'
  import { useCssVar } from '@vueuse/core'

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
  const menuBarRef = ref(null)
  const color = useCssVar('--menu-item-active-color', menuBarRef)
  const itemColor = useCssVar('--menu-item-color', menuBarRef)

  const isScroll = computed(() => props.scrollY > 0)
  const isTop = computed(() => props.arrivedState.top)

  const route = useRoute()
  const isWhite = computed<boolean>(() => {
    return !!route.meta.isWhite
  })

  /**
   * 设置激活menu样式
   * @param s color颜色
   */
  function changeColor(s: string) {
    color.value = s
  }

  watch(
    () => [isWhite.value, isScroll.value, isTop.value],
    ([isWhiteVal, isScrollVal, isTopVal]) => {
      // console.log(
      // '🚀 ~ file: MenuBar.vue:68 ~ isWhiteVal, isScrollVal, isTopVal:',
      // isWhiteVal,
      // isScrollVal,
      // isTopVal,
      // )
      // 如果处于顶部 通过路由meta信息判断颜色
      if (isTopVal) {
        itemColor.value = isWhiteVal ? '#fff' : '#333'
      } else {
        // 如果不处于顶部的话 通过页面是否滚动判断颜色
        itemColor.value = isScrollVal ? '#333' : '#fff'
      }
    },
    {
      immediate: true,
    },
  )

  const { topFloatAdList, getHomeTopFloatAdList } = useHomeAdList()

  getHomeTopFloatAdList()
</script>

<style lang="scss" scoped>
  // .menu-header {
  //   // --menu-item-color: #eee;
  //   // --menu-item-active-color: transparent;
  // }
</style>
