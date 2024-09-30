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
    >
      <!-- 本站自定义路由 直接跳转 selfLink -->
      <div
        v-if="item.menuType === 'selfLink'"
        class="text-center text-inherit font-normal text-sm relative tab-title"
        :class="[currentActiveIndex === index ? 'tab-title-active' : '']"
        @click="navigateToLocalizedPath(item.path)"
        @mouseenter.self="handleMouseEnter(item, index)"
        @mouseleave.self="handleMouseLeave(item)"
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
              @mouseenter.self="handleMouseEnter(item, index, open)"
              @mouseleave.self="handleMouseLeave(item, open)"
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

      <div v-if="item.menuType === 'popover'" class="text-right">
        <BasePopover trigger="click">
          <template #button="{ hoverPopover, closePopover, close, open }">
            <div
              class="text-center text-inherit font-normal text-sm relative tab-title"
              :class="[currentActiveIndex === index ? 'tab-title-active' : '']"
              @mouseover="
                (e) => {
                  hoverPopover(e, open)
                  handleMouseEnter(item, index)
                }
              "
              @mouseleave="
                () => {
                  closePopover(close)
                  handleMouseLeave(item, open)
                }
              "
            >
              {{ item.nameCn }}
            </div>
          </template>
          <div
            class="bg-white overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5"
          >
            hahah
          </div>
        </BasePopover>
      </div>

      <!-- 外站链接 直接跳转 link -->
      <div
        v-if="item.menuType === 'link'"
        class="text-center text-inherit font-normal text-sm relative tab-title"
        :class="[currentActiveIndex === index ? 'tab-title-active' : '']"
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

  function handleMouseEnter(item: MenuItem, index: number, open?: boolean) {
    currentActiveIndex.value = index
    emits('change', '#ff6a00')
  }

  function handleMouseLeave(item: MenuItem, open?: boolean) {
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
      // font-family: Poppins-S, Poppins;
    }
  }

  .tab-title {
    color: var(--menu-item-color);
    height: 48px;
    line-height: 48px;
    font-family: Poppins-R, Poppins;
    font-weight: 500;
  }

  .tab-title-active {
    // color: var(--menu-item-active-color);
    // font-family: Poppins-S, Poppins;

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
