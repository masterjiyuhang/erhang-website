<template>
  <div class="bg-default-content flex flex-col justify-between">
    <div class="flex items-center justify-between">
      <!-- 左侧图标 -->
      <NuxtImg
        src="https://resources.jctrans.com/res/account/pc/img/default_avator.png"
        alt="logo"
        class="w-[92px] h-[52px] object-contain shrink-0"
      />

      <!-- 右侧图标和文本 -->
      <div class="flex flex-col items-start ml-2 rounded-lg space-y-1">
        <div
          class="w-10 h-4 rounded-custom-rounded bg-primary flex items-center justify-center text-white"
        >
          <span
            class="iconfont icon-selected text-white base-icon-content !text-xs"
          />
          <span class="font-bold text-xs ml-1">16</span>
        </div>
        <!-- 公司名称 -->
        <div>
          <h2 class="text-xs font-bold text-paper leading-[14px] line-clamp-2">
            Seabay International Freight Forwarding Ltd LtdLtdLtd
          </h2>
          <p class="text-gray-500 text-sm mt-1 flex items-center leading-5">
            <span
              class="iconfont icon-position text-primary-100 base-icon-content !text-sm"
            />
            <span class="ml-1 text-xs text-[#5e5f64]"> Austria - Vienna</span>
          </p>
        </div>
      </div>
    </div>

    <!-- 底部徽标 -->
    <div class="mt-4 flex items-center">
      <NuxtImg
        src="https://resources.jctrans.com/res/account/pc/img/default_avator.png"
        alt="JC Elite"
        class="w-[72px] h-5 object-contain bg-white"
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
