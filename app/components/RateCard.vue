<template>
  <!-- 运价卡片 -->
  <div class="bg-default-content flex flex-col justify-between">
    <div class="flex justify-between">
      <div class="text-left">
        <p class="text-xs leading-[14px] text-paper h-4">上海港</p>
        <p class="text-xs leading-[14px] text-paper-50 h-4 mt-2">(上海)</p>
      </div>
      <div class="text-center flex items-center space-x-1.5">
        <div class="flex justify-center space-x-1">
          <span class="size-1 bg-white border-primary/20 rounded-full"></span>
          <span
            class="size-1 bg-primary/20 border-primary/40 rounded-full"
          ></span>
          <span
            class="size-1 bg-primary/20 border border-primary/50 rounded-full"
          ></span>
        </div>
        <p class="text-xs">16天</p>
        <div class="flex justify-center space-x-1">
          <span
            class="size-1 bg-primary/20 border border-primary/50 rounded-full"
          ></span>
          <span
            class="size-1 bg-primary/20 border-primary/40 rounded-full"
          ></span>
          <span class="size-1 bg-white border-primary/20 rounded-full"></span>
        </div>
      </div>
      <div class="text-right">
        <p class="text-xs leading-[14px] text-paper h-4">洛杉矶</p>
        <p class="text-xs leading-[14px] text-paper-50 h-4 mt-2">(洛杉矶)</p>
      </div>
    </div>

    <div class="mt-4 text-primary flex justify-between items-center">
      <div>
        <p class="text-xs font-normal">$4000/$4000</p>
        <p class="text-xs text-[#000] mt-1">40GP / 40HQ</p>
      </div>
      <div class="bg-[#e1e1e1] w-[67px] h-[37px]"></div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
