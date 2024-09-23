<template>
  <div>
    <div
      ref="layoutRef"
      class="min-h-screen h-screen overflow-scroll flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <template v-if="!isLoginPage">
        <MenuBar :scroll-y="y" :arrived-state="arrivedState" />
        <div class="mt-52">
          <h1>{{ y }}</h1>
          {{ isScrolling }}
          {{ arrivedState }}
          {{ directions }}
          <main class="shadow">
            <slot />
          </main>
        </div>
        <TheFooter />
      </template>

      <template v-else>
        <slot />
      </template>

      <!-- 全局加入我们弹窗 -->
      <JoinUsDialog />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useScroll } from '@vueuse/core'

  const layoutRef = ref<HTMLElement | null>(null)

  const route = useRoute()

  const isLoginPage = computed(() => route.path.includes('/login'))

  const { x, y, isScrolling, arrivedState, directions } = useScroll(layoutRef)
</script>

<style></style>
