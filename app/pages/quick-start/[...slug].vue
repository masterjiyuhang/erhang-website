<template>
  <div>
    <TheHeader>
      <div>
        <div class="flex items-center">
          <h2 class="text-5xl font-semibold">Quick Start</h2>
        </div>
        <div class="flex items-center mt-4">
          <h6>Github</h6>
          <BaseButton
            size="xs"
            class="ml-2"
            color="secondary"
            :to="'https://www.baidu.com'"
            target="_blank"
          >
            <span>Click here</span></BaseButton
          >
        </div>
        <slot />
      </div>
    </TheHeader>
    <section class="container mx-auto">
      <div class="px-10 w-full">
        <div class="flex flex-col rounded-lg">
          <article class="xl:divide-gray-200">
            <div class="divide-gray-200">
              <div class="dark:divide-gray-700">
                <StaticMarkdown :path="slug" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    name: 'quick-start',
    title: 'Quick Start',
    description: `Start Strong, Start Fast: Your Guide to Building a Strong and Fast Web Application with Vue.js and Nuxt.js`,
    navOrder: '3',
    type: 'secondary',
    icon: 'i-mdi-home',
  })
  const slug =
    useRoute().params.slug.toString().replace(/,/g, '/') ||
    useRoute().name.toString().replace(/,/g, '/')
</script>

<style></style>
