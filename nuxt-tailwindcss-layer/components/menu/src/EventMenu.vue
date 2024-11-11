<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="event-panel flex">
    <div class="shrink-0 w-[412px] text-sm">
      <div class="panel-content flex">
        <img :src="event_logo" alt="" class="shrink-0 w-12 h-12 mr-3" />
        <div class="w-313px">
          <p class="title text-left">{{ getCnOrEn('全球会议', 'Event') }}</p>
          <p class="desc mt-1">
            {{
              getCnOrEn(
                '物流行业最具影响力的高端会议之一',
                'The most influential high-end conference in logistics industry.',
              )
            }}
          </p>
          <div class="flex mt-6">
            <div
              class="intro-btn"
              @click="openByLink('https://www.jctrans.com/event/')"
            >
              <span> 查看更多</span>
              <span> 查看更多</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-10 py-0 text-sm">
      <div
        v-for="(secondaryItem, index) in currentItem.children"
        :key="secondaryItem.nameCn"
        class="secondary-content w-[366px]"
        :class="currentIndex === index ? 'second-is-activated' : ''"
        @mouseover.stop="handleMouseOver(secondaryItem, index)"
        @click.stop="openPageByAppId(secondaryItem.appId, secondaryItem.path)"
      >
        <div class="shrink-0">
          <img
            class="w-6 h-6 mr-2"
            :src="
              currentIndex === index
                ? secondaryItem.iconHover
                : secondaryItem.icon
            "
            alt=""
          />
        </div>
        <div class="flex-1">
          <p class="secondary-content-title relative mb-1">
            {{ getCnOrEn(secondaryItem.nameCn, secondaryItem.name) }}
            <i
              v-if="secondaryItem.isHot"
              class="hot-tag-header relative top-[-8px]"
              >HOT</i
            >
          </p>
          <div
            v-show="currentIndex === index"
            class="secondary-content-desc flex flex-wrap"
          >
            <div
              v-for="(desc, descIndex) in getCnOrEn(
                secondaryItem.desc,
                secondaryItem.descEn,
              )"
              :key="descIndex"
              class="flex items-center mr-2 mb-1 min-w-[100px] leading-4"
            >
              <img :src="nav_dot" class="size-2.5 mr-0.5" alt="" />
              {{ desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="currentItem.children[currentIndex].children.length > 0"
      class="px-10 py-4 text-sm flex-1 flex flex-col"
    >
      <div class="final-content-title mb-4">
        {{
          getCnOrEn(
            currentItem.children[currentIndex].nameCn,
            currentItem.children[currentIndex].name,
          )
        }}
      </div>
      <div class="final-content-wrapper flex-1">
        <div
          v-for="(item, index) in currentItem.children[currentIndex].children"
          :key="index"
          class="final-wrapper-item"
          @click.stop="
            openPageByAppId(
              item.appId ?? 'EVT',
              item.targetPath ?? `/industryEventDetail/${item.id}`,
            )
          "
        >
          <img :src="item.icon" alt="" class="logo" />
          <div class="final-wrapper-item-bottom relative bottom-2">
            <p class="title">{{ getCnOrEn(item.nameCn, item.nameEn) }}</p>
            <p class="date">
              {{ item?.startTime }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import event_logo from '@/assets/images/header/evnet/icon_nav_event@2x.png'
  import nav_dot from '@/assets/images/header/evnet/icon_nav_dot.png'

  const props = defineProps({
    currentItem: {
      type: Object,
      default: () => {},
    },
  })

  const currentIndex = ref(0)
  const emits = defineEmits(['change'])

  const secondList = ref([])
  const { get } = useUseRequest()
  const config = useRuntimeConfig()
  onMounted(async () => {
    secondList.value = props.currentItem.children

    // 获取全部博览会列表
    try {
      const res: any = await get(
        `${config.public.SAPI_DOMAIN}/evt/evtActivity/exhibitionActivity/all`,
      )
      if (res.data.records && res.data.records.length > 0) {
        secondList.value[1].children = res.data.records.slice(0, 4)
      }
    } catch (error) {
      console.error('🚀 ~ file: EventMenu.vue:140 ~ onMounted ~ error:', error)
    }
  })

  function handleMouseOver(_item, index) {
    if (currentIndex.value !== index) {
      emits('change', {
        type: 'event',
        index,
      })
    }
    currentIndex.value = index
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

  .event-panel {
    min-height: 207px;
    max-height: 349px;

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
    }

    .secondary-content {
      display: flex;
      position: relative;
      max-width: 366px;
      margin-top: 8px;
      padding: 8px;

      &:hover .arrow-icon-right {
        animation: move-arrow 0.6s infinite;
      }

      .secondary-content-title {
        color: #232324;
        font-family: Poppins-S, Poppins;
        font-size: 15px;
        font-weight: 600;
        line-height: 23px;
        text-align: left;
      }

      .secondary-content-desc {
        opacity: 0;
        color: #727377;
        font-family: Poppins-R, Poppins;
        font-size: 13px;
        font-weight: 400;
        line-height: 20px;
        text-align: left;
      }
    }

    .second-is-activated {
      border-radius: 8px;
      background: #f8f8f8;

      .secondary-content-desc {
        opacity: 1;
      }
    }

    .final-content-title {
      color: #232324;
      font-family: Poppins-S, Poppins;
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
      text-align: left;
    }

    .final-content-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between; /* 调整水平间距 */
      width: 300px;

      .final-wrapper-item {
        position: relative;
        width: 141px;
        height: 110px;
        margin-bottom: 17px; /* 每个元素的底部间距 */
        border-radius: 8px;
        background: rgb(248 249 253 / 80%);

        .arrow-icon {
          visibility: hidden;
          width: 24px;
          height: 24px;
          padding: 4px;
          border-radius: 4px;
          background-color: #f8f8f8;
        }

        &:hover {
          .arrow-icon {
            visibility: visible;
          }
        }

        .logo {
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          width: 100%;
          height: 77px;
          border-radius: 8px;
        }

        .final-wrapper-item-bottom {
          display: flex;
          position: absolute;
          z-index: 1;
          bottom: 0;
          flex-direction: column;
          justify-content: space-around;
          width: 100%;
          height: 60px;
          padding: 0 4px;
          overflow: hidden; // 防止伪元素溢出
          border-radius: 0 0 8px 8px;

          &::before {
            content: '';
            position: absolute;
            z-index: -1; // 确保伪元素在所有内容的后面
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 1px solid rgb(231 231 232 / 80%);
            border-radius: 8px;
            backdrop-filter: blur(24px);
            background: rgb(248 249 253 / 80%);
          }

          .title {
            height: 20px;
            margin-top: 8px;
            color: #5e5f64;
            font-family: Poppins-S, Poppins;
            font-size: 13px;
            font-style: normal;
            font-weight: 600;
            line-height: 20px;
            text-align: left;
            text-transform: none;
          }

          .date {
            height: 18px;
            color: #727377;
            font-family: Poppins-R, Poppins;
            font-size: 12px;
            font-weight: 400;
            line-height: 14px;
            text-align: left;
          }
        }
      }
    }
  }
</style>
