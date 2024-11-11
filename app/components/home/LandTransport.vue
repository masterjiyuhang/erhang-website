<template>
  <div class="container p-0">
    <BaseTitle :title="'陆运'" class="!leading-[25px] py-2" />

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
          @more="openPageByAppId('RATE', 'ldt')"
        />
        <div class="flex flex-col space-y-2 mt-2">
          <div v-for="item in landTransportPriceList" :key="item.id">
            <RateCard :current-item="item" current-type="ldt" />
          </div>
        </div>
      </div>
      <div class="w-[246px] bg-white rounded p-2">
        <div class="flex flex-col space-y-1.5">
          <NuxtImg
            v-for="(AdItem, i) in LandAdList"
            :key="i"
            class="w-[230px] bg-[#a8a8a8] rounded"
            :src="AdItem?.image || '/images/layouts/footer/logo_footer.png'"
            :alt="AdItem?.title"
            loading="lazy"
            @click="openByLink(AdItem?.link)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useDictStore } from '~/stores/dict'

  const { nameDict } = useDictStore()

  const nameList = computed(() => nameDict['land'])

  const { landTransportPriceList } = useMyHomeStore()

  const { LandAdList, getLandTransportAdList } = useHomeAdList()

  await getLandTransportAdList()
</script>

<style></style>
