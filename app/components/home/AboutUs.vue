<template>
  <div class="py-10">
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center justify-center">
        <div class="lg:w-1/3 w-full">
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
        <div class="lg:w-2/3 w-full">
          <div class="pl-20 md:pl-5 sm:pl-1">
            <div>
              <h3>{{ getCnOrEn('关于我们', 'About Us') }}</h3>
              <h2>
                {{
                  getCnOrEn(
                    '我们受到实现目标的渴望所激励。',
                    "We're motivated by the desire to achieve.",
                  )
                }}
              </h2>
            </div>
            <p class="mb-10 break-words max-w-full leading-6 text-lg">
              {{
                getCnOrEn(
                  '为了让你实现你能力范围内的事情，你需要不断地为自己设定目标。',
                  `In order for you to achieve the things you are capable of, you
              need to constantly be creating goals for yourself.`,
                )
              }}
            </p>
            <NuxtLinkLocale to="/products" class="inline-block group">
              <span class="pr-5">{{
                getCnOrEn('更多内容', 'More Details')
              }}</span>
              <i
                class="iconfont icon-right-arrow transition-all group-hover:translate-x-2"
              />
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
