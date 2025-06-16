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
