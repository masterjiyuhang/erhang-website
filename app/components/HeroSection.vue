<template>
  <div class="container mx-auto pb-12 px-4">
    <div
      class="bg-center bg-cover bg-no-repeat blur-none rounded-3xl z-0"
      :style="bgStyles"
    >
      <div class>
        <div class="lg:px-12 md:py-36 pb-6 pt-72 px-6 relative rounded-3xl">
          <div
            class="-mx-4 flex flex-wrap items-center mt-24 space-y-6 lg:space-y-0"
          >
            <div class="px-4 w-full md:w-8/12 xl:w-6/12">
              <h4
                class="font-bold font-serif mb-1 text-primary-700 dark:text-primary-200 uppercase"
              >
                Baby Health Plan
              </h4>
              <h1 class="capitalize leading-tight mb-2 text-white">
                Thousands of nutrition plans, one act of improvement
              </h1>
              <p class="font-thin mb-6 text-gray-300">
                <!-- 今天就开始你的健康饮食之旅吧！我们提供各种美味又营养的食物，帮助你成长得更健康。快来加入我们，让我们一起发现健康饮食的乐趣吧！ -->
                Start your healthy eating journey today! We offer a variety of
                delicious and nutritious foods to help you grow healthier. Come
                join us and let's discover the joy of healthy eating together!
              </p>
              <BaseButton
                size="xl"
                label="Adopt Now"
                target="_blank"
                to="https://github.com/pinegrow/happy-paws-with-nuxt-tailwindcss"
              >
                <div class="inline-block ml-1 p-1.5 text-lg">Start Now</div>
                <BaseIcon
                  name="i-streamline-emojis-face-savoring-food"
                  height="28px"
                />
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { heroImageUrl } from '@/utils/hero'

  const { optimizeImage } = useOptimizeImage()
  const herpImageOptimized = {
    alt: `hero`,
    cover: true,
    ...optimizeImage(
      heroImageUrl,
      {
        placeholder: false,
      },
      true,
    ),
  }
  const heroImage = herpImageOptimized.src
  const bgStyles = herpImageOptimized.bgStyles
</script>

<style></style>
