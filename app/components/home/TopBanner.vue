<template>
  <div class="flex container p-0 relative -top-10 top-banner">
    <div class="w-[310px]">
      <div class="w-full h-20 bg-primary-100 rounded"></div>
      <div class="w-full h-20 bg-primary-100 my-1.5 rounded"></div>

      <!-- 今日焦点 -->
      <div class="pt-2">
        <BaseTitle :title="'今日焦点'" class="my-2" />
        <div
          class="h-[131px] p-2 bg-white rounded shadow-custom-banner font-extrabold"
        >
          <div class="text-primary text-xl mb-2 cursor-pointer">
            震惊！CMA首次穿越红海
          </div>
          <div class="flex flex-wrap justify-between">
            <div
              v-for="(item, i) in 4"
              :key="item"
              class="p-2 mt-2 bg-[#f5f5f5] text-left rounded text-xs text-paper w-[48%] cursor-pointer truncate break-all"
              :class="(i + 1) % 2 === 0 ? '' : 'mr-2'"
            >
              {{ item }}quahsdjkkjnwkenm,n,mn,m,asd qwe/.k;laskd
            </div>
          </div>
        </div>
      </div>

      <!-- 航运企业公告 -->
      <div class="pt-2 mt-1.5">
        <BaseTitle :title="'航运企业公告'" />
        <div
          class="h-[92px] mt-2 p-2 bg-white rounded shadow-custom-banner font-normal"
        >
          <div v-for="(item, i) in ShippingCompanyAnnouncementList" :key="i">
            <div
              class="flex text-xs"
              :class="
                i < ShippingCompanyAnnouncementList.length - 1 ? 'mb-2' : ''
              "
            >
              <div
                class="px-1 py-0.5 bg-primary-50 bg-opacity-10 h-5 text-primary shrink-0"
              >
                {{ item.label }}
              </div>
              <div class="ml-1 py-0.5 truncate text-paper text-xs font-normal">
                {{ item.value }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 最新货盘 -->
      <div class="mt-1.5">
        <div
          class="relative h-[108px] p-2 bg-white rounded shadow-custom-banner font-extrabold flex flex-col justify-between"
        >
          <div
            :style="{
              writingMode: 'sideways-lr',
            }"
            class="absolute top-0 left-0 rounded bg-primary w-[30px] text-center text-sm text-white h-full px-2 py-4"
          >
            最新货盘
          </div>
          <div
            v-for="item in 3"
            :key="item"
            class="ml-[38px] text-xs flex items-center h-5"
          >
            <span class="iconfont icon-position !text-xs text-primary"></span>

            <div class="ml-1 text-paper font-medium font-[Poppins-B] leading-5">
              DALIAN - LE HAVRE
            </div>
            <div class="ml-2 text-paper-50 text-opacity-100">山地车</div>
            <div
              class="bg-primary bg-opacity-10 text-primary text-xs px-1 py-0.5 ml-auto"
            >
              自行车
            </div>
          </div>
        </div>
      </div>

      <!-- 今日特价 -->
      <div class="mt-1.5">
        <div
          class="relative h-[136px] p-2 bg-white rounded shadow-custom-banner font-extrabold flex flex-col justify-between"
        >
          <div
            :style="{
              writingMode: 'sideways-lr',
            }"
            class="absolute top-0 left-0 rounded bg-primary w-[30px] text-center text-sm text-white h-full px-2 py-4"
          >
            今日特价
          </div>
          <div
            v-for="item in 2"
            :key="item"
            class="ml-[38px] p-2 text-xs flex justify-center h-14 bg-[#f5f5f5] rounded flex-col"
          >
            <div class="text-paper text-xs font-normal">
              宁波晨晟国际物流有限公司特价来袭
            </div>
            <div class="flex justify-between">
              <div class="w-[38px] px-2 py-1 text-primary bg-white rounded">
                100
              </div>
              <div class="w-[38px] px-2 py-1 text-primary bg-white rounded">
                100
              </div>
              <div class="w-[38px] px-2 py-1 text-primary bg-white rounded">
                100
              </div>
              <div class="w-[38px] px-2 py-1 text-primary bg-white rounded">
                100
              </div>
              <div class="w-[38px] px-2 py-1 text-primary bg-white rounded">
                100
              </div>
              <div class="w-[38px] px-2 py-1 text-primary bg-white rounded">
                100
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 首屏左侧按钮  -->
      <div class="w-full h-[45px] mt-1.5 bg-primary-100 rounded"></div>
    </div>
    <div class="mx-1.5 flex-1 min-w-[648px]">
      <div class="w-full h-20 bg-primary-100 rounded"></div>
      <div class="w-full h-[250px] bg-primary-100 mt-1.5 rounded"></div>
      <!-- 精品商家展示 -->
      <div class="w-full">
        <div class="w-full px-2 py-1.5 sm:px-0">
          <HeadlessTabGroup>
            <HeadlessTabList class="flex space-x-0.5">
              <HeadlessTab
                v-for="category in Object.keys(categories)"
                :key="category"
                v-slot="{ selected }"
                as="template"
              >
                <button
                  :class="[
                    'w-full max-w-20 h-9 truncate rounded px-4 py-2.5 text-xs font-normal leading-3',
                    'ring-white/60 ring-offset-2 ring-offset-transparent focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-primary text-white shadow'
                      : 'bg-white text-paper hover:bg-primary/[0.62] hover:text-white',
                  ]"
                >
                  {{ category }}
                </button>
              </HeadlessTab>
            </HeadlessTabList>
          </HeadlessTabGroup>
        </div>
        <BaseTitle :title="'精品商家'" class="my-2.5" />
        <div>
          <el-carousel
            :interval="5000"
            arrow="hover"
            indicator-position="outside"
            height="202px"
          >
            <el-carousel-item v-for="item in 4" :key="item">
              <div class="w-full flex justify-between">
                <div class="w-[320px] h-[202px] rounded bg-white"></div>
                <div class="w-[320px] h-[202px] rounded bg-white"></div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

      <div class="w-full pb-1.5">
        <div class="flex space-x-[15px]">
          <div class="h-20 w-[206px] bg-primary-100 rounded-lg border"></div>
          <div class="h-20 w-[206px] bg-primary-100 rounded-lg border"></div>
          <div class="h-20 w-[206px] bg-primary-100 rounded-lg border"></div>
        </div>
      </div>

      <div class="w-full rounded shadow-custom-banner bg-white h-[45px]"></div>
    </div>
    <div class="w-[230px]">
      <div class="w-full h-20 bg-primary-100 rounded"></div>
      <div class="w-full h-20 bg-primary-100 mt-1.5 rounded"></div>

      <!-- 物流企业公告 -->
      <div class="mt-1.5 pt-2">
        <BaseTitle :title="'物流企业公告'" class="mt-1" />
        <div
          class="h-[275px] mt-2 py-2.5 px-3 bg-white rounded shadow-custom-banner font-normal"
        >
          <div v-for="(item, i) in TransPortCompanyAnnouncementList" :key="i">
            <div
              class="flex text-xs"
              :class="
                i < TransPortCompanyAnnouncementList.length - 1
                  ? 'mb-[9px]'
                  : ''
              "
            >
              <div
                class="px-1 py-0.5 bg-primary-50 bg-opacity-10 h-5 text-primary shrink-0"
              >
                {{ item.label }}
              </div>
              <div class="ml-1 py-0.5 truncate text-paper text-xs font-normal">
                {{ item.value }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-1.5 w-full h-[88px] bg-primary-100 rounded"></div>
      <div class="mt-1.5 w-full h-[100px] bg-primary-100 rounded"></div>
      <div class="mt-1.5 w-full h-[45px] bg-primary-100 rounded"></div>
      <div class="mt-1.5 w-full h-[45px] bg-primary-100 rounded"></div>
    </div>
  </div>
  <div class="mt-1.5 flex container h-[120px] p-0 relative -top-10">
    <div class="w-full bg-primary-100 rounded"></div>
  </div>
</template>

<script lang="ts" setup>
  const categories = ref({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

  // 航运企业公告
  const ShippingCompanyAnnouncementList = ref([
    {
      label: '上海相近相亲',
      value:
        '说大话鸡尾酒莫失莫忘说大话鸡尾酒莫失莫忘说大话鸡尾酒莫失莫忘说大话鸡尾酒莫失莫忘说大话鸡尾酒莫失莫忘',
    },
    {
      label: '上海相近相亲',
      value: '说大话鸡尾酒莫失莫忘',
    },
    {
      label: '上海相近相亲',
      value: '说大话鸡尾酒莫失莫忘',
    },
  ])
  const TransPortCompanyAnnouncementList = ref([
    {
      label: '上海相近相亲',
      value:
        '说大话鸡尾酒莫失莫忘说大话鸡尾酒莫失莫忘说大话鸡尾酒莫失莫忘说大话鸡尾酒莫失莫忘说大话鸡尾酒莫失莫忘',
    },
    {
      label: '上海相近相亲',
      value: '说大话鸡尾酒莫失莫忘',
    },
    {
      label: '上海相近相亲',
      value: '说大话鸡尾酒莫失莫忘',
    },
    {
      label: '上海相近相亲',
      value:
        '说大话鸡尾酒莫失莫忘说大话鸡尾酒莫失莫忘说大话鸡尾酒莫失莫忘说大话鸡尾酒莫失莫忘说大话鸡尾酒莫失莫忘',
    },
    {
      label: '上海相近相亲',
      value: '说大话鸡尾酒莫失莫忘',
    },
    {
      label: '上海相近相亲',
      value: '说大话鸡尾酒莫失莫忘',
    },
    {
      label: '上海相近相亲',
      value:
        '说大话鸡尾酒莫失莫忘说大话鸡尾酒莫失莫忘说大话鸡尾酒莫失莫忘说大话鸡尾酒莫失莫忘说大话鸡尾酒莫失莫忘',
    },
    {
      label: '上海相近相亲',
      value: '说大话鸡尾酒莫失莫忘',
    },
    {
      label: '上海相近相亲',
      value: '说大话鸡尾酒莫失莫忘',
    },
  ])
</script>

<style lang="scss">
  .top-banner {
    .el-carousel__button {
      background-color: #d8d8d8;
      opacity: 1;
    }

    .el-carousel__indicator.is-active button {
      opacity: 1;
      background-color: #ff6a00;
    }
  }
</style>
