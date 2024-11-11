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
        />
      </div>
      <div class="w-[281px] bg-white rounded p-2">
        <BaseTitle
          :show-tag="false"
          show-more
          title="热门运价"
          @more="openPageByAppId('RATE', 'air')"
        />
        <div class="flex flex-col space-y-2 mt-2">
          <div v-for="item in airTransportPriceList" :key="item.id">
            <RateCard :current-item="item" current-type="air" />
          </div>
        </div>
      </div>
      <div class="w-[246px] bg-white rounded p-2">
        <div class="flex flex-col space-y-2 mb-2">
          <p
            v-for="(item, textIndex) in AirTextAdList"
            :key="textIndex"
            class="flex items-center"
          >
            <span
              class="text-primary bg-[#ff8800]/10 text-xs py-0.5 px-1 shrink-0"
              >空运</span
            >
            <span class="ml-1 text-paper text-xs leading-[14px] truncate">{{
              item?.title || item?.content
            }}</span>
          </p>
        </div>
        <div class="flex flex-col space-y-1.5">
          <BaseImg
            v-for="(AirAdItem, i) in AirAdList"
            :key="i"
            class="w-[230px] bg-[#a8a8a8] rounded"
            :img-url="AirAdItem?.image"
            :title="AirAdItem?.title"
            loading="lazy"
            :link="AirAdItem?.link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useDictStore } from '~/stores/dict'

  const { nameDict } = useDictStore()

  const nameList = computed(() => nameDict['air'])

  const { airTransportPriceList } = useMyHomeStore()

  const { AirAdList, AirTextAdList, getAirTransportAdList } = useHomeAdList()

  await getAirTransportAdList()
</script>

<style></style>
