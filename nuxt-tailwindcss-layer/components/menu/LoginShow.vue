<template>
  <div class="login-btn" @click="handleLogin">
    {{ getCnOrEn('登录', 'SIGN IN') }}
  </div>
</template>

<script lang="ts" setup>
  function handleLogin() {}
</script>

<style lang="scss" scoped>
  .login-btn {
    width: 85px;
    height: 32px;
    background: #ffffff;
    border-radius: 16px 16px 16px 16px;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
    color: #333;
  }
</style>
