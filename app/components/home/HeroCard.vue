<template>
  <section class="container grid gap-4 py-24 md:grid-cols-2 lg:grid-cols-4">
    <div class="flex items-center gap-8 p-8 bg-white rounded-lg card">
      <NuxtImg
        src="/icons/box.svg"
        width="60"
        height="60"
        alt="Free Shipping"
        loading="lazy"
      />
      <div>
        <h3 class="text-xl font-semibold">Free Shipping</h3>
        <p class="text-sm">Free shipping on order over €50</p>
      </div>
    </div>
    <div class="flex items-center gap-8 p-8 bg-white rounded-lg card">
      <NuxtImg
        src="/icons/moneyback.svg"
        width="60"
        height="60"
        alt="Money Back"
        loading="lazy"
      />
      <div>
        <h3 class="text-xl font-semibold">Peace of Mind</h3>
        <p class="text-sm">30 days money back guarantee</p>
      </div>
    </div>
    <div class="flex items-center gap-8 p-8 bg-white rounded-lg card">
      <NuxtImg
        src="/icons/secure.svg"
        width="60"
        height="60"
        alt="Secure Payment"
        loading="lazy"
      />
      <div>
        <h3 class="text-xl font-semibold">100% Payment Secure</h3>
        <p class="text-sm">Your payment are safe with us.</p>
      </div>
    </div>
    <div class="flex items-center gap-8 p-8 bg-white rounded-lg card">
      <NuxtImg
        src="/icons/support.svg"
        width="60"
        height="60"
        alt="Support 24/7"
        loading="lazy"
      />
      <div>
        <h3 class="text-xl font-semibold">Support 24/7</h3>
        <p class="text-sm">24/7 Online support</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
  .card {
    transition: all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
    cursor: pointer;
    user-select: none;
  }
  .card:hover {
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
</style>
