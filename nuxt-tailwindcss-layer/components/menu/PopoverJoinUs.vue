<template>
  <div class="flex justify-center items-center">
    <ClientOnly>
      <HeadlessPopover v-slot="{ open, close }" class="relative">
        <HeadlessPopoverButton
          :class="[isEnglish ? 'become-member-en' : 'become-member-cn']"
          class="group inline-flex items-center rounded-md text-base font-medium outline-none"
          @mouseover="(e) => hoverPopover(e, open)"
          @mouseleave="closePopover(close)"
        >
          <span>
            <!-- {{ getCnOrEn(`加入会员`, `Become a member`) }} -->
            加入会员
          </span>
        </HeadlessPopoverButton>

        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-1 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-1 opacity-0"
        >
          <HeadlessPopoverPanel
            class="absolute right-0 top-10 join-us-content z-50"
            :style="{
              backgroundImage: `url(${currentImg})`,
              width: '332px',
              height: isEnglish ? '274px' : '235px',
            }"
            @mouseover.prevent="popoverHover = true"
            @mouseleave.prevent="closePopover(close)"
          >
            <h1 class="title">
              <!-- {{ $t('home.header.JoinMember.title') }} -->
              JCtrans会员制产品
            </h1>
            <div class="flex flex-col pl-4 pr-5 pb-6 items-start">
              <h2
                class="flex justify-start items-center flex-1 desc"
                @click="viewMemberIntroduction"
              >
                <NuxtImg
                  class="icon mb-auto"
                  src="https://resources.jctrans.com/res/hzh/pc/img/icon_intro_why_1@2x.png"
                  alt=""
                />
                <span>
                  汇聚全球优质货代企业
                  <!-- {{ $t('home.header.JoinMember.desc1') }} -->
                </span>
              </h2>
              <h2
                class="flex justify-center items-center flex-1 desc py-3"
                @click="viewMemberIntroduction"
              >
                <NuxtImg
                  class="icon mb-auto"
                  src="https://resources.jctrans.com/res/hzh/pc/img/icon_intro_why_2@2x.png"
                  alt=""
                />
                <span>
                  打造安全信誉圈层
                  <!-- {{ $t('home.header.JoinMember.desc2') }} -->
                </span>
              </h2>
              <h2
                class="flex justify-center items-center flex-1 desc"
                @click="viewMemberIntroduction"
              >
                <NuxtImg
                  class="icon mb-auto"
                  src="https://resources.jctrans.com/res/hzh/pc/img/icon_intro_why_3@2x.png"
                  alt=""
                />
                <span>
                  <!-- {{ $t('home.header.JoinMember.desc3') }}  -->
                  帮助企业持续盈利
                </span>
              </h2>
            </div>
            <button class="join-btn ml-4" @click="handleClickJoinUs(close)">
              <!-- {{ $t('home.JoinUs') }} -->
              加入我们
            </button>
          </HeadlessPopoverPanel>
        </transition>
      </HeadlessPopover>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import bg_en from '../public/images/layouts/headerJoinUs/bg_popover_joinus_en@2x.png'
  import bg_cn from '../public/images/layouts/headerJoinUs/bg_popover_joinus_cn@2x.png'

  const popoverHover = ref(false)
  const popoverTimeout = ref()

  const hoverPopover = (e: any, open: boolean): void => {
    popoverHover.value = true
    if (!open) {
      e.target.parentNode.click()
    }
  }

  const closePopover = (close: any): void => {
    popoverHover.value = false
    if (popoverTimeout.value) clearTimeout(popoverTimeout.value)
    popoverTimeout.value = setTimeout(() => {
      if (!popoverHover.value) {
        close()
      }
    }, 100)
  }

  const { isEnglish } = useGlobal()
  const currentImg = computed(() => {
    return isEnglish.value ? bg_en : bg_cn
  })
  defineProps({
    top: {
      type: Number,
      default: 6,
    },
    value: {
      type: Boolean,
      default: false,
    },
  })

  function viewMemberIntroduction() {}

  const { $globalJoinUs } = useNuxtApp()
  function handleClickJoinUs(close: any) {
    closePopover(close)
    $globalJoinUs({
      link: 'https://www.jctrans.com/member/join',
    })
  }
</script>

<style lang="scss">
  .become-member-en {
    width: 174px;
    height: 28px;
    padding-left: 32px;
    border-radius: 4px;
    background: linear-gradient(270deg, #fae5cd 0%, #f4be9c 100%);
    background-image: url('https://resources.jctrans.com/res/era/pc/img/btn_member_en.gif');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: #bd5339;
    font-family: Poppins-S, Poppins;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
  }

  .become-member-cn {
    width: 95px;
    height: 28px;
    padding-left: 26px;
    border-radius: 4px;
    background-image: url('https://resources.jctrans.com/res/era/pc/img/joinus.gif');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: #bd5339;
    font-family: Poppins-S, Poppins;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
  }

  .join-us-content {
    width: 332px;
    min-height: 235px;
    padding: 0;
    border: none;
    background: #232324;
    border-radius: 8px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .title {
      padding: 16px;
      color: #fff;
      font-family: Poppins-B, Poppins;
      font-size: 18px;
      font-weight: 900;
      line-height: 25px;
      word-break: break-word;
      user-select: none;
    }

    .desc {
      color: #fff;
      font-family: Poppins-R, Poppins;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      text-align: left;
      // word-break: break-word;
      cursor: pointer;

      .icon {
        width: 24px;
        height: 24px;
        margin-right: 4px;
        margin-left: 6px;
      }
    }

    .join-btn {
      width: 300px;
      height: 48px;
      border: none;
      border-radius: 4px;
      background: #fff;
      color: #000c31;
      font-family: Poppins-SemiBold, Poppins;
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
      text-align: center;
      cursor: pointer;
    }
  }
</style>
