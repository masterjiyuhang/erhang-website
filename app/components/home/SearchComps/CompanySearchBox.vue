<template>
  <div
    class="flex p-[7px] container bg-white rounded border divide-solid border-[#ff6a00]"
  >
    <div class="min-w-[68px] h-11 mr-4">
      <HeadlessListbox v-model="selectedType" class="h-full">
        <div class="relative">
          <HeadlessListboxButton
            class="relative w-full h-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span class="block truncate">{{ selectedType.name }}</span>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <ChevronDownIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </HeadlessListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <HeadlessListboxOptions
              class="absolute z-10 mt-2 max-h-60 w-full min-w-36 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
            >
              <HeadlessListboxOption
                v-for="ttt in typeList"
                v-slot="{ active, selected }"
                :key="ttt.name"
                :value="ttt"
                as="template"
              >
                <li
                  :class="[
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                    'relative cursor-default select-none py-2 px-4',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-medium ' : 'font-normal',
                      'block truncate',
                    ]"
                    >{{ ttt.name }}</span
                  >
                </li>
              </HeadlessListboxOption>
            </HeadlessListboxOptions>
          </transition>
        </div>
      </HeadlessListbox>
    </div>

    <div class="flex-1">
      <CountryPortSearch
        v-model:value="searchForm.from"
        :placeholder="currentFromPlaceHolder"
      />
    </div>

    <div
      class="flex items-center justify-center rounded size-11 bg-[#ff6400] cursor-pointer"
    >
      <MagnifyingGlassIcon class="h-6 w-6 text-white" aria-hidden="true" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ChevronDownIcon } from '@heroicons/vue/16/solid'
  import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

  const searchForm: any = reactive({
    from: {},
  })
  const typeList = [
    {
      name: '物流类公司',
      value: 'fcl',
    },
    {
      name: '工厂及贸易类公司',
      value: 'fcl',
    },
  ]
  const selectedType = ref(typeList[0])

  const currentFromPlaceHolder = ref('请输入关键字')
</script>

<style></style>
