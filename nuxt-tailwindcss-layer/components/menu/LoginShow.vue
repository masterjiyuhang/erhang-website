<!-- eslint-disable vue/html-self-closing -->
<template>
  <!-- 登陆按钮 -->
  <ClientOnly>
    <div
      v-if="!userStore.userId"
      class="login-btn flex items-center justify-center"
      @click="handleLogin"
    >
      <!-- {{ getCnOrEn('登录', 'SIGN IN') }} -->
      登录
    </div>

    <el-dropdown v-else placement="bottom">
      <div class="user-dorp">
        <img
          class="account-logo mr-2"
          :src="currentUserLogo || defaultAccountLogo"
          alt=""
        />
        <div
          class="account-title"
          :class="[
            'max-w-[68px] truncate inline-block cursor-pointer',
            isWhite ? 'text-white' : 'text-paper',
          ]"
        >
          <!-- {{ getCnOrEn('个人中心', 'Account') }} -->
          个人中心
        </div>
      </div>

      <template #dropdown>
        <div class="user-drop-down">
          <div class="flex">
            <img
              class="user-drop-down-account-logo mr-2"
              :src="currentUserLogo || defaultAccountLogo"
              alt=""
            />
            <div>
              <p class="user-drop-down-account-title truncate">
                {{
                  userStore.userNameCn ||
                  userStore.userNameEn ||
                  userStore.userInfo?.account
                }}
              </p>
              <p class="user-drop-down-account-company truncate">
                {{ userStore.companyNameCn || '' }}
              </p>
              <div class="h-5 mt-1 flex items-center"></div>
            </div>
          </div>
          <div class="flex flex-wrap my-6">
            <div
              v-for="(item, index) in menuList"
              :key="index"
              class="user-vip-wrapper"
              @click="handleDropdownItem(item)"
            >
              <img :src="item.icon" alt="My Dashboard" class="w-6 h-6" />
              <p>
                <!-- {{ getCnOrEn(item.titleCn, item.title) }} -->
                {{ item.titleCn }}
              </p>
            </div>
          </div>
          <div class="dead-line" />
          <div class="mt-2">
            <div class="sign-out-btn" @click="logOutConfirm">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon/nav/signout" clip-path="url(#clip0_5006_77017)">
                  <g id="Group 371">
                    <path
                      id="Rectangle 519"
                      d="M12.0326 1.375H3.39624C2.84396 1.375 2.39624 1.82272 2.39624 2.375V13.625C2.39624 14.1773 2.84396 14.625 3.39624 14.625H12.0326"
                      stroke="#B7BCC0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <g id="Group 370">
                      <path
                        id="Vector 134"
                        d="M8.2146 8.00781H14.0229"
                        stroke="#B7BCC0"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector 135"
                        d="M11.6997 5.10156L14.6039 8.00573L11.6997 10.9099"
                        stroke="#B7BCC0"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_5006_77017">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <span class="ml-1 cursor-pointer">
                <!-- {{ getCnOrEn('退出登录', 'Sign Out') }} -->
                退出登录
              </span>
            </div>
          </div>
        </div>
      </template>
    </el-dropdown>
  </ClientOnly>
</template>

<script lang="ts" setup>
  import defaultAccountLogo from '@/assets/images/header/defaultAccountLogo.jpg'
  import icon_nav_account from '@/assets/images/header/account/icon_nav_account@2x.png'
  import icon_nav_dashboard from '@/assets/images/header/account/icon_nav_dashboard@2x.png'
  import icon_nav_service from '@/assets/images/header/account/icon_nav_service@2x.png'
  import icon_nav_store from '@/assets/images/header/account/icon_nav_store@2x.png'

  defineProps({
    isWhite: { type: Boolean, default: false },
  })

  const route = useRoute()
  const userStore = useMyUserStore()
  const systemStore = useMySystemStore()
  const { navigateToLocalizedPath } = usePath()

  const userInfoList = ref([
    {
      title: 'My Dashboard',
      titleCn: '我的工作台',
      icon: icon_nav_dashboard,
      code: 'Dashboard',
    },
    {
      title: 'Account Settings',
      titleCn: '账号设置',
      icon: icon_nav_account,
      code: 'Account Information',
    },
    {
      title: 'Store Settings',
      titleCn: '商铺设置',
      icon: icon_nav_store,
      code: 'Store Information',
    },
    {
      title: 'Customer Service',
      titleCn: '客服中心',
      icon: icon_nav_service,
      code: 'Customer Service',
    },
  ])
  const currentUserLogo = computed(() => userStore.userInfo?.headPortrait)
  
  const menuList = computed(() => {
    let res = [...userInfoList.value]
    if (![1, 75, 71, 100].includes(userStore.compInfo?.countryId)) {
      res = res.filter(item => item.code != 'Store Information')
    }
    if (!userStore.isShopCustomerService) {
      res = res.filter(item => item.code != 'Customer Service')
    }
    return res
  })
  const { $JCIM } = useNuxtApp()

  function handleLogin() {
    go2LoginPage(route.fullPath)
  }

  async function handleDropdownItem(e) {
    switch (e.code) {
      case 'logout':
        logOutConfirm()
        break
      // 账号信息
      case 'Account Information':
        openPageByAppId('JCB', '/accountSetting')
        break

      // // 企业信息
      // case 'Company Information':
      //   openPageByAppId('JCB', '/companyInfo')
      //   break

      // // 企业账号管理
      // case 'Company Account':
      //   openPageByAppId('JCB', '/companyAccount')
      //   break

      // 客服中心
      case 'Customer Service':
        try {
          await $JCIM?.openIMSendMsg({ id: userStore.compId, text: '' })
          console.log('消息发送成功')
        } catch (error) {
          console.error('发送消息时出错:', error)
          ElMessage.error('IM加载中，请稍后再试')
        }
        break

      case 'Store Information':
        openPageByAppId('JCB', '/forwarder/shopSetting/information')
        break

      case 'Dashboard':
        openPageByAppId('JCB', '/')
        break

      default:
        break
    }
  }
  function handleVisibilityChange() {}

  function logOutConfirm() {
    // 显示自定义确定按钮颜色的MessageBox
    ElMessageBox({
      message: '是否确定退出登录？',
      confirmButtonText: `确认`,
      cancelButtonText: `取消`,
      title: '',
      showCancelButton: true,
      confirmButtonClass: 'custom-confirm-button-class',
      cancelButtonClass: 'custom-cancel-button-class',
    }).then(async () => {
      await systemStore.logout().then(() => {
        navigateToLocalizedPath('/')
        location.reload()
      })
    })
  }
</script>

<style lang="scss" scoped>
  .user-dorp {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 124px;
    height: 40px;
    border-radius: 40px;

    &:hover {
      background: rgb(35 35 36 / 5%);
      color: #232324;
    }

    .account-logo {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    .account-title {
      width: 68px;
      height: 24px;
      font-family: Poppins-M, Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
      text-transform: none;
    }
  }

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

  .account-title {
    width: 68px;
    height: 24px;
    font-family: Poppins-M, Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    text-transform: none;
  }

  .dead-line {
    height: 2px;
    border: 1px dashed #b7bcc0;
  }

  .sign-out-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 288px;
    height: 44px;
    border-radius: 8px;
    color: #5e5f64;
    font-family: Poppins-R, Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
  }

  .user-drop-down {
    width: 336px;
    padding: 24px 24px 12px;
    border-radius: 16px;
    background: #fff;
    box-shadow: 0 8px 40px 0 rgb(97 98 101 / 8%);

    .user-vip-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 140px;
      height: 72px;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        border-radius: 4px;
        background: #f8f8f8;
      }
    }

    .user-drop-down-account-logo {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    .user-drop-down-account-title {
      max-width: 220px;
      height: 26px;
      color: #232324;
      font-family: Poppins-B, Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: bold;
      line-height: 26px;
      text-align: left;
      text-transform: none;
    }

    .user-drop-down-account-company {
      height: 20px;
      margin-top: 2px;
      color: #5e5f64;
      font-family: Poppins-R, Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      text-align: left;
      text-transform: none;
      word-break: break-all;
    }
  }
</style>

<style>
  .custom-confirm-button-class,
  .custom-cancel-button-class {
    padding: 8px 15px !important;
    font-size: 14px;
    font-weight: normal;
  }
</style>
