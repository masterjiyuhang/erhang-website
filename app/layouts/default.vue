<template>
  <div>
    <div
      ref="layoutRef"
      class="min-h-screen h-screen overflow-scroll flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <template v-if="!isLoginPage">
        <NavBar class="fixed shadow z-20 bg-white dark:bg-neutral-950" />
        <div class="mt-52">
          <main class="shadow">
            <slot />
          </main>
        </div>
        <TheFooter />
      </template>

      <template v-else>
        <slot />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const layoutRef = ref<HTMLElement | null>(null)

  const route = useRoute()

  const isLoginPage = computed(() => route.path.includes('/login'))
</script>

<style></style>
