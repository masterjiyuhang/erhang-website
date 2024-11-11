<!-- eslint-disable vue/html-self-closing -->
<template>
  <BasePopover trigger="hover">
    <template #button="{ hoverPopover, closePopover, close, open }">
      <div
        class="phone-show mx-6 cursor-pointer"
        @mouseover="(e) => hoverPopover(e, open)"
        @mouseleave="closePopover(close)"
      >
        <img v-show="isWhite" :src="icon_phone_dark" alt="" />
        <img v-show="!isWhite" :src="icon_phone_nor" alt="" />
      </div>
    </template>
    <div
      class="header-phone-show-content overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5"
    >
      <div class="phone-show-content z-50">
        <div class="phone-show-content__left flex flex-wrap flex-col">
          <div class="flex items-center justify-between">
            <div class="flex flex-col space-between h-[96px]">
              <p class="title">
                <!-- {{ getCnOrEn(`JCtrans移动端`, 'JCtrans Mobile Version') }} -->
                JCtrans移动端
              </p>
              <p class="desc">
                查找代理更便捷
                <!-- {{
                  getCnOrEn(
                    `查找代理更便捷`,
                    `Convenient way to develop business`,
                  )
                }} -->
              </p>
              <p class="paper mt-auto">
                <!-- {{
                  getCnOrEn(`扫码体验移动版`, `Scan QR code for mobile version`)
                }} -->
                扫码体验移动版
              </p>
            </div>
            <div class="shrink-0">
              <img :src="qr_h5" class="w-[96px] h-[96px]" />
            </div>
          </div>
          <img :src="cutline_phone" alt="" class="my-4 w-full" />
          <div class="flex items-center justify-between">
            <div class="flex flex-col space-between h-[96px]">
              <p class="title">
                <!-- {{ getCnOrEn(`全球会议APP`, 'JCtrans Event APP') }} -->
                全球会议APP
              </p>
              <p class="desc">
                <!-- {{
                  getCnOrEn(
                    `打造舒适的，有价值的会议体验`,
                    `Create a comfortable & valuable conference experience`,
                  )
                }} -->
                打造舒适的，有价值的会议体验
              </p>
              <p class="paper mt-auto">
                <!-- {{ getCnOrEn(`扫描二维码下载`, `Scan QR code to download`) }} -->
                扫描二维码下载
              </p>
            </div>
            <div class="shrink-0">
              <img :src="qr_app" class="w-[96px] h-[96px]" />
            </div>
          </div>
          <img :src="cutline_phone" alt="" class="my-4 w-full" />
          <div class="flex items-center justify-between">
            <div class="flex flex-col space-between h-[96px]">
              <p class="title">
                <!-- {{ getCnOrEn(`货代圈小程序`, '货代圈小程序') }} -->
                货代圈小程序
              </p>
              <p class="desc">
                {{
                  getCnOrEn(
                    `超大国际物流社群，AI助高效找同行货主商机`,
                    `超大国际物流社群，AI助高效找同行货主商机`,
                  )
                }}
              </p>
              <p class="paper mt-auto">
                {{ getCnOrEn(`扫码体验小程序`, `扫码体验小程序`) }}
              </p>
            </div>
            <div class="shrink-0">
              <img :src="hdq_qr" class="w-[96px] h-[96px]" />
            </div>
          </div>
        </div>
        <!-- <div class="phone-show-content__logo relative overflow-hidden">
          <img :src="EventLogo" alt="" class="absolute" />
        </div> -->
      </div>
    </div>
  </BasePopover>
</template>

<script lang="ts" setup>
  import cutline_phone from '@/assets/images/cutline_phone.png'
  // import EventLogo from '@/assets/images/headerPhone/img_phone.png'
  import qr_h5 from '@/assets/images/headerPhone/img_qr_h5@2x.png'
  import qr_app from '@/assets/images/headerPhone/img_qr_app@2x.png'
  import hdq_qr from '@/assets/images/headerPhone/img_qr_app.png'
  import icon_phone_nor from '@/assets/images/memberService/icon_phone_nor@2x.png'
  import icon_phone_dark from '@/assets/images/memberService/icon_phone_dark@2x.png'

  defineProps({
    isWhite: { type: Boolean, default: false },
  })
</script>
<style lang="scss" scoped>
  .phone-show {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 0;
    cursor: pointer;

    &:hover {
      transition: background-color 0.3s; /* 平滑过渡效果 */
      border-radius: 4px;
      background-color: rgb(35 35 36 / 5%); /* #232324 5% 透明度 */
    }

    .icon {
      width: 12px;
      height: 18px;
    }
  }

  .phone-show-content {
    position: relative;
    padding: 24px;
    background: #fff;

    width: 410px;
    height: 404px;
    box-shadow: 0px 8px 40px 0px rgba(97, 98, 101, 0.08);
    border-radius: 16px;

    &__logo {
      position: absolute;
      top: 0;
      right: 0;
      width: 260px;
      height: 290px;
    }

    &__left {
      width: 362px;

      .border {
        border: 1px dashed #b7bcc0;
      }

      .title {
        height: 24px;
        color: #ff6a00;
        font-family: Poppins-B, Poppins;
        font-size: 16px;
        font-weight: bold;
        line-height: 19px;
      }

      .desc {
        max-width: 250px;
        margin-top: 4px;
        color: #5e5f64;
        font-family: Poppins-R, Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-align: left;
        word-break: normal;
      }

      .paper {
        max-width: 250px;
        height: 20px;
        color: #727377;
        font-family: Poppins-R, Poppins;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        text-align: left;
      }
    }
  }
</style>
<style>
  .header-phone-show-content {
    border-radius: 16px;
    box-shadow: 0 8px 40px 0 rgb(97 98 101 / 8%);
    /* width: 667px !important; */
    padding: 0 !important;
  }
</style>
