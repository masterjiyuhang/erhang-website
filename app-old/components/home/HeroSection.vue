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
            <div class="px-4 w-full md:w-8/12 xl:w-8/12">
              <h4
                class="font-bold font-serif mb-1 text-primary-700 dark:text-primary-200 uppercase"
              >
                {{ getCnOrEn('健康计划', 'Baby Health Plan') }}
              </h4>
              <h1 class="capitalize leading-tight mb-2 text-secondary-200">
                {{
                  getCnOrEn(
                    '数千营养计划，改善从行动开始',
                    'Thousands of nutrition plans, one act of improvement',
                  )
                }}
              </h1>
              <p class="font-semibold mb-6 text-tertiary-600">
                {{ $t('home.heroSection.start') }}
              </p>
              <BaseButton
                size="xl"
                label="Adopt Now"
                target="_blank"
                to="https://github.com"
                class="start-btn"
              >
                <div class="inline-block ml-1 p-1.5 text-lg dark:text-white">
                  {{ getCnOrEn('现在开始', 'Start Now') }}
                </div>
                <div id="container-stars">
                  <div id="stars" />
                </div>
                <div id="glow">
                  <div class="circle" />
                  <div class="circle" />
                </div>
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

<style>
  .start-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    height: 3rem;
    background-size: 300% 300%;
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
    transition: 0.5s;
    animation: gradient_301 5s ease infinite;
    border: double 4px transparent;
    background-image: linear-gradient(#05051d, #05051d),
      linear-gradient(
        137.48deg,
        #ffdb3b 10%,
        #fe53bb 45%,
        #8f51ea 67%,
        #0044ff 87%
      );
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  #container-stars {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
    background-color: #05051d;
  }

  #glow {
    position: absolute;
    display: flex;
    width: 12rem;
  }

  .circle {
    width: 100%;
    height: 30px;
    filter: blur(2rem);
    animation: pulse_3011 4s infinite;
    z-index: -1;
  }

  .circle:nth-of-type(1) {
    background: rgba(254, 83, 186, 0.636);
  }

  .circle:nth-of-type(2) {
    background: rgba(142, 81, 234, 0.704);
  }

  .start-btn:hover #container-stars {
    z-index: -1;
    background-color: #05051d;
  }

  .start-btn:hover {
    transform: scale(1.1);
  }

  .start-btn:active {
    border: double 4px #fe53bb;
    background-origin: border-box;
    background-clip: content-box, border-box;
    animation: none;
  }

  .start-btn:active .circle {
    background: #fe53bb;
  }

  #stars {
    position: relative;
    background: transparent;
    width: 200rem;
    height: 200rem;
  }

  #stars::after {
    content: '';
    position: absolute;
    top: -10rem;
    left: -100rem;
    width: 100%;
    height: 100%;
    animation: animStarRotate 90s linear infinite;
  }

  #stars::after {
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
  }

  #stars::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 170%;
    height: 500%;
    animation: animStar 60s linear infinite;
  }

  #stars::before {
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
    opacity: 0.5;
  }

  @keyframes animStar {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-135rem);
    }
  }

  @keyframes animStarRotate {
    from {
      transform: rotate(360deg);
    }

    to {
      transform: rotate(0);
    }
  }

  @keyframes gradient_301 {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes pulse_3011 {
    0% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
</style>
