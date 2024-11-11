<template>
  <div class="min-h-[75px] w-[661px] p-2 bg-white rounded">
    <div>
      <div
        v-if="title"
        class="mb-2 w-full h-[19px] truncate text-sm font-bold text-paper leading-4 text-left"
      >
        {{ title }}
      </div>
      <HeadlessTabGroup>
        <HeadlessTabList class="flex flex-wrap space-x-0">
          <HeadlessTab
            v-for="link in linkList"
            :id="title + '-' + link.name"
            :key="link.name"
            v-slot="{ selected }"
            as="template"
          >
            <button
              :class="[
                'p-2 text-xs font-normal leading-[14px]',
                'outline-none',
                'hover:text-primary hover:bg-primary/10',
                selected ? ' text-paper-50' : 'bg-white text-paper-50 ',
              ]"
              @click.stop="openByLink(link.href)"
            >
              <NuxtLink
                :href="link.href"
                :class="['focus:z-10']"
                target="_blank"
              >
                {{ link.name }}</NuxtLink
              >
            </button>
          </HeadlessTab>
        </HeadlessTabList>
      </HeadlessTabGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
  interface linkItem {
    name: string
    href: string
  }

  interface Props {
    title: string
    linkList: linkItem[]
  }

  const props = withDefaults(defineProps<Props>(), {
    title: '默认标题',
    linkList: () => [
      { name: '默认标题1', href: '#' },
      { name: '默认标题2', href: '#' },
    ],
  })
</script>

<style></style>
