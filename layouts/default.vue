<!-- components/BaseLayout.vue -->
<template>
  <div class="layout">
    <!-- 顶部导航 -->
    <header class="layout__header">
      <nav class="nav">
        <div class="nav__logo">LOGO</div>
        <ul class="nav__menu">
          <li><NuxtLink to="/">首页</NuxtLink></li>
          <li><NuxtLink to="/about">关于</NuxtLink></li>
          <li><NuxtLink to="/contact">联系我们</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- 主体内容区，可滚动 -->
    <main class="layout__main">
      <slot />
    </main>

    <!-- 底部版权 -->
    <footer class="layout__footer">
      © 2025 Your Company. All Rights Reserved.
    </footer>
  </div>
</template>

<script setup lang="ts">
  // 这里如果需要引入 composable 或者 props 可以在这里补充
</script>

<style scoped lang="scss">
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #f5f5f5;

    &__header {
      flex: 0 0 auto;
      background: #fff;
      box-shadow: 0 2px 4px rgba(#000, 0.1);
    }

    &__main {
      flex: 1 1 auto;
      overflow-y: auto;
      padding: 1rem;
      background: #fafafa;
    }

    &__footer {
      flex: 0 0 auto;
      background: #333;
      color: #fff;
      text-align: center;
      padding: 1rem 0;
    }
  }

  /* 顶部导航样式 */
  .nav {
    max-width: 1200px;
    margin: 0 auto;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 1rem;

    &__logo {
      font-size: 1.25rem;
      font-weight: bold;
    }

    &__menu {
      display: flex;
      margin-left: auto;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-left: 1.5rem;
        a {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          &:hover {
            color: #007acc;
          }
        }
      }
    }
  }

  /* 针对手机端折叠菜单可自行扩展 */
  @media (max-width: 768px) {
    .nav__menu {
      display: none; // 手机端这里可以改成汉堡按钮展开
    }
  }
</style>
