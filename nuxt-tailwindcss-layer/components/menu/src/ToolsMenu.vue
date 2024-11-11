<template>
  <div class="tools-panel">
    <div class="flex-1">
      <div class="panel-content">
        <div
          v-for="(item, index) in currentItem.children"
          :key="index"
          class="panel-item relative w-1/4"
          :class="currentIndex === index ? 'panel-item-active' : ''"
          @mouseover.stop="handleMouseOver(item, index)"
          @mouseleave.stop="handleMouseLeave"
          @click="openByLink(item.link)"
        >
          <!--  eslint-disable-next-line vue/html-self-closing -->
          <img :src="item.icon" alt="" class="w-10 h-10 mr-2 shrink-0" />
          <div class="flex-1">
            <p
              class="title relative mb-1"
              :class="currentIndex === index ? 'title-active' : ''"
            >
              {{ item.nameCn }}
            </p>
            <p
              class="desc"
              :class="currentIndex === index ? 'desc-active' : ''"
            >
              {{ item.desc }}
            </p>
          </div>
          <svg
            class="absolute right-0 top-4px arrow-icon"
            :class="currentIndex === index ? 'visible' : 'hidden'"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icon/more/slope/nor">
              <g id="Group 168">
                <path
                  id="Vector 16"
                  d="M11.8951 4.32813C10.9523 5.27093 8.50102 6.59087 6.23828 4.32812"
                  stroke="#727377"
                  stroke-width="1.5"
                />
                <path
                  id="Vector 17"
                  d="M11.8955 4.32752C10.9527 5.27033 9.63277 7.72163 11.8955 9.98438"
                  stroke="#727377"
                  stroke-width="1.5"
                />
                <path
                  id="Vector 18"
                  d="M11.8974 4.32277L3.3999 12.8203"
                  stroke="#727377"
                  stroke-width="1.5"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    currentItem: {
      type: Object,
      default: () => {},
    },
  })

  const currentIndex = ref(-1)
  function handleMouseOver(_item, index) {
    currentIndex.value = index
  }

  function handleMouseLeave() {
    currentIndex.value = -1
  }
</script>

<style lang="scss" scoped>
  .tools-panel {
    .panel-content {
      display: flex;
      flex-flow: row wrap;

      .panel-item-active {
        border-radius: 8px;
        background: #f8f8f8;
      }

      .panel-item {
        display: flex;
        width: calc(25% - 20px);
        margin-right: 24px;
        margin-bottom: 24px;
        padding: 8px;

        &:nth-child(4n) {
          margin-right: 0;
        }

        .title {
          color: #5e5f64;
          font-family: Poppins-S, Poppins;
          font-size: 15px;
          font-weight: bold;
          line-height: 23px;
          text-align: left;

          // .arrow-icon {
          //   // transition: all 0.3s ease;
          // }
        }

        .title-active {
          border-radius: 8px;
          background: #f8f8f8;
          color: #232324;

          .arrow-icon {
            animation: move-arrow 0.6s infinite;
          }
        }

        .desc {
          color: #727377;
          font-family: Poppins-R, Poppins;
          font-size: 13px;
          font-weight: 400;
          line-height: 20px;
          text-align: left;
        }
      }
    }
  }
</style>
