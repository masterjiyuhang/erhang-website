<template>
  <div class="min-w-72 country-port-search">
    <HeadlessCombobox v-model="currentSelected" nullable>
      <div class="relative">
        <div
          class="relative w-full h-11 cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-300 sm:text-sm"
        >
          <HeadlessComboboxButton
            class="absolute inset-y-0 left-3 flex items-center pr-1 base-icon"
            disabled
          >
            <span
              class="iconfont icon-position text-primary-100 base-icon-content"
            ></span>
          </HeadlessComboboxButton>
          <HeadlessComboboxInput
            class="w-full h-full border-none py-2 pl-10 pr-10 text-sm leading-5 text-gray-900 shadow-none base-input"
            :placeholder="placeholder"
            autocomplete="off"
            :display-value="(port: any) => port?.nameCn"
            @change="query = $event.target.value"
          />
          <HeadlessComboboxButton
            v-show="!_isEmpty(currentSelected)"
            class="absolute inset-y-0 right-0 flex items-center pr-2"
            disabled
          >
            <XMarkIcon
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
              @click.stop="() => (currentSelected = null)"
            />
          </HeadlessComboboxButton>
        </div>
        <HeadlessTransitionRoot
          leave="transition ease-in duration-100"
          leave-from="opacity-100"
          leave-to="opacity-0"
          @after-leave="query = ''"
        >
          <HeadlessComboboxOptions
            class="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <div
              v-if="query !== ''"
              class="relative cursor-default select-none px-4 py-2 text-gray-700"
            >
              <div v-if="list.length === 0 && !loading">暂无数据.</div>
              <div v-else-if="loading">搜索中...</div>
            </div>

            <HeadlessComboboxOption
              v-for="port in list"
              :key="port.id"
              v-slot="{ selected, active }"
              as="template"
              :value="port"
            >
              <li
                class="relative cursor-default select-none py-2 pl-10 pr-4"
                :class="{
                  'bg-primary-600 text-white': active,
                  'text-gray-900': !active,
                }"
              >
                <span
                  class="block truncate"
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  {{ port.nameCn }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3"
                  :class="{ 'text-white': active, 'text-primary-600': !active }"
                >
                  <!-- <CheckIcon class="h-5 w-5" aria-hidden="true" /> -->
                </span>
              </li>
            </HeadlessComboboxOption>
          </HeadlessComboboxOptions>
        </HeadlessTransitionRoot>
      </div>
    </HeadlessCombobox>
  </div>
</template>

<script setup lang="ts">
  import { CheckIcon, XMarkIcon } from '@heroicons/vue/20/solid'
  import { findCityPortAddressApi } from '~/api/findCityPortAddress'
  import { isClient } from '@vueuse/core'

  const props = defineProps({
    value: {
      type: Object,
      default: () => ({}),
    },
    searchType: {
      type: String,
      default: 'air',
    },
    placeholder: {
      type: String,
      default: '请输入',
    },
  })

  const emits = defineEmits(['update:value'])
  const currentSelected = ref(props.value)
  const query = ref('')
  const loading = ref(false)

  watch(
    () => props.value,
    (val) => {
      currentSelected.value = val
    },
    {
      deep: true,
    },
  )

  watch(
    () => currentSelected.value,
    () => {
      emits('update:value', currentSelected.value)
    },
  )

  watchEffect(() => {
    if (query.value) {
      list.value = []
      findCityPortAddress(query.value)
    }
  })

  interface Location {
    id: number
    version: number
    addressId: number
    nameLength: number
    addressType: 'city'
    nameCn: string
    nameEn: string
    countryId: number
    countryNameCn: string
    countryNameEn: string
    countryShortCode: string
    cityId: number | null
    cityNameCn: string | null
    cityNameEn: string | null
    seaLineId: number | null
    airLineId: number | null
    code: null
  }

  const list = ref<Location[]>([])

  async function ss(searchValue: string = '') {
    if (isClient) {
      loading.value = true
      const res: any = await findCityPortAddressApi({
        transportType: props.searchType ?? 'air',
        name: searchValue,
        isAllCity: 1,
      })
      list.value = res.data.records
      loading.value = false
    } else {
      console.log('not client')
    }
  }

  const findCityPortAddress = _debounce(ss, 500)
</script>

<style lang="scss" scoped>
  .country-port-search {
    .base-input:focus + .base-icon .base-icon-content {
      &::before {
        color: #f80; // 这里将使用 #f80 作为伪元素的颜色
      }
    }
  }
</style>
