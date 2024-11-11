<template>
  <div class="rounded border border-[#fff1e1] flex items-center">
    <span class="bg-[#fff1e1] px-2 py-0.5 text-[#633400] text-xs leading-[14px]"
      >信誉会员</span
    >
    <span v-if="year" class="px-2 py-0.5 text-paper text-xs leading-[14px]"
      >{{ year }}年</span
    >
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    year: {
      type: Number,
      default: 0,
    },
  })
</script>

<style></style>
