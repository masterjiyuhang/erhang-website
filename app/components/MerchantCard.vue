<template>
  <div
    :class="[
      'h-[208px] bg-white rounded',
      'text-paper hover:text-primary',
      'relative group',
      'cursor-pointer',
    ]"
    @click="openPageByAppId('SHOP', `/jc/${subitem.uid}.html`)"
  >
    <div class="p-2">
      <div class="truncate font-medium text-base leading-[19px]">
        {{ subitem.nameCn }}
      </div>
      <div class="flex items-center space-x-1 mt-2 h-5">
        <!-- 实力服务商 -->
        <ShopTagServiceProvider
          v-if="
            (subitem.vipCodeList && subitem.vipCodeList.includes('TSP')) ||
            (subitem.vipList &&
              subitem.vipList.some((item) => item.code === 'TSP'))
          "
        />
        <ShopTagQualityServiceProvider
          v-if="subitem.vipCodeList && subitem.vipCodeList.includes('QSP')"
        />
      </div>
    </div>
    <div class="p-2">
      <div class="flex items-center">
        <div class="flex items-center justify-center size-[60px] mr-2">
          <NuxtImg
            :src="currentLogo"
            alt="Avatar"
            class="w-[60px] h-auto rounded object-contain"
          />
        </div>
        <div>
          <h3 class="text-paper text-sm font-bold leading-[19px]">
            <!-- LARRY 杨 -->
            {{ subitem.staffNameCn }}
          </h3>
          <p class="text-paper-100 text-sm leading-[19px]">
            <!-- 业务经理 -->
            {{ subitem.jobTitleCn }}
          </p>
        </div>
      </div>
    </div>
    <div class="px-2 pt-1 pb-2">
      <div
        v-if="
          subitem.shopsAdvRoutesDtoList &&
          subitem.shopsAdvRoutesDtoList.length > 0
        "
        class="text-sm text-gray-500 flex items-center space-x-2"
      >
        <div
          v-for="r in subitem.shopsAdvRoutesDtoList.slice(0, 2)"
          :key="r.id"
          class="w-[135px] truncate flex items-center space-x-2"
        >
          <span
            v-if="r.type === '1'"
            class="iconfont icon-icon_inquiry_air text-primary base-icon-content"
          />
          <span
            v-if="r.type === '2'"
            class="iconfont icon-icon_inquiry_ship text-primary base-icon-content"
          />
          <span class="text-paper truncate">
            <!-- 上海 - 东南亚线 -->
            {{ r.cityRouteName }}
          </span>
        </div>
      </div>
      <div
        v-if="
          subitem.advantageCodeResultList &&
          subitem.advantageCodeResultList.length > 0
        "
        class="space-x-1 mt-2 flex truncate"
      >
        <div
          v-for="tag in subitem.advantageCodeResultList.length > 4
            ? subitem.advantageCodeResultList.slice(0, 4)
            : subitem.advantageCodeResultList"
          :key="tag"
          class="bg-[#f5f5f5] w-[66.5px] rounded-xl text-[#686868] text-center text-xs py-1 px-2 shrink-0"
        >
          <!-- 公司优势 -->
          {{ getDictLabelByCode('companyAdvantageList', tag.advantageCode) }}
        </div>
        <div
          v-if="subitem.advantageCodeResultList.length > 4"
          class="bg-[#f5f5f5] w-6 rounded-xl text-[#686868] text-center text-xs py-1 px-1 shrink-0"
        >
          ...
        </div>
      </div>
      <div
        v-if="subitem.advCodeList && subitem.advCodeList.length > 0"
        class="space-x-1 mt-2 flex truncate"
      >
        <div
          v-for="tag in subitem.advCodeList.length > 4
            ? subitem.advCodeList.slice(0, 4)
            : subitem.advCodeList"
          :key="tag"
          class="bg-[#f5f5f5] w-[66.5px] rounded-xl text-[#686868] text-center text-xs py-1 px-2 shrink-0"
        >
          <!-- 公司优势 -->
          {{ getDictLabelByCode('companyAdvantageList', tag) }}
        </div>
        <div
          v-if="subitem.advCodeList.length > 4"
          class="bg-[#f5f5f5] w-6 rounded-xl text-[#686868] text-center text-xs py-1 px-1 shrink-0"
        >
          ...
        </div>
      </div>
    </div>

    <div
      class="absolute flex right-2 bottom-[85px] invisible group-hover:visible"
    >
      <div
        :class="[
          'text-white w-[38px] h-[38px] rounded-[19px] bg-[#ff6a00]/10',
          'cursor-pointer',
          'flex items-center justify-center mr-3',
        ]"
        @click.stop="openGlobalContactInfo(subitem)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"
            />
            <path
              fill="#FF6A00"
              d="M16.552 22.133c-1.44-.053-5.521-.617-9.795-4.89-4.273-4.274-4.836-8.354-4.89-9.795-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.6 1.166 2.704 2.93 3.652 4.317a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899.901.9 2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332c1.407.974 3.049 2.059 4.251 3.598a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535"
            />
          </g>
        </svg>
      </div>
      <div
        :class="[
          'text-white w-[38px] h-[38px] rounded-[19px] bg-[#001aff]/10',
          'cursor-pointer',
          'flex items-center justify-center mr-3',
        ]"
        @click.stop="openGlobalIM(subitem)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="text-[#001AFF]"
        >
          <g fill="none">
            <path
              d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"
            />
            <path
              fill="#001AFF"
              d="M5 9a7 7 0 0 1 14 0v1.035c1.696.243 3 1.702 3 3.465v.25c0 1.775-1.531 3.331-3.332 3.248-.74 2.12-2.622 3.549-4.653 3.911-.47.172-1.026.091-1.515.091a1.5 1.5 0 0 1 0-3c.793 0 1.671-.115 2.207.609C16.003 17.992 17 16.689 17 15V9A5 5 0 0 0 7 9v6.25A1.75 1.75 0 0 1 5.25 17 3.25 3.25 0 0 1 2 13.75v-.25a3.5 3.5 0 0 1 3-3.465z"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  interface subitems {
    nameCn?: string
    [key: string]: any
  }

  const props = withDefaults(
    defineProps<{
      subitem: subitems
    }>(),
    {
      subitem: null,
    },
  )

  function handleContact() {}

  function handleIm() {}

  const { getDictLabelByCode } = useDictStore()
  const { defaultUserLogo } = useMyUserStore()
  const currentLogo = computed(() => {
    if (props.subitem?.headPortrait) {
      return props.subitem.headPortrait === defaultUserLogo
        ? props.subitem.logoFile || defaultUserLogo
        : props.subitem.headPortrait
    } else if (props.subitem?.logoFile) {
      return props.subitem.logoFile
    } else {
      return defaultUserLogo
    }
  })
</script>

<style></style>
