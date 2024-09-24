<template>
  <div class="home-search">
    <div class="pt-32 container">
      <div class="flex">
        <div
          class="flex items-center justify-around h-11 mb-4 p-1 rounded opacity-100 bg-home-search"
        >
          <div
            v-for="item in SEARCH_TYPE_LIST"
            :key="item.value"
            class="flex items-center h-full py-1.5 px-4 text-white font-[Poppins-M] text-base font-medium leading-5 cursor-pointer focus:text-[#232324] focus:transition-all focus:duration-300 ease-in-out"
            :class="
              currentSearchType === item.value
                ? [`bg-[#fff]`, `!text-[#232324]`, `rounded`]
                : []
            "
            @click="() => (currentSearchType = item.value)"
          >
            <span class="text-base">{{ item.label }}</span>
          </div>
        </div>
        <div class="flex items-center ml-6">
          <div class="text-white">发布询盘</div>
          <NuxtImg
            src="/icons/icon_more_slope_basic.svg"
            width="16"
            height="16"
            alt="More"
            loading="lazy"
          />
        </div>
      </div>

      <template v-if="currentSearchType === 'rate'">
        <HomeSearchCompsRateSearchBox />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { SEARCH_TYPE_LIST } from './constant'

  const currentSearchType = ref('rate')
</script>

<style lang="scss" scoped>
  .home-search {
    background: url('https://resources.jctrans.com/res/hzh/pc/img/banner@2x.png');
    background-size: cover;
    background-position: center;
    height: 325px;
    top: -96px;
    position: relative;
  }
</style>
