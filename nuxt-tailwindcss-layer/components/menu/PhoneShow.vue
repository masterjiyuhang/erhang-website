<template>
  <el-popover
    size="mini"
    :trigger="isDev ? 'click' : 'hover'"
    :placement="'bottom'"
    popper-class="header-phone-show-content"
  >
    <template #reference>
      <div class="phone-show mx-6">
        <NuxtImg
          :src="'/images/layouts/headerPhoneShow/icon_phone_nor@2x.png'"
          alt=""
        />
      </div>
    </template>
    <div class="phone-show-content">
      <div class="phone-show-content__left flex flex-wrap flex-col">
        <div class="flex items-center justify-between">
          <div class="flex flex-col space-between h-[96px]">
            <p class="title">{{ getCnOrEn(`移动端`, 'Mobile Version') }}</p>
            <p class="desc">
              {{
                getCnOrEn(
                  `商机合作更便捷`,
                  `Convenient way to develop business`,
                )
              }}
            </p>
            <p class="paper mt-auto">
              {{
                getCnOrEn(`扫码体验移动端`, `Scan QR code for mobile version`)
              }}
            </p>
          </div>
          <div class="shrink-0">
            <img :src="qr_h5" class="w-[96px] h-[96px]" />
          </div>
        </div>
        <!-- <div class="border my-6"></div> -->
        <img :src="cutline_phone" alt="" class="my-6 w-full" />
        <div class="flex items-center justify-between">
          <div class="flex flex-col space-between h-[96px]">
            <p class="title">
              {{ getCnOrEn(`全球会议APP`, 'JCtrans Event APP') }}
            </p>
            <p class="desc">
              {{
                getCnOrEn(
                  `打造舒适的有价值的会议体验`,
                  `Create a comfortable & valuable conference experience`,
                )
              }}
            </p>
            <p class="paper mt-auto">
              {{ getCnOrEn(`扫码下载APP`, `Scan QR code to download`) }}
            </p>
          </div>
          <div class="shrink-0">
            <img :src="qr_app" class="w-[96px] h-[96px]" />
          </div>
        </div>
      </div>
      <div class="phone-show-content__logo relative overflow-hidden">
        <img :src="EventLogo" alt="" class="absolute" />
      </div>
    </div>
  </el-popover>
</template>

<script lang="ts" setup>
  import cutline_phone from '@/assets/images/cutline_phone.png'
  import EventLogo from '@/assets/images/headerPhone/img_phone.png'
  import qr_h5 from '@/assets/images/headerPhone/img_qr_h5@2x.png'
  import qr_app from '@/assets/images/headerPhone/img_qr_app@2x.png'
  const isDev = computed(() => {
    return import.meta.env.MODE === 'development'
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
    width: 667px;
    height: 290px;
    padding: 24px;
    border-radius: 16px;
    background: #fff;

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
    width: 667px !important;
    padding: 0 !important;
  }
</style>
