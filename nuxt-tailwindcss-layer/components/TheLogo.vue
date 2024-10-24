<script setup lang="ts">
  import site from '~~/site'

  const { name, logo } = site
</script>

<template>
  <NuxtLinkLocale
    data-pg-name="Logo"
    class="flex items-center sm:flex-row"
    to="/"
  >
    <BaseIcon height="40" :name="logo" />
    <h6
      class="text-inherit dark:text-primary-200 font-extrabold font-serif ml-2 truncate w-3 text-xs sm:w-48 sm:text-2xl"
    >
      {{ name }}
    </h6>
  </NuxtLinkLocale>
</template>

<style scoped></style>
