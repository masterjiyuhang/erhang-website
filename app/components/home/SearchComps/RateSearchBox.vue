<template>
  <div
    class="flex p-[7px] container bg-white rounded border divide-solid border-[#ff6a00]"
  >
    <div class="min-w-[68px] h-11 mr-4">
      <HeadlessListbox v-model="selectedType" class="h-full">
        <div class="relative">
          <HeadlessListboxButton
            class="relative w-full h-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span class="block truncate">{{ selectedType.label }}</span>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <ChevronDownIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </HeadlessListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <HeadlessListboxOptions
              class="absolute w-24 z-10 mt-2 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm text-center"
            >
              <HeadlessListboxOption
                v-for="ttt in typeList"
                v-slot="{ active, selected }"
                :key="ttt.label"
                :value="ttt"
                as="template"
              >
                <li
                  :class="[
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                    'relative cursor-default select-none py-2 px-4',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-medium ' : 'font-normal',
                      'block truncate',
                    ]"
                    >{{ ttt.label }}</span
                  >
                </li>
              </HeadlessListboxOption>
            </HeadlessListboxOptions>
          </transition>
        </div>
      </HeadlessListbox>
    </div>
    <div v-if="currentSubTypeList.length" class="min-w-[68px] h-11 mr-4">
      <HeadlessListbox v-model="selectedSubType">
        <div class="relative h-full">
          <HeadlessListboxButton
            class="relative w-full h-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span class="block truncate">{{ selectedSubType.label }}</span>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <ChevronDownIcon
                class="h-4 w-4 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </HeadlessListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <HeadlessListboxOptions
              class="absolute z-10 mt-2 max-h-60 w-24 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm text-center"
            >
              <HeadlessListboxOption
                v-for="ttt in currentSubTypeList"
                v-slot="{ active, selected }"
                :key="ttt.label"
                :value="ttt"
                as="template"
              >
                <li
                  :class="[
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                    'relative cursor-default select-none py-2 px-4',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-medium ' : 'font-normal',
                      'block truncate',
                    ]"
                    >{{ ttt.label }}</span
                  >
                </li>
              </HeadlessListboxOption>
            </HeadlessListboxOptions>
          </transition>
        </div>
      </HeadlessListbox>
    </div>

    <div class="flex-1">
      <CountryPortSearch
        v-model:value="searchForm.from"
        :placeholder="currentFromPlaceHolder"
        :only-city="selectedType.onlyCity"
        :search-type="selectedType.transportType"
      />
    </div>
    <div
      v-if="!['whs', 'ctc'].includes(selectedType.value)"
      class="flex-1 ml-5"
    >
      <CountryPortSearch
        v-model:value="searchForm.dest"
        :placeholder="currentDestPlaceHolder"
        :only-city="selectedType.onlyCity"
        :dest-country="
          selectedSubType.label === '国际' &&
          (selectedType.destCountry as boolean)
        "
        :search-type="selectedType.transportType"
      />
    </div>
    <div
      class="flex items-center justify-center rounded size-11 bg-[#ff6400] cursor-pointer"
      @click="handleSearch"
    >
      <MagnifyingGlassIcon class="h-6 w-6 text-white" aria-hidden="true" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ChevronDownIcon } from '@heroicons/vue/16/solid'
  import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
  import {
    FCL_TYPE_OPTIONS_LIST,
    LCL_TYPE_OPTIONS_LIST,
    BKC_TYPE_OPTIONS_LIST,
    EXP_TYPE_OPTIONS_LIST,
  } from '../constant'
  import { reportCallBack } from '~/api/system'

  const searchForm: any = reactive({
    from: {},
    dest: {},
  })
  const typeList = [
    {
      label: '整箱',
      value: 'fcl',
      code: '1',
      onlyCity: false,
      transportType: 'Sea',
      subTypeList: FCL_TYPE_OPTIONS_LIST,
    },
    {
      label: '拼箱',
      value: 'lcl',
      code: '3',
      onlyCity: false,
      transportType: 'Sea',
      subTypeList: LCL_TYPE_OPTIONS_LIST,
    },
    {
      label: '散杂货',
      value: 'bkc',
      code: '4',
      onlyCity: false,
      transportType: 'Sea',
      subTypeList: BKC_TYPE_OPTIONS_LIST,
    },
    {
      label: '空运',
      value: 'air',
      code: '2',
      onlyCity: false,
      transportType: 'Air',
      subTypeList: [],
    },
    {
      label: '快递',
      code: '7',
      value: 'exp',
      onlyCity: true,
      destCountry: true, // 目的地支持国家下拉模糊搜索！！！！
      transportType: 'other',
      subTypeList: EXP_TYPE_OPTIONS_LIST,
    },
    {
      label: '集卡',
      code: '5',
      value: 'ctt',
      onlyCity: true,
      transportType: 'other',
      subTypeList: [],
    },
    {
      label: '陆运',
      code: '8',
      value: 'ldt',
      onlyCity: true,
      transportType: 'other',
      subTypeList: [],
    },
    {
      label: '铁路',
      code: '6',
      value: 'rlw',
      onlyCity: true,
      transportType: 'other',
      subTypeList: [],
    },
    {
      label: '仓储',
      value: 'whs',
      code: '9',
      onlyCity: true,
      transportType: 'other',
      subTypeList: [],
    },
    {
      label: '报关',
      value: 'ctc',
      code: '10',
      onlyCity: false,
      transportType: 'Sea',
      subTypeList: [],
    },
  ]
  const selectedType = ref(typeList[0])

  const selectedSubType = ref(selectedType.value.subTypeList[0])
  const currentSubTypeList = computed(() => selectedType.value.subTypeList)

  const currentFromPlaceHolder = ref('起始港：')
  const currentDestPlaceHolder = ref('目的港：')

  watch(
    () => selectedType.value,
    (val, oldVal) => {
      if (oldVal !== val) {
        searchForm.from = {}
        searchForm.dest = {}
      }
      if (['fcl', 'lcl', 'bkc'].includes(val.value)) {
        currentFromPlaceHolder.value = '起始港：'
        currentDestPlaceHolder.value = '目的港：'
      } else if (['whs', 'ctc'].includes(val.value)) {
        currentFromPlaceHolder.value = '地区：'
        currentDestPlaceHolder.value = '地区：'
      } else if (['exp'].includes(val.value)) {
        currentFromPlaceHolder.value = '请输入起始城市：'
        currentDestPlaceHolder.value = '请输入目的国家：'
      } else {
        currentFromPlaceHolder.value = '请输入起始地：'
        currentDestPlaceHolder.value = '请输入目的地：'
      }
      selectedSubType.value = val.subTypeList[0]
    },
  )
  watch(
    () => selectedSubType.value,
    (val) => {
      if (selectedType.value.value === 'exp') {
        searchForm.from = {}
        searchForm.dest = {}
        if (val.label === '国内') {
          currentFromPlaceHolder.value = '请输入起始地：'
          currentDestPlaceHolder.value = '请输入目的地：'
        } else {
          currentFromPlaceHolder.value = '请输入起始城市：'
          currentDestPlaceHolder.value = '请输入目的国家：'
        }
      }
    },
  )
  const route = useRoute()
  function handleSearch() {
    console.log(
      searchForm.from,
      searchForm.dest,
      selectedType.value,
      selectedSubType.value,
    )
    const fromStr =
      searchForm.from.addressId || searchForm.from.id
        ? `fromId=${searchForm.from.addressId || searchForm.from.id}&fromPortName=${searchForm.from.nameCn || searchForm.from.cityNameCn}&`
        : ''
    const destStr =
      searchForm.dest.addressId || searchForm.dest.id
        ? `destId=${searchForm.dest.addressId || searchForm.dest.id}&destPortName=${searchForm.dest.nameCn || searchForm.dest.cityNameCn}&`
        : ''
    const subTypeStr = selectedSubType.value?.value
      ? `cabType=${selectedSubType.value?.value}&`
      : ''

    reportCallBack(
      {
        eventCode: 'HOME.SEARCH.RATE',
        extensions: {
          fromId: searchForm.from.addressId || searchForm.from.id,
          from: searchForm.from.nameCn || searchForm.from.cityNameCn,
          dest: searchForm.dest.nameCn || searchForm.dest.cityNameCn,
          subType: selectedSubType.value?.label,
          transportType: selectedType.value?.label,
          selectedType: selectedType.value,
        },
      },
      'ZWZ.UC.' + route.meta.name.toUpperCase(),
    )

    openPageByAppId(
      'Rate',
      `/${selectedType.value.value}?${fromStr}${destStr}${subTypeStr}transportType=${selectedType.value.value}`,
    )
  }
</script>

<style></style>
