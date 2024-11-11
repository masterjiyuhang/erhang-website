<template>
  <div
    class="flex p-[7px] container bg-white rounded border divide-solid border-[#ff6a00] space-x-5"
  >
    <div class="flex-1">
      <CountryPortSearch
        v-model:value="searchForm.from"
        is-all-city="0"
        :placeholder="currentFromPlaceHolder"
        :search-type="'Sea'"
      />
    </div>
    <div class="flex-1">
      <CountryPortSearch
        v-model:value="searchForm.dest"
        is-all-city="0"
        :placeholder="currentDestPlaceHolder"
        :search-type="'Sea'"
      />
    </div>
    <div class="h-11 flex-1">
      <el-date-picker
        v-model="searchForm.date"
        :clearable="false"
        lang="zh"
        type="date"
        placeholder="选择日期"
        size="large"
        class="!h-full"
      />
    </div>
    <div class="h-11 flex-1 flex items-center">
      <span
        class="iconfont icon-calendar_fill-if base-icon-content !text-paper"
      />
      <span class="ml-2">离港</span>
    </div>
    <div
      class="flex items-center justify-center rounded size-11 bg-[#ff6400] cursor-pointer"
      @click="handleSearch"
    >
      <MagnifyingGlassIcon
        class="cursor-pointer h-6 w-6 text-white"
        aria-hidden="true"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
  import { useCssVar } from '@vueuse/core'
  import { de } from 'element-plus/es/locale/index.mjs'
  import { reportCallBack } from '~/api/system'

  const searchForm: any = reactive({
    from: {},
    dest: {},
    date: new Date().getTime(),
  })

  const currentFromPlaceHolder = ref('起始地')
  const currentDestPlaceHolder = ref('目的地')

  const dateRef = ref()

  function handleClick() {
    dateRef.value?.click()
  }

  const width = useCssVar('--el-date-editor-width')
  width.value = '56px'
  const route = useRoute()
  function handleSearch() {
    console.log('🚀 ~ file: ScheduleSearchBox.vue:73 ~ searchForm:', searchForm)

    reportCallBack(
      {
        eventCode: 'HOME.SEARCH.SCHEDULE',
        extensions: {
          searchFrom: searchForm.from.addressId,
          searchDest: searchForm.dest.addressId,
        },
      },
      'ZWZ.UC.' + route.meta.name.toUpperCase(),
    )
    openPageByAppId(
      'ERA',
      `/tools/Container/SchedulePlan?${searchForm.from.addressId ? `fromId=${searchForm.from.addressId}` : ''}${searchForm.dest.addressId ? `destId=${searchForm.dest.addressId}` : ''}startTme=${searchForm.date}`,
    )
  }
</script>

<style>
  .el-date-editor {
    --el-date-editor-width: 142px;
    --el-input-focus-border-color: #ff6400;
  }
</style>
