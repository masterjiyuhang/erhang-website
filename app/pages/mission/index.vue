<template>
  <div class="container relative">
    <div
      class="py-32 bg-lime-50 dark:bg-neutral-950 border-b-red-300 border border-x-0 border-t-0 flex flex-wrap"
    >
      <div class="lg:w-full lg:flex-auto">
        <div class="text-center">
          <h5 class="text-primary-500 text-xl">How We Do</h5>
          <div class="h-8" />
          <h3 class="text-secondary-500 text-3xl">Creative Procedure</h3>
        </div>
      </div>
      <div class="flex mt-6 lg:w-full sm:mt-3 sm:flex-wrap mission-content">
        <div
          v-for="item in 3"
          :key="item"
          class="flex-1 px-3 relative mt-10 translate-x-0 mission-content-item"
        >
          <div class="line" />
          <div class="dot-wrap">
            <div class="dot">
              <div class="count">{{ item }}</div>
            </div>
          </div>
          <div class="content">
            <h5>Approaching</h5>
            <p>
              quickly translate the visions into reality and patent possible
              approaches.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-[#222] text-warning-50 font-bold mx-0 flex items-center flex-wrap"
    >
      <div class="w-full lg:w-1/4 xl:w-5/12 text-center px-0 sm:py-20">
        <!-- Our Mission -->
        Our Mission
      </div>
      <div class="lg:w-3/4 xl:w-7/12">02</div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .mission-content {
    .mission-content-item {
      &:first-child .line {
        display: none;
      }
    }
  }
  .line {
    background: #ddd;
    height: 1px;
    position: absolute;
    right: 100%;
    top: 40px;
    transform: translateX(50%);
    width: 60%;
  }
  .dot-wrap {
    height: 80px;
    margin: 0 auto 24px;
    max-width: 270px;
    position: relative;
    width: 80px;

    .dot {
      background: #0038e3;

      &:before {
        height: 80px;
        opacity: 0.3;
        width: 80px;
        background: inherit;
        border-radius: 50%;
        content: '';
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      &:after {
        height: 60px;
        opacity: 0.7;
        width: 60px;
        background: inherit;
        border-radius: 50%;
        content: '';
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .count {
      background: inherit;
      border-radius: 50%;
      color: #fff;
      font-family: Poppins, sans-serif;
      font-size: 16px;
      font-weight: 600;
      height: 40px;
      left: 50%;
      line-height: 40px;
      position: absolute;
      text-align: center;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      z-index: 3;
    }
  }

  .content {
    background: #fff;
    color: #000;
    box-shadow: 0 10px 30px rgb(0, 0, 0, 0.6);
    filter: drop-shadow(0 10px 30px rgb(0, 0, 0, 0.6));
    margin: 0 auto;
    max-width: 270px;
    padding: 38px 30px 44px;
    position: relative;
    text-align: center;
    transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;

    &:hover {
      background: #222222;
      color: #fff;

      &:before {
        border-bottom-color: #222222; /* 修改此处 */
      }
    }

    &:before {
      border-bottom: 13px solid #fff;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      bottom: 100%;
      content: '';
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
      transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
</style>
