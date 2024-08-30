<template>
  <div>
    <div
      ref="layoutRef"
      class="min-h-screen h-screen overflow-scroll flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <NavBar class="fixed shadow z-20 bg-white dark:bg-neutral-950" />
      <div class="mt-52">
        <main class="shadow">
          <slot />
        </main>
      </div>
      <TheFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const layoutRef = ref<HTMLElement | null>(null)

  const { x, y } = useScroll(layoutRef)
  // console.log('🚀 ~ file: default.vue:22 ~ x, y:', x, y)
</script>

<style></style>
