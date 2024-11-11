<template>
  <div class="container p-0">
    <BaseTitle title="海外代理" class="!leading-[25px] py-2" />

    <div class="w-full flex space-x-1.5">
      <div class="flex flex-col flex-1 space-y-1.5">
        <LinkShowCard
          v-for="(item, idx) in nameList"
          :key="item.name"
          :title="item.name"
          :link-list="item.dict"
          :class="idx === nameList.length - 1 ? 'flex-1' : ''"
        />
      </div>
      <div class="w-[281px] bg-white rounded p-2">
        <BaseTitle :show-tag="false" show-more title="热门商铺" />
        <div class="flex flex-col space-y-2 mt-2">
          <div v-for="item in 3" :key="item">
            <ShopElementsShopCard />
          </div>
        </div>
      </div>
      <div class="w-[246px] bg-white rounded p-2">
        <div class="flex flex-col space-y-2 mb-2">
          <p
            v-for="(item, idx) in 7"
            :key="item"
            class="flex items-center leading-4 cursor-pointer"
          >
            <span
              class="text-primary text-sm py-0.5 px-1 shrink-0 font-extrabold"
              >{{ idx + 1 }}.</span
            >
            <span class="ml-1 text-paper text-sm leading-[14px] truncate"
              >天津君和祥丰内贸集装天津君和祥丰内贸集装</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useDictStore } from '~/stores/dict'

  const { nameDict } = useDictStore()

  const nameList = computed(() => nameDict['overseas'])
</script>

<style></style>
