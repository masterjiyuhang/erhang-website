<template>
  <div class="inquiry-panel">
    <div class="main-cate">
      <div class="panel-content flex">
        <img :src="inquiry_logo" class="w-12 h-12 mr-3 shrink-0" alt="" />

        <div class="w-[313px] text-left">
          <p class="title">询盘</p>
          <p class="desc mt-1">
            {{ `在过去30天内，用户已发布 ${formatNum(inquiryNum)} 个询盘需求` }}
          </p>
          <div class="flex mt-6">
            <div class="intro-btn" @click.stop="handleViewMore">
              <span>发布询盘</span>
              <span>发布询盘</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="secondary-cate">
      <div
        v-for="(secondaryItem, index) in currentItem.children"
        :key="secondaryItem.nameEn"
        class="secondary-content w-[362px]"
        @mouseover.stop="handleMouseOver(secondaryItem, index)"
        @mouseleave.stop="handleMouseLeave"
      >
        <div class="shrink-0">
          <div
            class="size-6 mr-2 bg-transparent bg-contain"
            :style="{
              backgroundImage:
                currentIndex === index
                  ? `url(${secondaryItem.iconHover})`
                  : `url(${secondaryItem.icon})`,
            }"
          ></div>
        </div>
        <div class="flex-1">
          <p
            class="secondary-content-title relative mb-1"
            :class="
              currentIndex === index ? 'secondary-content-title-active' : ''
            "
          >
            {{ secondaryItem.nameCn }}
            <i class="hot-tag-header relative top-[-8px]">HOT</i>
          </p>
          <p class="secondary-content-desc">
            {{ secondaryItem.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import inquiry_logo from '@/assets/images/header/inquiry/icon_nav_inquiry@2x.png'
  import { openPageByAppId } from '~/utils/openByAppId'
  defineProps({
    currentItem: {
      type: Object,
      default: () => {},
    },
  })

  const inquiryNum = ref(0)
  const currentIndex = ref(-1)

  function formatNum(e) {
    return e
  }

  function handleMouseOver(_item, index) {
    currentIndex.value = index
  }
  function handleMouseLeave() {
    currentIndex.value = -1
  }

  function handleViewMore() {
    // 登录后的用户跳转到帮货代 发布询盘页面
    openPageByAppId('TPS', '/index?fromWhere=hzh')
  }
</script>

<style lang="scss" scoped>
  // 定义混合宏
  @mixin view-more-btn(
    $firstY: 44px,
    $lastY: 12px,
    $hoverFirstY: -34px,
    $hoverLastY: 12px,
    $bg-color: #fff,
    $duration: 0.2s,
    $color: #3264ff,
    $width: 160px,
    $height: 40px,
    $before-bg-color: #3ad2d0,
    $after-bg-color: #cc4c4c,
    $effect-opacity: 0,
    $f-size: 15px,
    $line-height: 18px
  ) {
    position: relative;
    width: $width;
    height: $height;
    // margin: auto;
    padding: 0;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    // border: 3px #3ad2d0 solid;
    border: none;
    border-radius: 4px;
    background-color: $bg-color;
    color: $color;
    font-family: 'Poppins-SemiBold', 'Poppins';
    font-size: $f-size;
    font-weight: 600;
    line-height: $line-height;
    text-align: center;
    cursor: pointer;

    span {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: transform $duration linear;
      text-align: center;
    }

    span:first-child {
      transform: translateY($hoverFirstY);
    }

    span:last-child {
      transform: translateY($lastY);
    }

    &:hover {
      transition: background $duration linear;

      &::before {
        transform: translateY(0) scaleY(1);
        transition-delay: 0s;
        border-radius: 0;
      }

      &::after {
        transform: translateY(-120%) scaleY(0.5);
        transition-delay: 0s;
        border-radius: 0 0 50% 50%;
      }

      span:first-child {
        transform: translateY($lastY);
      }

      span:last-child {
        transform: translateY(55px);
      }
    }
  }

  .inquiry-panel {
    display: flex;

    .main-cate {
      flex-shrink: 0;
      width: 412px;
      font-size: 14px;
    }

    .secondary-cate {
      display: flex;
      flex-wrap: wrap; /* 允许换行 */
      justify-content: space-between; /* 在两列之间留出间距 */
      padding: 0 40px;
      font-size: 14px;
    }

    .panel-content {
      max-width: 375px;

      .title {
        color: #232324;
        font-family: Poppins-S, Poppins;
        font-size: 18px;
        font-weight: bold;
        line-height: 27px;
      }

      .desc {
        color: #5e5f64;
        font-family: Poppins-R, Poppins;
        font-size: 13px;
        font-weight: 400;
        line-height: 20px;
      }

      .intro-btn {
        width: 120px;
        height: 40px;
        border-radius: 8px;
        background: #232324;
        color: #fff;
        font-family: Poppins-S, Poppins;
        font-size: 14px;
        font-weight: 600;
        line-height: 40px;
        text-align: center;

        @include view-more-btn(
          $width: 120px,
          $height: 40px,
          $bg-color: #232324,
          $color: #fff,
          $f-size: 14px,
          $lastY: 12px
        );
      }

      .benefits {
        width: 120px;
        height: 40px;
        border-radius: 8px;
        background: transparent;
        color: #232324;
        font-family: Poppins-S, Poppins;
        font-size: 14px;
        font-weight: 600;
        line-height: 40px;
        text-align: center;
      }
    }

    .secondary-content {
      display: flex;
      position: relative;
      width: calc(50% - 20px); /* 每个项目占据 50% 的宽度并留出一些间距 */
      margin-right: 12px;
      margin-bottom: 20px; /* 下方留出间距 */
      padding: 8px;

      &:hover {
        border-radius: 8px;
        background: #f8f8f8;
      }

      &:nth-child(3) {
        margin-bottom: 0;
      }

      .secondary-content-title {
        color: #232324;
        font-family: Poppins-S, Poppins;
        font-size: 15px;
        font-weight: 600;
        line-height: 23px;
        text-align: left;
      }

      .secondary-content-title-active {
        .arrow-icon {
          animation: move-arrow 0.6s infinite;
        }
      }

      .secondary-content-desc {
        color: #727377;
        font-family: Poppins-R, Poppins;
        font-size: 13px;
        font-weight: 400;
        line-height: 20px;
        text-align: left;
      }
    }
  }
</style>
