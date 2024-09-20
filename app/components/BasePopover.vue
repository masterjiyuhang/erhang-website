<template>
  <HeadlessPopover
    v-slot="{ open, close }"
    class="relative flex items-center justify-center"
  >
    <HeadlessPopoverButton
      as="div"
      class="group inline-flex items-center rounded-md text-base font-medium outline-none"
      @mouseover="(e) => hoverPopover(e, open)"
      @mouseleave="closePopover(close)"
    >
      <slot name="button">
        <span>{{ btnTitle }}</span>
      </slot>
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
        class="absolute right-0 top-10"
        @mouseover.prevent="popoverHover = true"
        @mouseleave.prevent="closePopover(close)"
      >
        <slot></slot>
      </HeadlessPopoverPanel>
    </transition>
  </HeadlessPopover>
</template>

<script lang="ts" setup>
  const popoverHover = ref(false)
  const popoverTimeout = ref()

  const hoverPopover = (e: any, open: boolean): void => {
    if (props.trigger === 'hover') {
      popoverHover.value = true
      if (!open) {
        e.target.parentNode.click()
      }
    }
  }

  const closePopover = (close: any): void => {
    if (props.trigger === 'hover') {
      popoverHover.value = false
      if (popoverTimeout.value) clearTimeout(popoverTimeout.value)
      popoverTimeout.value = setTimeout(() => {
        if (!popoverHover.value) {
          close()
        }
      }, 100)
    }
  }

  const { isEnglish } = useGlobal()

  const props = defineProps({
    top: {
      type: Number,
      default: 6,
    },
    value: {
      type: Boolean,
      default: false,
    },
    trigger: {
      type: String,
      default: 'click',
    },
    btnTitle: {
      type: String,
      default: '点击展开',
    },
  })
</script>

<style></style>
