<template>
  <!-- 运价卡片 -->
  <div
    class="bg-default-content relative flex flex-col justify-between group cursor-pointer"
    @click="
      openPageByAppId('RATE', `${currentType}/detail/${currentItem.uid}.html`)
    "
  >
    <div v-if="currentType !== 'whs'" class="flex justify-between">
      <div class="text-left">
        <div v-show="false">
          {{ `${currentType}/detail/${currentItem.uid}.html` }}
        </div>
        <!-- 起始地 -->
        <template v-if="currentType === 'fcl' || currentType === 'air'">
          <p class="text-xs leading-[14px] text-paper h-4">
            {{ currentItem.fromPortName }}
          </p>
          <p class="text-xs leading-[14px] text-paper-50 h-4 mt-2">
            {{
              currentItem.startCityName ? `(${currentItem.startCityName})` : ''
            }}
          </p>
        </template>
        <template v-else>
          <p class="text-xs leading-[14px] text-paper h-4">
            {{
              currentItem.startCityName ? `${currentItem.startCityName}` : ''
            }}
          </p>
        </template>
      </div>
      <div class="text-center flex items-center space-x-1.5 mb-auto">
        <div class="flex justify-center space-x-1">
          <span class="size-1 bg-white border-primary/20 rounded-full" />
          <span class="size-1 bg-primary/20 border-primary/40 rounded-full" />
          <span
            class="size-1 bg-primary/20 border border-primary/50 rounded-full"
          />
        </div>
        <p class="text-xs">
          {{
            `${currentItem.sailDuration ? currentItem.sailDuration + '天' : '-'}`
          }}
        </p>
        <div class="flex justify-center space-x-1">
          <span
            class="size-1 bg-primary/20 border border-primary/50 rounded-full"
          />
          <span class="size-1 bg-primary/20 border-primary/40 rounded-full" />
          <span class="size-1 bg-white border-primary/20 rounded-full" />
        </div>
      </div>
      <div class="text-right">
        <!-- 目的地 -->
        <template v-if="currentType === 'fcl' || currentType === 'air'">
          <p class="text-xs leading-[14px] text-paper h-4">
            {{ currentItem.destPortName }}
          </p>
          <p class="text-xs leading-[14px] text-paper-50 h-4 mt-2">
            {{
              currentItem.destCityName ? `(${currentItem.destCityName})` : ''
            }}
          </p>
        </template>
        <template v-else>
          <p class="text-xs leading-[14px] text-paper h-4">
            {{ currentItem.destCityName ? `${currentItem.destCityName}` : '' }}
          </p>
        </template>
      </div>
    </div>
    <div v-else class="flex flex-col justify-between">
      <div class="text-xs">{{ currentItem.cityName }}</div>
      <div class="text-xs truncate">
        {{ currentItem.title }}
      </div>
    </div>

    <div class="mt-4 text-primary flex justify-between items-center truncate">
      <div class="truncate flex-1 mr-3 text-xs font-normal">
        <!-- <p class="text-xs font-normal w-full ">
          $4000/$400040004000400040004000
        </p> -->
        <!-- $4000/$400040004000400040004000 -->

        <div v-show="false">{{ currentItem }}</div>
        <template v-if="currentType === 'air'">
          {{
            Object.keys(currentItem).length &&
            [
              currentItem?.boxTypeOne,
              currentItem?.boxTypeTwo,
              currentItem?.boxTypeThree,
              currentItem?.boxTypeFour,
              currentItem?.boxTypeFive,
              currentItem?.boxTypeSix,
            ]
              .filter((item) => !!item)
              .map((item) => '¥' + item)
              .join('/')
          }}
        </template>
        <template v-if="currentType === 'fcl'">
          {{
            Object.keys(currentItem).length &&
            [
              currentItem?.boxTypeOne,
              currentItem?.boxTypeTwo,
              currentItem?.boxTypeThree,
              currentItem?.boxTypeFour,
              currentItem?.boxTypeFive,
              currentItem?.boxTypeSix,
            ]
              .filter((item) => !!item)
              .map((item) => '$' + item)
              .join('/')
          }}
        </template>
        <!-- 陆运 -->
        <template v-if="currentType === 'ldt'">
          {{ currentItem?.price }}
          {{ currentItem?.unit && landUnitList[currentItem?.unit] }}
        </template>
        <template v-if="currentType === 'whs'">
          <div class="grid grid-cols-1 gap-1">
            <!-- {{ currentItem?.fileStartingPrice || '文件 起价: 123123' }}
            {{ currentItem?.fileStartingPrice || '文件 起价: 123123' }}
            {{ currentItem?.fileStartingPrice || '文件 起价: 123123' }}
            {{ currentItem?.fileStartingPrice || '文件 起价: 123123' }} -->
            <!-- <div>
              {{ currentItem?.fileStartingPrice || '文件 起价: 123123' }}
            </div> -->
            <div class="text-primary">
              库房面积: {{ currentItem.warehouseArea }}㎡
            </div>
            <!-- <div v-if="currentItem?.fileStartingPrice">
              文件 起价: {{ currentItem?.fileStartingPrice }}
            </div>
            <div v-if="currentItem?.fileContinuedWeight">
              文件 续重: {{ currentItem?.fileContinuedWeight }}
            </div>
            <div v-if="currentItem?.packageStartingPrice">
              包裹 起价: {{ currentItem?.packageStartingPrice }}
            </div>
            <div v-if="currentItem?.packageContinuedWeight">
              包裹 续重: {{ currentItem?.packageContinuedWeight }}
            </div>
            <div v-if="currentItem?.heavyGoodsOne">
              重货 21: {{ currentItem?.heavyGoodsOne }}
            </div>
            <div v-if="currentItem?.heavyGoodsTwo">
              重货 45: {{ currentItem?.heavyGoodsTwo }}
            </div>
            <div v-if="currentItem?.heavyGoodsThree">
              重货 301: {{ currentItem?.heavyGoodsThree }}
            </div>
            <div v-if="currentItem?.heavyGoodsFour">
              重货 1001: {{ currentItem?.heavyGoodsFour }}
            </div> -->
          </div>
        </template>
        <!-- 综合服务 -->

        <!-- <p class="text-xs text-[#000] mt-1">40GP / 40HQ</p> -->
      </div>
      <NuxtImg
        v-if="currentItem.logoFile"
        :src="currentItem.logoFile"
        class="bg-inherit w-[67px] h-[37px] shrink-0 visible"
        :class="
          ['fcl', 'air'].includes(currentType) ? 'group-hover:invisible' : ''
        "
      />
      <div
        v-else
        class="bg-default-jc-logo w-[67px] h-[37px] shrink-0 visible"
        :class="
          ['fcl', 'air'].includes(currentType) ? 'group-hover:invisible' : ''
        "
      />
    </div>

    <div v-if="['fcl', 'air'].includes(currentType)" class="contact-box">
      <div
        class="contact-btn phone-btn"
        @click.stop="openGlobalContactInfo(currentItem)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"
            />
            <path
              fill="#FF6A00"
              d="M16.552 22.133c-1.44-.053-5.521-.617-9.795-4.89-4.273-4.274-4.836-8.354-4.89-9.795-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.6 1.166 2.704 2.93 3.652 4.317a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899.901.9 2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332c1.407.974 3.049 2.059 4.251 3.598a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535"
            />
          </g>
        </svg>
      </div>
      <div class="contact-btn service-btn" @click.stop="handleIm(currentItem)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="text-[#001AFF]"
        >
          <g fill="none">
            <path
              d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"
            />
            <path
              fill="#001AFF"
              d="M5 9a7 7 0 0 1 14 0v1.035c1.696.243 3 1.702 3 3.465v.25c0 1.775-1.531 3.331-3.332 3.248-.74 2.12-2.622 3.549-4.653 3.911-.47.172-1.026.091-1.515.091a1.5 1.5 0 0 1 0-3c.793 0 1.671-.115 2.207.609C16.003 17.992 17 16.689 17 15V9A5 5 0 0 0 7 9v6.25A1.75 1.75 0 0 1 5.25 17 3.25 3.25 0 0 1 2 13.75v-.25a3.5 3.5 0 0 1 3-3.465z"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reportCallBack } from '~/api/system'
  defineProps({
    currentItem: {
      type: Object,
      default: () => ({}),
    },
    currentType: {
      type: String,
      default: 'normal',
    },
  })

  const userStore = useMyUserStore()

  const landUnitList = [
    `元/车`,
    `元/吨`,
    `元/立方米`,
    `元/集装箱`,
    `元/车皮`,
    `元/公斤`,
  ]

  const route = useRoute()

  async function handleIm(item) {
    console.log(
      '🚀 ~ file: RateCard.vue:238 ~ handleIm ~ userId:',
      userStore.userId,
    )
    if (!userStore.userId) {
      go2LoginPage()
    }
    const app = useNuxtApp()
    try {
      await app.$JCIM?.openIMSendRateCard(
        { compId: item?.compId || item?.companyId || '', id: item.id },
        'feInformation',
      )
      // await app.$JCIM?.openIMSendRateCard(
      //   { compId: item?.compId || item?.companyId || '', id: item.id },
      //   'inquirySheet',
      // )
      console.log('消息发送成功')
    } catch (error) {
      console.error('发送消息时出错:', error)
      ElMessage.error('IM加载中，请稍后再试')
    }

    reportCallBack(
      {
        eventCode: 'HOME.RATE.CARD.IM.CLICK',
        extensions: {
          COMPID: item?.compId || item?.companyId || '',
        },
      },
      'ZWZ.UC.' + route.meta.name.toUpperCase(),
    )
  }
</script>

<style lang="scss" scoped>
  .contact-box {
    position: absolute;
    display: flex;
    right: 0;
    bottom: 8px;
    visibility: hidden;

    .contact-btn {
      cursor: pointer;
      color: #fff;
      width: 38px;
      height: 38px;
      border-radius: 19px 19px 19px 19px;
      // background: linear-gradient(90deg, #ff8800 0%, #ffa319 100%);
      background: rgba(255, 106, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    }

    .service-btn {
      background: rgba(0, 26, 255, 0.1);
    }
  }

  .bg-default-content {
    &:hover .contact-box {
      visibility: visible;
    }
  }
</style>
