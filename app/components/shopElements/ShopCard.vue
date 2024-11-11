<template>
  <div
    class="bg-default-content flex flex-col justify-between cursor-pointer"
    @click="openPageByAppId('ERA', `/cn/home/${currentItem.uid}`)"
  >
    <div class="flex items-center justify-between">
      <!-- 左侧图标 -->
      <NuxtImg
        :src="logoSrc"
        alt="member company logo"
        class="min-w-[92px] max-w-[92px] h-[52px] object-contain shrink-0"
        @error="handleImgError"
      />

      <!-- 右侧图标和文本 -->
      <div class="flex flex-1 flex-col items-start ml-2 rounded-lg space-y-1">
        <div
          class="w-10 h-4 rounded-custom-rounded bg-primary flex items-center justify-center text-white"
        >
          <span
            class="iconfont icon-selected text-white base-icon-content !text-xs"
          />
          <span class="font-bold text-xs ml-1">{{
            currentItem.vipTotalYears
          }}</span>
        </div>
        <!-- 公司名称 -->
        <div>
          <h2 class="text-xs font-bold text-paper leading-[14px] line-clamp-2">
            <!-- Seabay International Freight Forwarding Ltd LtdLtdLtd -->
            {{ currentItem.compName }}
          </h2>
          <p class="text-gray-500 text-sm mt-1 flex items-center leading-5">
            <span
              class="iconfont icon-position text-primary-100 base-icon-content !text-sm"
            />
            <span class="ml-1 text-xs text-[#5e5f64]">
              {{ currentItem.cityName }} - {{ currentItem.countryName }}</span
            >
          </p>
        </div>
      </div>
    </div>

    <!-- 底部徽标 -->
    <div class="mt-4 flex items-center flex-wrap space-x-1">
      <div
        v-for="item in currentItem.vipListVoList"
        :key="item.code"
        :class="[
          getVipLogoClass(item.code),
          'inline-block h-5 bg-cover bg-center bg-no-repeat shrink-0 mt-1',
        ]"
      >
        <!-- {{ getVipLogoClass(item.code) }} -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    currentItem: {
      type: Object,
      default: () => ({}),
    },
  })
  // 实际图片路径和默认图片路径
  const defaultLogo =
    // 'https://resources.jctrans.com/res/hzh/pc/img/zwz-bg-defalut.png'
    'https://resources.jctrans.com/res/hzh/pc/img/zwz-default-JCtrans.png'
  const logoSrc = ref(props.currentItem.logoFile) // 当前图片的路径
  function handleImgError(e) {
    logoSrc.value = defaultLogo // 加载失败时将图片源切换为默认图片
  }
</script>

<style lang="scss" scoped>
  .vip-code-1 {
    width: 72px;
    background-image: url('https://resources.jctrans.com/res/memtag/pc/img/1.png');
  }

  .vip-code-2 {
    width: 156px;
    background-image: url('https://resources.jctrans.com/res/memtag/pc/img/2.png');
  }
  .vip-code-3 {
    width: 102px;
    background-image: url('https://resources.jctrans.com/res/memtag/pc/img/3.png');
  }
  .vip-code-4 {
    width: 122px;
    background-image: url('https://resources.jctrans.com/res/memtag/pc/img/4.png');
  }
  .vip-code-5 {
    width: 84px;
    background-image: url('https://resources.jctrans.com/res/memtag/pc/img/5.png');
  }
  .vip-code-6 {
    width: 95px;
    background-image: url('https://resources.jctrans.com/res/memtag/pc/img/6.png');
  }
  .vip-code-7 {
    width: 95px;
    background-image: url('https://resources.jctrans.com/res/memtag/pc/img/7.png');
  }
  .vip-code-8 {
    width: 95px;
    background-image: url('https://resources.jctrans.com/res/memtag/pc/img/8.png');
  }
</style>
