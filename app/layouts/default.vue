<template>
  <div>
    <div
      ref="layoutRef"
      class="default-layout min-h-screen h-screen overflow-scroll flex flex-col bg-[#f5f5f5] dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <template v-if="!isLoginPage">
        <MenuBar
          :scroll-y="y"
          :is-scroll-up="isScrollIngUp"
          :arrived-state="arrivedState"
        />
        <div class="mt-[136px]">
          <main class="shadow">
            <slot />
          </main>
        </div>
        <TheFooter />
      </template>

      <template v-else>
        <slot />
      </template>

      <BackTop :show-back-top="showBackToTop" @back-top="() => (y = 0)" />

      <!-- 全局加入我们弹窗 -->
      <JoinUsDialog />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useScroll } from '@vueuse/core'

  const layoutRef = ref<HTMLElement | null>(null)
  const lastScrollTop = ref(0)
  const isScrollIngUp = ref(false)

  const route = useRoute()

  const isLoginPage = computed(() => route.path.includes('/login'))

  const { x, y, isScrolling, arrivedState, directions } = useScroll(layoutRef)

  const showBackToTop = computed(() => y.value > 300)
  watch(
    () => y.value,
    (val) => {
      if (val > lastScrollTop.value) {
        isScrollIngUp.value = false
      } else {
        isScrollIngUp.value = true
      }
      lastScrollTop.value = val // 更新上一次滚动的位置
    },
  )
  onMounted(() => {
    // const { $JCIM } = useNuxtApp()
    // const config = useRuntimeConfig().public
    // $JCIM?.init({
    //   targetUrl: `${config.JCIM_DOMAIN}/im?appId=HZH&tk=${getToken() ? getToken() : ''}&dt=${Date.now()}`,
    //   token: getToken() ? getToken() : '',
    //   appId: 'HZH',
    //   lang: 'zh-CN',
    // })
  })
</script>

<style lang="scss" scoped></style>
