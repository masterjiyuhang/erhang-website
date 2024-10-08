<template>
  <div
    ref="bottomMenuRef"
    class="flex h-full justify-start items-center space-x-8"
  >
    <div
      v-for="(item, index) in menuList"
      :key="index"
      class="cursor-pointer"
      :class="[currentActiveIndex === index ? `current-item` : '']"
      @mouseenter.self="handleMouseEnter(item, index)"
      @mouseleave.self="handleMouseLeave(item)"
    >
      <!-- 本站自定义路由 直接跳转 selfLink -->
      <div
        v-if="item.menuType === 'selfLink'"
        class="text-center text-inherit font-normal text-sm relative tab-title"
        :class="[currentActiveIndex === index ? 'tab-title-active' : '']"
        @click="navigateToLocalizedPath(item.path)"
      >
        {{ getCnOrEn(item.nameCn, item.nameEn) }}
      </div>

      <!-- 菜单外链 外部链接 -->
      <div v-if="item.menuType === 'dropdown'" class="text-right">
        <HeadlessMenu
          v-slot="{ open }"
          as="div"
          class="relative inline-block text-left"
        >
          <div>
            <HeadlessMenuButton
              class="text-center text-inherit font-normal text-sm relative tab-title"
              :class="[currentActiveIndex === index ? 'tab-title-active' : '']"
            >
              {{ item.nameCn }}
            </HeadlessMenuButton>
          </div>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <div v-if="open">
              <HeadlessMenuItems
                class="absolute left-1/2 -translate-x-1/2 mt-2 w-20 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
              >
                <div v-for="childItem in 4" :key="childItem" class="px-1 py-1">
                  <HeadlessMenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-[#ffa132]/10 text-paper' : 'text-paper',
                        'group  w-full items-center rounded-md px-2 py-2 text-sm',
                        'truncate',
                      ]"
                    >
                      Duplicate{{ childItem }}
                    </button>
                  </HeadlessMenuItem>
                </div>
              </HeadlessMenuItems>
            </div>
          </transition>
        </HeadlessMenu>
      </div>

      <!-- 弹出层 popover -->
      <template v-if="item.menuType === 'popover'">
        <div class="text-center text-inherit font-normal text-sm">
          <div
            class="tab-title space-x-4"
            :class="[currentTabIndex === index ? 'tab-title-active' : '']"
          >
            {{ item.nameCn }}
            <!-- <i class="hot-tag hot-tag-header relative bottom-2">HOT</i>
            <i class="new-tag-header relative bottom-2">NEW</i> -->
          </div>
          <!-- v-if="item.children && item.children.length > 0" -->
          <div
            class="animated-tab-content"
            :style="{
              height: `${customerFnNumber}px`,
            }"
          >
            <div class="tab-content">
              <div class="animated-tab-content-children">
                <div class="container">
                  <div v-if="item.nameEn === 'Inquiry'">
                    <MenuSrcInquiryMenu :current-item="item" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- 外站链接 直接跳转 link -->
      <div
        v-if="item.menuType === 'link'"
        class="text-center text-inherit font-normal text-sm relative tab-title"
        :class="[currentActiveIndex === index ? 'tab-title-active' : '']"
        @click="navigateToLocalizedPath(item.path)"
      >
        {{ getCnOrEn(item.nameCn, item.nameEn) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useTransition } from '@vueuse/core'

  const emits = defineEmits(['change'])
  const { menuList } = useMenu()
  const { navigateToLocalizedPath } = usePath()

  const currentActiveIndex = ref(-1)
  const currentTabIndex = ref(-1)
  const contentHeight = ref(340)

  const customerFnNumber = useTransition(contentHeight, {
    duration: 200,
  })

  function handleMouseEnter(item: MenuItem, index: number, open?: boolean) {
    currentActiveIndex.value = index
    currentTabIndex.value = index
    contentHeight.value = item.children?.length * 78
    emits('change', '#ff6a00')
  }

  function handleMouseLeave(item: MenuItem, open?: boolean) {
    currentActiveIndex.value = -1
    currentTabIndex.value = -1
    contentHeight.value = 200
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
    }
  }

  .tab-title {
    color: var(--menu-item-color);
    height: 48px;
    line-height: 48px;
    font-family: Poppins-S, Poppins;
    font-weight: 500;

    position: relative;
    height: 48px;
    font-size: 14px;
    font-weight: 600;
    line-height: 48px;
    text-align: center;
    cursor: pointer;
  }

  .tab-title-active {
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

  .animated-tab-content {
    visibility: hidden;
    position: absolute;
    z-index: 999;
    left: 0;
    width: 100%;
    overflow: hidden;
    border-top: 1px solid #e7e7e8;
    opacity: 0;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;

    .tab-content {
      display: flex;
      position: relative;
      justify-content: flex-start;
      width: 100%;
      min-width: 1200px;
      height: 100%;

      .content-bg {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        height: 100%;
        background-repeat: no-repeat;
        background-position: right;
        background-size: cover;
      }
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

  .animated-tab-content-children {
    width: 100%;
    min-width: 1200px;
    max-width: 1200px;
    margin: 24px auto;
    padding: 0 4px;
    border-radius: 0;
  }

  // 蒙层样式
  .menu-mask {
    position: fixed;
    top: 150px;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0.4;
    background: #000;
  }
</style>
