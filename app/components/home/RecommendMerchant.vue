<template>
  <div class="container p-0">
    <BaseTitle :title="'推荐商家'" :show-more="true" />

    <div class="w-full mt-4">
      <HeadlessTabGroup>
        <HeadlessTabList class="flex space-x-2 rounded bg-white p-1">
          <HeadlessTab
            v-for="city in cityList"
            :key="city.name"
            v-slot="{ selected }"
            as="template"
          >
            <button
              :class="[
                'w-[54px] h-6 py-1 px-2 text-xs leading-[14px] font-medium',
                'ring-white/60 ring-offset-2 ring-offset-transparent focus:outline-none focus:ring-2',
                selected
                  ? 'bg-primary text-white'
                  : 'bg-white text-paper  hover:bg-white/[0.12] hover:text-paper-50',
              ]"
            >
              {{ city.name }}
            </button>
          </HeadlessTab>
        </HeadlessTabList>

        <HeadlessTabPanels class="mt-2">
          <HeadlessTabPanel
            v-for="(city, idx) in cityList"
            :key="idx"
            :class="['rounded-xl', ' focus:outline-none']"
          >
            <el-carousel
              :interval="5000"
              arrow="hover"
              indicator-position="outside"
              height="432px"
              :autoplay="false"
            >
              <el-carousel-item
                v-for="(splitArr, iii) in splitArrayIntoGroups(
                  city.children,
                  8,
                )"
                :key="iii"
              >
                <div justify="center" class="grid grid-cols-4 gap-4">
                  <div
                    v-for="(item, infoIndex) in splitArr"
                    :key="infoIndex"
                    :class="[
                      'h-[208px] bg-white rounded',
                      'text-paper hover:text-primary',
                    ]"
                  >
                    <div class="p-2">
                      <div
                        class="truncate font-medium text-base leading-[19px]"
                      >
                        {{ item.name }}
                      </div>
                      <div class="flex items-center space-x-1 mt-2">
                        <ShopTagServiceProvider />
                        <ShopTagCreditMember :year="99" />
                      </div>
                    </div>
                    <div class="p-2">
                      <div class="flex items-center">
                        <img
                          src="https://resources.jctrans.com/res/account/pc/img/default_avator.png"
                          alt="Avatar"
                          class="w-[60px] h-[60px] rounded mr-2"
                        />
                        <div>
                          <h3
                            class="text-paper text-sm font-bold leading-[19px]"
                          >
                            LARRY 杨
                          </h3>
                          <p class="text-paper-100 text-sm leading-[19px]">
                            业务经理
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="px-2 pt-1 pb-2">
                      <div
                        class="text-sm text-gray-500 flex items-center space-x-2"
                      >
                        <div class="w-[135px] truncate">
                          <span
                            class="iconfont icon-icon_inquiry_air text-primary base-icon-content mr-2"
                          ></span>
                          <span class="text-paper">上海 - 东南亚线</span>
                        </div>
                        <div class="w-[135px] truncate">
                          <span
                            class="iconfont icon-icon_inquiry_air text-primary base-icon-content mr-2"
                          ></span>
                          <span class="text-paper">上海 - 东南亚线</span>
                        </div>
                      </div>
                      <div class="flex space-x-2 mt-2">
                        <div
                          v-for="tag in 4"
                          :key="tag"
                          class="bg-[#f5f5f5] rounded-xl text-[#686868] text-center text-xs py-1 w-[66px]"
                        >
                          海运整箱{{ tag }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </HeadlessTabPanel>
        </HeadlessTabPanels>
      </HeadlessTabGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const cityList = [
    {
      name: '上海',
      children: [
        {
          name: '奇比（上海）供应链管理有限公司奇比（上海）供应链管理有限公司奇比（上海）供应链管理有限公司',
        },
        {
          name: '奇比（上海）供应链管理有限公司',
        },
        {
          name: '奇比（上海）供应链管理有限公司',
        },
        {
          name: '奇比（上海）供应链管理有限公司',
        },
        {
          name: '奇比（上海）供应链管理有限公司',
        },
        {
          name: '奇比（上海）供应链管理有限公司',
        },
        {
          name: '奇比（上海）供应链管理有限公司',
        },
        {
          name: '奇比（上海）供应链管理有限公司8',
        },
        {
          name: '奇比（上海）供应链管理有限公司',
        },
      ],
    },
    {
      name: '大连',
      children: [],
    },
    {
      name: '宁波',
      children: [],
    },
    {
      name: '深圳',
      children: [],
    },
    {
      name: '天津',
      children: [],
    },
    {
      name: '青岛',
      children: [],
    },
    {
      name: '广州',
      children: [],
    },
    {
      name: '其他',
      children: [],
    },
  ]
</script>

<style lang="scss">
  .el-carousel__button {
    background-color: #d8d8d8;
    opacity: 1;
  }

  .el-carousel__indicator.is-active button {
    opacity: 1;
    background-color: #ff6a00;
  }
</style>
