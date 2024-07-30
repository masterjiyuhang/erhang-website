<template>
  <div class="py-10">
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center justify-center">
        <div class="lg:w-1/2 w-full">
          <NuxtImg
            class="object-cover px-3"
            src="/images/panada1.png"
            alt="Hero image"
            loading="eager"
            fetchpriority="high"
            preload
            placeholder
            placeholder-class="blur-xl"
          />
        </div>
        <div class="lg:w-1/2 w-full">
          <div class="pl-20 md:pl-5 sm:pl-1">
            <div>
              <h3>ABOUT US</h3>
              <h2>We're motivated by the desire to achieve.</h2>
            </div>
            <p class="mb-10 break-words max-w-full leading-6 text-lg">
              In order for you to achieve the things you are capable of, you
              need to constantly be creating goals for yourself.
            </p>
            <a href="" class="inline-block group">
              <span class="pr-5">More Details</span>
              <i
                class="iconfont icon-right-arrow transition-all group-hover:translate-x-2"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
