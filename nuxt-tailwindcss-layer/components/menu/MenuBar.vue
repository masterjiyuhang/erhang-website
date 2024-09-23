<template>
  <div
    class="min-w-full sm:px-0 flex flex-col bg-tertiary-100 text-black fixed z-50 transition-all duration-700 ease-in-out"
    :style="{
      top: isScroll ? '-48px' : '0',
    }"
  >
    <div class="flex flex-1 font-bold h-24 items-center justify-between">
      <TopMenuBar />
    </div>
    <div><BottomMenuBar />{{ isScroll }}</div>
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

<style></style>
