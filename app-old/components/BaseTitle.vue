<template>
  <div
    class="base-title-sww"
    :class="[!showTag ? 'before:!hidden' : '']"
    @click="$emit('click')"
  >
    <div>{{ title }}</div>
    <div
      v-if="showMore"
      class="w-10 text-xs text-paper-50 ml-auto flex items-center"
      @click.stop="() => $emit('more')"
    >
      更多<ChevronRightIcon class="size-4" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ChevronRightIcon } from '@heroicons/vue/16/solid'
  defineProps({
    title: {
      type: String,
      default: '默认标题',
    },
    showMore: {
      type: Boolean,
      default: false,
    },
    showTag: {
      type: Boolean,
      default: true,
    },
  })

  defineEmits(['click', 'more'])
</script>

<style lang="scss" scoped>
  .base-title-sww {
    cursor: pointer;
    font-family:
      Alibaba PuHuiTi-Bold,
      Alibaba PuHuiTi,
      Poppins-R;
    font-weight: bold;
    font-size: 18px;
    color: #242323;
    text-align: left;
    display: flex;
    align-items: center;
  }

  .base-title-sww::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 19px;
    background: #ff6a00;
    border-radius: 0px 0px 0px 0px;
    margin-right: 12px;
  }
</style>
