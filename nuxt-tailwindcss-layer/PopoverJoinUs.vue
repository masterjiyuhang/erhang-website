<template>
  <div class="flex justify-center items-center">
    <el-popover
      placement="bottom-start"
      :append-to-body="false"
      :visible-arrow="false"
      width="332"
      trigger="click"
      :show-arrow="false"
      popper-class="popover-join-us-content"
    >
      <div class="join-us-content">
        <!-- <h1 class="title">
          {{ $t('home.header.JoinMember.title') }}
        </h1> -->
        <div class="flex flex-col pl-4 pr-5 pb-6 items-start">
          <h2
            class="flex justify-start items-center flex-1 desc"
            @click="viewMemberIntroduction"
          >
            <NuxtImg
              class="icon mb-auto"
              src="/images/layouts/headerJoinUs/icon_intro_why_1@2x.png"
              alt=""
            />1
            <!-- <span>{{ $t('home.header.JoinMember.desc1') }}</span> -->
          </h2>
          <h2
            class="flex justify-center items-center flex-1 desc py-3"
            @click="viewMemberIntroduction"
          >
            <NuxtImg
              class="icon mb-auto"
              src="/images/layouts/headerJoinUs/icon_intro_why_2@2x.png"
              alt=""
            />
            <!-- <span class="ml-4">{{ $t('home.header.JoinMember.desc2') }}</span> -->
            2
          </h2>
          <h2
            class="flex justify-center items-center flex-1 desc"
            @click="viewMemberIntroduction"
          >
            <NuxtImg
              class="icon mb-auto"
              src="/images/layouts/headerJoinUs/icon_intro_why_3@2x.png"
              alt=""
            />
            <!-- <span>{{ $t('home.header.JoinMember.desc3') }}</span> -->
            3
          </h2>
        </div>
        <!-- <button class="ml-4 join-btn">
          {{ $t('home.JoinUs') }}
        </button> -->
      </div>
      <template #reference>
        <div
          class="flex items-center justify-center cursor-pointer"
          :class="'become-member-en'"
        >
          {{ getCnOrEn(`加入会员`, `Become a member`) }}
        </div>
      </template>
    </el-popover>
  </div>
</template>

<script setup>
  // import { computed } from 'vue'
  // import bg_en from '@/assets/images/headerJoinUs/bg_popover_joinus_en@2x.png'
  // import bg_cn from '@/assets/images/headerJoinUs/bg_popover_joinus_cn@2x.png'

  // const isEnglish = ref(false)
  // const currentImg = computed(() => {
  //   return isEnglish.value ? bg_en : bg_cn
  // })
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
</script>

<style lang="scss">
  .become-member-en {
    width: 174px;
    height: 28px;
    padding-left: 20px;
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
    padding-left: 20px;
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

  .popover-join-us-content {
    width: 332px;
    min-height: 235px;
    padding: 0;
    border: none;
    border-radius: 8px;
    background: #000c31;

    --el-popover-padding: 0;

    .join-us-content {
      width: 100%;
      height: 100%;
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

    .popper__arrow::after {
      display: none;
    }
  }
</style>
