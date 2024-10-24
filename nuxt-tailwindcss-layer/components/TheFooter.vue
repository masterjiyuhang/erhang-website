<script setup lang="ts">
  const iconList = ref([
    {
      href: 'https://www.facebook.com/vuedesigner',
      name: 'facebook',
      icon: 'i-logos-facebook',
    },
    {
      href: 'https://twitter.com/vuedesigner',
      name: 'twitter',
      icon: 'i-logos-twitter',
    },
    {
      href: 'https://discord.gg/BYp45Nnu5T',
      name: 'discord',
      icon: 'i-logos-discord-icon',
    },
    {
      href: 'https://www.youtube.com/@vuedesigner',
      name: 'youtube',
      icon: 'i-logos-youtube-icon',
    },
  ])

  const generalList = ref([
    {
      label: 'footer.general.FAQ',
      path: '/',
    },
    {
      label: 'footer.general.News',
      path: '/',
    },
    {
      label: 'footer.general.Careers',
      path: '/',
    },
    {
      label: 'footer.general.Contact',
      path: '/',
    },
  ])

  const linksList = ref([
    {
      label: 'footer.links.Nav',
      path: '/nav-menu',
    },
    {
      label: 'footer.links.Adopt',
      path: '/adopt',
    },
    {
      label: 'footer.links.QuickStart',
      path: '/quick-start',
    },
    {
      label: 'footer.links.Member',
      path: '/member',
    },
    {
      label: 'footer.links.Blog',
      path: '/blog',
    },
    {
      label: 'footer.links.Tools',
      path: '/tools',
    },
    {
      label: 'footer.links.Mission',
      path: '/mission',
    },
  ])

  const imgList = ref([
    {
      path: '/images/cat/cat1.png',
    },
    {
      path: '/images/cat/cat2.png',
    },
    {
      path: '/images/cat/cat3.png',
    },
    {
      path: '/images/cat/cat4.png',
    },
    {
      path: '/images/cat/cat5.png',
    },
    {
      path: '/images/cat/cat6.png',
    },
  ])
</script>

<template>
  <footer class="pb-24 pt-12">
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap relative">
        <div
          class="mx-auto flex flex-col flex-wrap items-center px-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start lg:w-1/3"
        >
          <TheLogo class="text-primary-600" />

          <p class="my-2 text-center w-full lg:text-left">
            {{ $t('global.description') }}
          </p>
          <LangSwitcher />
          <div class="inline-flex mt-6 space-x-3">
            <div class="flex flex-wrap space-x-4">
              <NuxtLinkLocale
                v-for="item in iconList"
                :key="item.name"
                :href="item.href"
                :aria-label="item.name"
                external
                target="_blank"
              >
                <BaseIcon :name="item.icon" class="text-2xl" width="28px" />
              </NuxtLinkLocale>
            </div>
          </div>
          <div class="my-6 text-center flex flex-col">
            <NuxtLinkLocale to="/">+86 15555558888</NuxtLinkLocale>
            <NuxtLinkLocale to="/">hello@fantico.com</NuxtLinkLocale>
          </div>
        </div>
        <div
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start"
        >
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            {{ $t('footer.general.title') }}
          </h2>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li v-for="item in generalList" :key="item.label" class="mb-4">
              <NuxtLinkLocale
                :to="item.path"
                class="hover:text-primary-600 dark:text-primary-200"
                >{{ $t(item.label) }}</NuxtLinkLocale
              >
            </li>
          </ul>
        </div>
        <div
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start"
        >
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            {{ $t('footer.links.title') }}
          </h2>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li v-for="item in linksList" :key="item.label" class="mb-4">
              <NuxtLinkLocale
                :to="item.path"
                class="hover:text-primary-600 dark:text-primary-200"
                >{{ $t(item.label) }}</NuxtLinkLocale
              >
            </li>
          </ul>
        </div>
        <div class="flex flex-col items-center p-4 w-full md:w-1/3">
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            {{ $t('footer.Gallery.title') }}
          </h2>
          <div class="-mx-2 flex flex-wrap items-center lg:mt-2">
            <div
              v-for="(item, index) in imgList"
              :key="index"
              class="p-2 w-1/2 sm:w-4/12"
            >
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg :src="item.path" class="w-full" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col sm:w-full md:items-end">
          <div class="mb-4 opacity-25" />
          <p class="py-1 text-sm sm:text-center">
            &copy; 2022 - 2024. All Rights Reserved - ErHang is the King
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
