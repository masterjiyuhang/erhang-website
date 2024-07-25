<template>
  <div class="curve-shape">
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 3841 120"
      style="overflow: scroll; enable-background: new 0 0 3841 120"
      xml:space="preserve"
    >
      <path
        style="fill: #3a86ff; stroke-miterlimit: 10"
        d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"
      />
    </svg>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="postcss">
  .curve-shape {
    overflow-x: hidden;

    @keyframes move-left {
      0% {
        /* left: 0; */
        left: -100%;
      }

      to {
        /* left: -100%; */
        left: 0;
      }
    }

    svg {
      animation: move-left 6s linear infinite;
      position: relative;
      width: 200%;
      vertical-align: middle;
    }
  }
</style>
