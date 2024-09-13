<template>
  <div
    class="background flex items-center justify-center min-h-screen relative p-3"
  >
    <div
      class="absolute top-0 left-0 w-full h-full bg-secondary-300 bg-opacity-50"
    />
    <div
      class="shadow-lg shadow-slate-500 backdrop-blur p-3 relative rounded-sm overflow-hidden border-sky-100 w-full"
    >
      <div
        class="flex p-5 px-10 bg-opacity-[.8] mb-5 absolute top-0 w-full left-0"
      >
        <div class="space-y-3">
          <h1>hshs</h1>
        </div>
        <div
          class="ml-auto text-3xl text-gray-300 font-bold invisible sm:visible"
        >
          login-page
        </div>
      </div>
      <section class="max-w-6xl m-auto w-full mt-32">
        <div
          class="flex backdrop-blur items-center rounded-sm overflow-hidden h-[350px]"
        >
          <section class="flex-1 h-full hidden lg:block">
            <el-carousel class="h-full min-w-[500px]">
              <el-carousel-item>
                <div
                  class="h-full bg-[url('https://erhang-cdn.imgix.net/Pika.gif?s=0d394ab763b07fa13927a48c069d801c')] bg-no-repeat bg-cover"
                />
              </el-carousel-item>
              <el-carousel-item>
                <div
                  class="h-full bg-[url('https://erhang-cdn.imgix.net/Pika.gif?s=0d394ab763b07fa13927a48c069d801c')] bg-no-repeat bg-cover"
                />
              </el-carousel-item>
              <el-carousel-item>
                <div
                  class="h-full bg-[url('https://erhang-cdn.imgix.net/Pika.gif?s=0d394ab763b07fa13927a48c069d801c')] bg-no-repeat bg-cover"
                />
              </el-carousel-item>
            </el-carousel>
          </section>
          <section class="min-w-[350px] h-full m-auto">
            <div class="bg-secondary-100 bg-opacity-50 p-3 h-full">
              <div
                class="text-slate-50 text-2xl font-baloo font-bold text-center"
              >
                Login to your Account
              </div>
              <div>
                <el-form
                  ref="loginFormRef"
                  class="login-form mt-5"
                  :model="form"
                  label-width="0px"
                >
                  <el-form-item prop="username">
                    <el-input
                      v-model="form.username"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      size="large"
                      placeholder="Username"
                      :prefix-icon="User"
                    />
                  </el-form-item>
                  <el-form-item prop="password">
                    <el-input
                      v-model="form.password"
                      class="bg-none"
                      size="large"
                      :type="state.showPassword ? '' : 'password'"
                      placeholder="Password"
                      :prefix-icon="Lock"
                    >
                      <template #suffix>
                        <el-icon
                          class="cursor-pointer"
                          @click="state.showPassword = !state.showPassword"
                        >
                          <el-icon-view v-if="state.showPassword" />
                          <el-icon-Hide v-else />
                        </el-icon>
                      </template>
                    </el-input>
                  </el-form-item>
                  <div class="text-right pb-5">
                    <el-link round class="mtext-right"
                      >Forget Password?</el-link
                    >
                  </div>
                  <el-form-item>
                    <div class="w-full text-center">
                      <el-button
                        class="w-[90%]"
                        round
                        type="primary"
                        size="large"
                        @click="signIn"
                        >Sign In</el-button
                      >
                    </div>
                    <div class="w-full text-center">
                      <el-button round type="" class="w-[90%]" size="large"
                        >Sign Up</el-button
                      >
                    </div>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Lock, User } from '@element-plus/icons-vue'
  import { useCssVar } from '@vueuse/core'
  definePageMeta({
    hidden: true, // 隐藏menu  不在nav上展示
    name: 'Login',
  })

  const { vueApp } = useNuxtApp()

  const state = reactive({
    showPassword: false,
    form: {
      username: 'erhang',
      password: '123456',
    },
  })
  const form = ref(state.form)
  const signIn = async (e) => {}

  const loginFormRef = ref(null)

  const color1 = useCssVar('--el-text-color-placeholder', loginFormRef)
  color1.value = '#fff'
</script>

<style lang="scss" scoped>
  .background {
    --el-text-color-regular: #333;
    --el-input-focus-color: transparent;
    --tw-ring-color: red;

    background: url('https://erhang-cdn.imgix.net/ware.jpg?s=d14fe7d5a702027c426112a22f121f3d');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
</style>
<style lang="scss">
  .el-carousel__container {
    height: 100%;
  }
  button {
    display: block;
    border: 1px solid;
    padding: 8px;
    margin: 8px;
    border-radius: 5px;
  }

  .login-form {
    .el-form-item .el-form-item__content .el-input .el-input__wrapper {
      background-color: initial;
    }
  }
</style>
