<template>
  <div class="container p-0">
    <BaseTitle :title="'空运'" class="!leading-[25px] py-2" />

    <div class="w-full flex space-x-1.5">
      <div class="flex flex-col flex-1 space-y-1.5">
        <LinkShowCard
          v-for="(item, idx) in nameList"
          :key="item.name"
          :title="item.name"
          :link-list="item.dict"
          :class="idx === nameList.length - 1 ? 'flex-1' : ''"
        >
        </LinkShowCard>
      </div>
      <div class="w-[281px] bg-white rounded p-2">
        <BaseTitle :show-tag="false" show-more title="热门运价" />
        <div class="flex flex-col space-y-2 mt-2">
          <div v-for="item in 3" :key="item">
            <RateCard />
          </div>
        </div>
      </div>
      <div class="w-[246px] bg-white rounded p-2">
        <div class="flex flex-col space-y-2 mb-2">
          <p v-for="item in 3" :key="item" class="flex items-center">
            <span
              class="text-primary bg-[#ff8800]/10 text-xs py-0.5 px-1 shrink-0"
              >空运</span
            >
            <span class="ml-1 text-paper text-xs leading-[14px] truncate"
              >天津君和祥丰内贸集装天津君和祥丰内贸集装</span
            >
          </p>
        </div>
        <div class="flex flex-col space-y-1.5">
          <div class="w-[230px] h-20 bg-[#a8a8a8] rounded"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useDictStore } from '~/stores/dict'

  const {
    nameDict,
    internationalArrivals,
    internationalDepartures,
    domesticLines,
    ariCarriers,
  } = useDictStore()

  const nameList = computed(() => nameDict['air'])
</script>

<style></style>
