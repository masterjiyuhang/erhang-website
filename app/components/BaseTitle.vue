<template>
  <div class="base-title-sww" @click="$emit('click')">{{ title }}</div>
</template>

<script lang="ts" setup>
  defineProps({
    title: {
      type: String,
      default: '默认标题',
    },
  })

  defineEmits(['click'])
</script>

<style lang="scss" scoped>
  .base-title-sww {
    cursor: pointer;
    font-family:
      Alibaba PuHuiTi-Bold,
      Alibaba PuHuiTi,
      Poppins-B;
    font-weight: bold;
    font-size: 18px;
    color: #242323;
    line-height: 21px;
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
