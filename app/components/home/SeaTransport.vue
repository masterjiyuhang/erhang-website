<template>
  <div class="container p-0">
    <BaseTitle :title="'海运'" class="!leading-[25px] py-2" />

    <div class="w-full flex space-x-1.5">
      <div class="flex-1 space-y-1.5">
        <LinkShowCard title="箱型" :link-list="boxTypeList" />
        <LinkShowCard title="散杂货" :link-list="BulkCargoTypeList" />
        <LinkShowCard title="航线" :link-list="routeList" />
        <LinkShowCard title="承运人" :link-list="carrierList" />
        <LinkShowCard title="热门港口" :link-list="hotPortList" />
        <LinkShowCard title="优势业务" :link-list="advantageList" />
      </div>
      <div class="w-[281px] bg-white rounded p-2">
        <BaseTitle
          :show-tag="false"
          show-more
          title="热门运价"
          @more="openPageByAppId('RATE', 'fcl')"
        />
        <div class="flex flex-col space-y-2 mt-2">
          <div v-for="item in seaTransportPriceList" :key="item.id">
            <RateCard :current-item="item" current-type="fcl" />
          </div>
        </div>
      </div>
      <div class="w-[246px] bg-white rounded p-2">
        <div class="flex flex-col space-y-1.5">
          <NuxtImg
            v-for="(ShipAdItem, i) in ShipAdList"
            :key="i"
            :src="
              ShipAdItem?.image ||
              ShipAdItem?.defaultImg ||
              '/images/layouts/footer/logo_footer.png'
            "
            :alt="ShipAdItem?.title"
            class="w-[230px] bg-[#a8a8a8] rounded cursor-pointer"
            loading="lazy"
            @click="openByLink(ShipAdItem?.link)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useDictStore } from '~/stores/dict'
  import { useMyHomeStore } from '~/stores/home'

  const {
    boxTypeList,
    BulkCargoTypeList,
    routeList,
    carrierList,
    hotPortList,
    advantageList,
  } = useDictStore()

  const { ShipAdList, getSeaTransportAdList } = useHomeAdList()

  const { seaTransportPriceList } = useMyHomeStore()

  await getSeaTransportAdList()
</script>

<style></style>
