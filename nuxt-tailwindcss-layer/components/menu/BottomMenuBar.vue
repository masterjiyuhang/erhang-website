<template>
  <div ref="bottomMenuRef" class="flex h-full justify-start items-center">
    <div
      v-for="(item, index) in menuList"
      :key="index"
      class="cursor-pointer"
      :class="[currentActiveIndex === index ? `current-item` : '']"
    >
      <div
        class="font-[Alibaba] mr-8 text-center text-inherit font-normal text-sm relative tab-title"
        :class="[
          currentActiveIndex === index || item.isActive
            ? 'tab-title-active'
            : '',
        ]"
        @click="navigateToLocalizedPath(item.path)"
        @mouseenter.self="handleMouseEnter(item, index)"
        @mouseleave.self="handleMouseLeave(item)"
      >
        {{ getCnOrEn(item.nameCn, item.nameEn) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const emits = defineEmits(['change'])
  const { menuList } = useMenu()
  const { navigateToLocalizedPath } = usePath()

  const currentActiveIndex = ref(-1)
  const currentTabIndex = ref(-1)

  function handleMouseEnter(item, index) {
    // item.isActive = true
    // menuList.value.forEach((ss, i) => {
    //   if (index === i) {
    //     ss.isActive = true
    //   } else {
    //     ss.isActive = false
    //   }
    // })
    currentActiveIndex.value = index
    emits('change', '#ff6a00')
  }

  function handleMouseLeave(item) {
    // item.isActive = false
    // menuList.value.forEach((ss) => {
    //   ss.isActive = false
    // })
    // TODO: 开发结束的时候放开注释
    currentActiveIndex.value = -1
    emits('change', '#fff')
  }
</script>

<style lang="scss" scoped>
  @keyframes sub-header-title-hover {
    0% {
      transform: scaleX(0.4);
    }

    100% {
      transform: scaleX(1);
    }
  }

  .current-item {
    .animated-tab-content {
      visibility: visible;
      transform: translateY(0);
      opacity: 1;
    }

    .tab-title {
      color: #ff6a00;
      font-family: Poppins-S, Poppins;
    }
  }

  .tab-title {
    color: var(--menu-item-color);
    height: 48px;
    line-height: 48px;
  }

  .tab-title-active {
    color: var(--menu-item-active-color);
    font-family: Poppins-S, Poppins;

    &::after {
      content: ' ';
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      animation: sub-header-title-hover 0.3s cubic-bezier(0.6, 0, 0.4, 1) both;
      border-bottom: 2px solid var(--menu-item-active-color) !important;
    }
  }
</style>
