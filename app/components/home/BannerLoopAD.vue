<template>
  <div>
    <ClientOnly>
      <el-carousel
        trigger="click"
        height="298px"
        :interval="32000"
        indicator-position="none"
        class="relative"
      >
        <el-carousel-item
          v-for="(item, itemIndex) in splitArrayIntoGroups(currentList, 8)"
          :key="itemIndex"
          :label="'a'"
        >
          <!-- 内侧 -->
          <el-carousel
            height="250px"
            arrow="never"
            :interval="4000"
            :autoplay="true"
            pause-on-hover
            indicator-position="outside"
            class="inside-carousel"
          >
            <el-carousel-item
              v-for="(subItem, subItemIndex) in item"
              :key="subItemIndex"
              :label="subItem?.title ?? '暂无内容'"
              :class="'text-white'"
            >
              <div
                class="small justify-center w-full h-full"
                :class="['bg-contain']"
                @click="openByLink(subItem?.link)"
              >
                <!-- eslint-disable-next-line vue/html-self-closing -->
                <img
                  v-if="subItem?.image"
                  :src="subItem?.image"
                  alt=""
                  class="w-full h-full"
                />
              </div>
            </el-carousel-item>
          </el-carousel>
        </el-carousel-item>
      </el-carousel>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
  import { isClient } from '@vueuse/core'
  import { getDefaultApi, getLevel4AdApi } from '~/api/home'
  import { fetchAdData } from '~/utils'

  const currentList = useState(() => [])

  async function getLoopAdList() {
    const promises = Array.from({ length: 24 }, (_, index) => {
      const formattedIndex = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`
      return getLevel4AdApi(`CLS-1-1007-10070${formattedIndex}`)
    })

    const defaultPromises = Array.from({ length: 24 }, (_, index) => {
      const formattedIndex = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`
      return getDefaultApi(`CLS-1-1007-10070${formattedIndex}`)
    })

    await fetchAdData(defaultPromises, promises)
      .then((adList: any[]) => {
        currentList.value = adList
      })
      .catch((error) => {
        console.log(
          '🚀 ~ file: BannerLoopAD.vue:77 ~ getLoopAdList ~ error:',
          error,
        )
      })
  }
  if (!isClient) {
    await getLoopAdList()
  }
</script>

<style lang="css" scoped>
  .el-carousel__item:nth-child(2n) {
    background-color: #f5f5f5;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #f5f5f5;
  }
</style>
<style lang="scss">
  .inside-carousel {
    background-color: #f5f5f5;
    .el-carousel__item:nth-child(2n) {
      background-color: #f80;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #fff;
    }

    .el-carousel__indicators--outside {
      display: flex;
      @apply space-x-0.5;

      .el-carousel__indicator {
        padding: 0;
        @apply mt-1.5;

        .el-carousel__button {
          background-color: #ffffff;
          border-radius: 4px 4px 4px 4px;
          padding: 10px 3px 10px 3px;
          width: 79px;
          color: #242323;
          font-size: 12px;
          @apply truncate;

          &:hover {
            background-color: #ff6a00;
            color: #fff;
          }
        }
      }

      .is-active {
        .el-carousel__button {
          background-color: #ff6a00;
          color: #fff;
        }
      }
    }
  }
</style>
