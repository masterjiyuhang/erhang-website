<template>
  <div class="relative mx-auto z-0">
    <NuxtImg
      width="1400"
      height="800"
      class="object-cover w-full h-[420px] lg:h-[560px] xl:h-[640px]"
      src="/images/health.jpg"
      alt="Hero image"
      loading="eager"
      fetchpriority="high"
      preload
      placeholder
      placeholder-class="blur-xl"
    />
    <div
      class="container absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-l from-gray-200 md:bg-none p-8 mx-auto"
    >
      <h1
        class="text-primary-500 text-3xl font-bold md:mb-4 md:text-4xl lg:text-6xl"
      >
        Just landed.
      </h1>
      <h2 class="text-secondary-500 text-lg font-bold md:mb-4 lg:text-3xl">
        The New Year Collection
      </h2>
      <div class="max-w-sm mb-8 text-md font-light lg:max-w-md text-balance">
        <p class="text-tertiary-500">
          Our latest collection is here. Discover the latest trends and styles
          for the new year.
        </p>
      </div>
      <NuxtLinkLocale
        class="px-6 py-3 font-bold text-white bg-primary-500 rounded-xl hover:bg-primary-800"
        to="/products"
        >Shop now</NuxtLinkLocale
      >
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
