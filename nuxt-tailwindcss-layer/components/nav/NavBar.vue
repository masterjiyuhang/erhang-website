<script setup lang="ts">
  const { navlinks, navlinksPrimary, navlinksSecondary, currentPath } = useNav()
</script>

<template>
  <div class="w-full">
    <nav class>
      <div class="container mx-auto px-4 sm:px-6">
        <div class="flex h-24 items-center justify-between">
          <div class="flex items-center justify-between w-full">
            <div class="flex flex-shrink-0 items-center">
              <TheLogo />
            </div>
            <NavPrimary
              :navlinks="navlinksPrimary"
              :current-path="currentPath"
              class="hidden sm:flex sm:ml-6"
            />
          </div>
          <LangSwitcher class="hidden xl:flex xl:ml-6" />
          <DarkModeSwitch />
          <div class="-mr-2 items-center relative">
            <!-- 大屏展示 -->
            <NavHamburger
              v-if="navlinksSecondary.length"
              class="hidden sm:block"
            />
            <!-- 移动端下展示 -->
            <NavHamburger v-if="navlinks.length" class="sm:hidden" />
            <!-- 下拉列表 -->
            <NavSecondary
              class="hidden sm:flex sm:justify-end absolute right-0 mt-4"
              :navlinks="navlinksSecondary"
              :current-path="currentPath"
            />
          </div>
          <el-button type="danger" class="ml-6">login</el-button>
        </div>
      </div>
      <!-- 小屏幕的下拉列表 -->
      <NavSecondary
        class="sm:hidden"
        :navlinks="navlinks"
        :current-path="currentPath"
      />
    </nav>

    <MenuBar />
  </div>
</template>

<style scoped></style>
