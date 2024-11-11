<template>
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="translate-y-1 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-1 opacity-0"
  >
    <div
      v-show="showBackTop"
      :class="[
        'size-[68px] rounded bg-white shadow-back-top text-[#493CF2]',
        'flex flex-col items-center justify-center',
        'fixed right-[90px] bottom-[400px] cursor-pointer',
        'z-[996] ',
      ]"
      @click="$emit('backTop')"
    >
      <svg
        class="mt-3 mb-1"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.0042 7.05029V21"
          stroke="#ff8800"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 13L12 7L18 13"
          stroke="#ff8800"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 3H18"
          stroke="#ff8800"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <span class="text-primary-50 text-xs"> 返回顶部</span>
    </div>
  </transition>
  <div
    :class="[
      'size-[68px] rounded bg-white shadow-back-top text-primary-50',
      'flex flex-col items-center justify-center',
      'fixed right-[90px] bottom-[324px] cursor-pointer',
      'z-[996] group',
      'hover:bg-[linear-gradient(180deg,#ff5000,#ff8f12)]',
    ]"
  >
    <!-- <NuxtImg
      :src="'https://resources.jctrans.com/res/jc/pc/img/zwz-kf.png'"
      class="size-[22px] my-2 block group-hover:hidden"
    />
    <NuxtImg
      :src="'https://resources.jctrans.com/res/jc/pc/img/zwz-kf-white.png'"
      class="size-[22px] my-2 hidden group-hover:block"
    /> -->
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      class="size-[22px] my-2 block group-hover:hidden"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 16C20.2092 16 22 14.2092 22 12C22 9.79085 20.2092 8 18 8"
        stroke="#ff8800"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M6 8C3.79086 8 2 9.79085 2 12C2 14.2092 3.79086 16 6 16"
        stroke="#ff8800"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M6 16V15.75V14.5V12V8C6 4.68629 8.6863 2 12 2C15.3137 2 18 4.68629 18 8V16C18 19.3137 15.3137 22 12 22"
        stroke="#ff8800"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      class="size-[22px] my-2 hidden group-hover:block"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 16C20.2092 16 22 14.2092 22 12C22 9.79085 20.2092 8 18 8"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M6 8C3.79086 8 2 9.79085 2 12C2 14.2092 3.79086 16 6 16"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M6 16V15.75V14.5V12V8C6 4.68629 8.6863 2 12 2C15.3137 2 18 4.68629 18 8V16C18 19.3137 15.3137 22 12 22"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <span class="text-primary-50 text-xs group-hover:text-white">
      官方客服</span
    >

    <div
      :class="[
        'absolute top-0 left-[-179px] rounded',
        'invisible group-hover:visible',
        'py-3 px-3 bg-white shadow-back-top text-sm',
      ]"
    >
      <div @click="handleClickIm">
        <div class="flex items-center justify-start">
          <!-- <NuxtImg
            :src="'https://resources.jctrans.com/res/jc/pc/img/zwz-kf.png'"
            class="size-[22px] my-2"
          /> -->
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            class="size-[22px] my-2 block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 16C20.2092 16 22 14.2092 22 12C22 9.79085 20.2092 8 18 8"
              stroke="#ff8800"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              d="M6 8C3.79086 8 2 9.79085 2 12C2 14.2092 3.79086 16 6 16"
              stroke="#ff8800"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              d="M6 16V15.75V14.5V12V8C6 4.68629 8.6863 2 12 2C15.3137 2 18 4.68629 18 8V16C18 19.3137 15.3137 22 12 22"
              stroke="#ff8800"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>官方客服</span>
        </div>
        <div>如需帮助，联系在线客服</div>
      </div>
      <div class="bg-[#493cf2]/30 w-full h-[1px] my-2" />
      <div class="flex items-center justify-start">
        <!-- <NuxtImg
          :src="'https://resources.jctrans.com/res/jc/pc/img/zwz-tel.png'"
          class="size-[22px] my-2"
        /> -->
        <svg
          t="1730081710876"
          class="icon size-[22px] my-2"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="7054"
          width="200"
          height="200"
        >
          <path
            d="M694.874353 918.949647c-57.825882-2.108235-221.726118-24.696471-393.336471-196.367059-171.610353-171.550118-194.258824-335.450353-196.367058-393.33647-3.252706-88.124235 64.271059-173.778824 142.336-207.209412a59.030588 59.030588 0 0 1 58.006588 6.324706c64.210824 46.863059 108.604235 117.639529 146.672941 173.357176 17.227294 25.178353 13.071059 59.512471-10.24 79.75153L363.52 439.717647a19.275294 19.275294 0 0 0-5.722353 24.696471c17.709176 32.346353 49.332706 80.353882 85.473882 116.495058 36.141176 36.141176 86.437647 69.752471 120.952471 89.509648a19.395765 19.395765 0 0 0 25.840941-6.445177l50.959059-77.703529c19.516235-25.961412 56.018824-31.623529 82.582588-13.251765 56.500706 39.092706 122.458353 82.642824 170.706824 144.444235a59.030588 59.030588 0 0 1 7.589647 59.632941c-33.611294 78.426353-118.663529 145.167059-207.088941 141.914353z"
            p-id="7055"
            fill="#ff8800"
          />
        </svg>
        <span>服务热线</span>
      </div>
      <div>400-000-2788</div>
    </div>
  </div>
  <div
    :class="[
      'size-[68px] rounded bg-white shadow-back-top text-[#493CF2]',
      'flex flex-col items-center justify-center',
      'fixed right-[90px] bottom-[248px] cursor-pointer',
      'z-[996] group',
      'hover:bg-[linear-gradient(180deg,#ff5000,#ff8f12)]',
    ]"
    @click="openByLink('http://qfck70.kuaishang.cn/bs/im/4256/3710/196708.htm')"
  >
    <!-- <NuxtImg
      :src="'https://resources.jctrans.com/res/jc/pc/img/zwz-xj.png'"
      class="size-[22px] my-2 block group-hover:hidden"
    />
    <NuxtImg
      :src="'https://resources.jctrans.com/res/jc/pc/img/zwz-xj-white.png'"
      class="size-[22px] my-2 hidden group-hover:block"
    /> -->
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="size-[22px] my-2 block group-hover:hidden"
    >
      <path
        d="M20 13.5V3C20 2.44771 19.5523 2 19 2H5C4.44771 2 4 2.44771 4 3V21C4 21.5523 4.44771 22 5 22H10.5"
        stroke="#ff8800"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.5 6L12 9L14.5 6"
        stroke="#ff8800"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 12H15"
        stroke="#ff8800"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 9H15"
        stroke="#ff8800"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 9V15"
        stroke="#ff8800"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.5 22L17.7677 20.2677M17.7677 20.2677C18.2202 19.8153 18.5 19.1903 18.5 18.5C18.5 17.1193 17.3807 16 16 16C14.6193 16 13.5 17.1193 13.5 18.5C13.5 19.8807 14.6193 21 16 21C16.6903 21 17.3153 20.7202 17.7677 20.2677Z"
        stroke="#ff8800"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="size-[22px] my-2 hidden group-hover:block"
    >
      <path
        d="M20 13.5V3C20 2.44771 19.5523 2 19 2H5C4.44771 2 4 2.44771 4 3V21C4 21.5523 4.44771 22 5 22H10.5"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.5 6L12 9L14.5 6"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 12H15"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 9H15"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 9V15"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.5 22L17.7677 20.2677M17.7677 20.2677C18.2202 19.8153 18.5 19.1903 18.5 18.5C18.5 17.1193 17.3807 16 16 16C14.6193 16 13.5 17.1193 13.5 18.5C13.5 19.8807 14.6193 21 16 21C16.6903 21 17.3153 20.7202 17.7677 20.2677Z"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <span class="text-primary-50 text-xs group-hover:text-white">
      立即询价</span
    >
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    showBackTop: {
      type: Boolean,
      default: false,
    },
  })

  defineEmits(['backTop'])

  const app = useNuxtApp()
  async function handleClickIm() {
    console.log(
      '🚀 ~ file: BackTop.vue:349 ~ handleClickIm ~ app.$JCIM:',
      app.$JCIM?.openIM,
    )
    try {
      await app.$JCIM.openIM()
    } catch (error) {
      ElMessage.error('IM加载中，请稍后再试')
    }
  }
</script>

<style></style>
