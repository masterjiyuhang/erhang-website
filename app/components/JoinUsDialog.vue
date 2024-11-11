<template>
  <div class="dialog-join-us" :class="`membership-type-${dialogConfig.type}`">
    <el-dialog
      v-model="dialogFormVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="714px"
    >
      <template #header>
        <div class="dialog-join-us-title">
          <p>
            <span class="dialog-join-us-title-first">
              {{ '即刻链接全球货代' }}
            </span>
          </p>
        </div>
      </template>
      <div v-loading="isLoading" class="dialog-join-us-wrap">
        <el-form
          ref="joinUs"
          :model="form"
          :rules="rules"
          inline
          label-position="top"
        >
          <el-form-item
            :label="'姓名'"
            prop="name"
            class="mb-30px margin-right"
          >
            <el-input
              v-model="form.name"
              :placeholder="'请填写您的姓名全称'"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item :label="'国家'" prop="country" class="mb-30px">
            <CountrySelect v-model="form.country" />
          </el-form-item>
          <el-form-item
            :label="'公司英文名称'"
            prop="companyName"
            class="mb-30px"
          >
            <el-input
              v-model="form.companyName"
              class="company-name"
              :placeholder="'请填写您的公司英文名称'"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item
            v-if="isShowChineseCompany"
            :label="'公司中文名称'"
            prop="companyChineseName"
            class="mb-30px"
          >
            <el-input
              v-model="form.companyChineseName"
              class="company-name"
              :placeholder="'请填写您的公司中文名称'"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item
            :label="'邮箱'"
            prop="mail"
            class="margin-right mb-40px"
          >
            <el-input
              v-model="form.mail"
              autocomplete="off"
              :placeholder="'请填写您的企业邮箱'"
            />
          </el-form-item>
          <el-form-item :label="'手机号'" prop="tel" class="mb-40px">
            <el-input
              v-model="form.tel"
              autocomplete="off"
              :placeholder="'请填写您的手机号'"
            />
          </el-form-item>
        </el-form>
        <p class="dialog-join-us-button" @click="eventSubmitForm">
          {{ '加入会员' }}
        </p>
      </div>
    </el-dialog>
    <Verify
      ref="verifyRef"
      mode="pop"
      captcha-type="blockPuzzle"
      :img-size="{ width: '330px', height: '155px' }"
      @success="eventVerifySubmit"
    />
  </div>
</template>

<script setup>
  import Verify from './Verify/index.vue'
  import { postJoinUs } from '~/api/common'

  const REG_EMAIL =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const REG_NOT_CHINESE =
    // eslint-disable-next-line no-useless-escape
    /^[a-zA-Z0-9+.=()&\\\-*/,#'":!?;%$`。（）！@#￥%……&“”‘’：？》《，^——_\s\u3000\u0020\u00A0\n\r\-/：；（）¥@“”。，、？！.【】｛｝#%^*+=_—\/｜～《》$&·…‘\-/:;()$&@“”.,?!’\[\]{}#%^\\*\\+=_|~€£¥•，。？！～、：＃；％＊——……＆·＄（）‘’“”\[\]『』〔｛【｝】〕￥￡♀‖〖〗《》「」.@~\-,:\\*?!_#=+﹉&^;%…$()\..|·¥\[\]""{}\–'€]*$/

  const REG_NOT_QQ_MAIL = /@(qq|vip.qq).com$/i

  const dialogFormVisible = ref(false)
  const isLoading = ref(false)

  // 弹窗实例
  const joinUs = ref(null)

  const rules = reactive({
    name: [
      {
        required: true,
        message: '请填写您的姓名全称',
        trigger: 'blur',
      },
      {
        max: 128,
        trigger: 'blur',
        message: '姓名全称不能超过128个字符',
      },
    ],
    country: [
      {
        required: true,
        validator: (rule, value, callback) => {
          if (!value) {
            callback(new Error(''))
          } else {
            callback()
          }
        },
        message: '请填写您所属国家',
        trigger: 'change',
      },
    ],
    companyName: [
      {
        // required: true,
        validator: (rule, value, callback) => {
          // if (!value) {
          //   callback(new Error('请填写您的公司英文名称'))
          // } else
          if (!REG_NOT_CHINESE.test(value)) {
            callback(new Error('公司英文名称不能包括中文'))
          } else {
            callback()
          }
        },
        trigger: 'blur',
      },
      {
        min: 2,
        max: 200,
        trigger: 'blur',
        message: '公司英文名称为2-200个字符',
      },
    ],
    companyChineseName: [
      {
        required: true,
        message: '请填写您的公司中文名称',
        trigger: 'blur',
      },
      {
        min: 2,
        max: 200,
        trigger: 'blur',
        message: '公司中文名称为2-200个字符',
      },
    ],
    mail: [
      {
        required: true,
        validator: (rule, value, callback) => {
          if (!value || !REG_EMAIL.test(value)) {
            callback(new Error('请填写您的企业邮箱'))
          } else if (REG_NOT_QQ_MAIL.test(value)) {
            callback(new Error('当前不支持qq邮箱，请更换其他邮箱'))
          } else {
            callback()
          }
        },
        trigger: 'blur',
      },
      {
        max: 90,
        trigger: 'blur',
        message: '邮箱不能超过90个字符',
      },
    ],
    tel: [
      {
        max: 15,
        trigger: 'blur',
        message: '手机号不能超过15个字符',
      },
    ],
  })
  const form = reactive({
    name: '',
    companyName: '',
    companyChineseName: '',
    mail: '',
    tel: '',
    country: null,
  })

  // 表单配置
  const dialogConfig = reactive({
    type: '',
    crmMarker: '',
    qaCode: '',
    answerOptionList: [],
  })

  const verifyRef = ref()

  function eventSubmitForm() {
    joinUs.value.validate((valid) => {
      console.log('提交成功', verifyRef)
      if (valid) {
        // 调起机器人验证
        verifyRef.value.show()
        // eventVerifySubmit()
      } else {
        return false
      }
    })
  }

  const { $mitt } = useNuxtApp()

  const {
    public: {
      constant: { OPEN_JOIN_US },
    },
  } = useRuntimeConfig()

  onMounted(() => {
    getLocalInfo()
    $mitt.on(OPEN_JOIN_US, openDialog)
  })

  // 卸载时移除事件监听
  onUnmounted(() => {
    $mitt.off(OPEN_JOIN_US)
  })

  function openDialog(config) {
    Object.keys(config).forEach((key) => {
      dialogConfig[key] = config[key]
    })
    dialogFormVisible.value = true
    nextTick(() => {
      joinUs.value.clearValidate()
    })
  }

  const isShowChineseCompany = computed(() => form.country === 1)

  const userStore = useMyUserStore()

  function getLocalInfo() {
    if (userStore.userId) {
      if (userStore.userInfo) {
        form.name = userStore.userInfo.nameCn || ''
        form.mail = Decrypt(userStore.userInfo.email || '')
        form.tel = Decrypt(userStore.userInfo.mobile || '')
      }
      console.log(userStore.compInfo)
      if (userStore.compInfo) {
        form.country = userStore.compInfo.countryId
        form.companyName = userStore.compInfo.nameEn || ''
        if (isShowChineseCompany.value) {
          form.companyChineseName = userStore.compInfo.nameCn || ''
        }
      }
    }
  }

  watch(isShowChineseCompany, (nv) => {
    if (!nv) {
      form.companyChineseName = ''
      const index = rules.tel.findIndex((item) => item.required)
      if (index !== -1) {
        rules.tel.splice(index, 1)
        joinUs.value.clearValidate(['tel'])
      }
    } else {
      rules.tel.push({
        required: true,
        message: '请填写您的手机号',
        trigger: 'blur',
      })
    }
  })

  const $route = useRoute()

  function eventVerifySubmit() {
    isLoading.value = true

    //  原型上有什么字段提交什么字段
    const formData = {
      qaCode: dialogConfig.qaCode || `${getAppId()}_JOIN_US`,
      submitName: form.name,
      submitMobile: form.tel,
      submitCompany: form.companyName,
      submitEmail: form.mail,
      submitCountryId: form.country,
      submitCityId: '',
      appid: getAppId(),
      sourceChannel: '',
      submitLocale: 'cn',
      // wcc页面不要这个字段
      formInfoList:
        dialogConfig.type === 'wcc'
          ? []
          : [
              {
                code: 'CRMMarker',
                title: 'CRM标记',
                answerType: 'TEXT',
                answerText: dialogConfig.crmMarker || $route.path || '',
              },
            ],
    }

    formData.formInfoList.push({
      code: 'crmSourceLevel',
      title: 'CRM三级来源',
      answerType: 'MULTI',
      answerOptionList: [
        { key: '1', value: '平台' },
        { key: '2', value: '会员申请' },
        { key: '3', value: '中国站会员申请' },
      ],
    })
    if (
      dialogConfig.answerOptionList &&
      dialogConfig.answerOptionList.length > 0
    ) {
      formData.formInfoList.push({
        code: 'crmSourceLevel',
        title: 'CRM三级来源',
        answerType: 'MULTI',
        answerOptionList: dialogConfig.answerOptionList,
      })
    }
    if (isShowChineseCompany.value) {
      formData.formInfoList.push({
        code: 'companyChineseName',
        title: 'membership.dialog.companyChinese',
        answerType: 'TEXT',
        answerText: form.companyChineseName,
      })
    }
    // sourceChannel
    if (sessionStorage.getItem('prjId')) {
      formData.sourceChannel = sessionStorage.getItem('prjId')
      formData.formInfoList.push({
        code: 'prjId',
        title: '推广渠道',
        answerType: 'TEXT',
        answerText: sessionStorage.getItem('prjId'),
      })
    }
    // // 调接口 postJoinUs
    postJoinUs(formData)
      .then(() => {
        // 提交成功
        ElMessageBox.alert(`<p class="icon"></p><p class="desc">提交成功</p>`, {
          customClass: `membership-type-${dialogConfig.type} join-us-success`,
          dangerouslyUseHTMLString: true,
          showClose: false,
          confirmButtonText: '好',
          callback: () => {
            dialogFormVisible.value = false
          },
        })
      })
      .catch((e) => {
        console.error(e)
      })
      .finally(() => {
        isLoading.value = false
      })
  }
</script>

<style scoped lang="scss">
  @import url('~/assets/scss/dialog-reset.scss');
  @import url('~/assets/scss/memberShip.scss');

  .dialog-join-us {
    // https://blog.51cto.com/u_15072780/4384326
    :deep(.el-select-dropdown) {
      position: absolute !important;
      top: 50px !important;
      left: 0 !important;
    }

    :deep(.mask) {
      z-index: 9999;
    }

    :deep(.el-form) {
      padding-bottom: 10px;
      .el-form-item {
        margin-right: 0;
        padding-bottom: 10px;

        &.margin-right {
          margin-right: 20px;
        }

        &.is-error {
          .company-search {
            border-color: #f56c6c;
          }
        }

        .el-form-item__label {
          padding-bottom: 10px;
          color: #232324;
          font-size: 14px;
          font-weight: 500;
          line-height: 1;
        }

        .el-form-item__content {
          .el-form-item__error {
            word-break: break-word;
          }
        }
        .el-input__wrapper {
          padding: 0;
        }
        .el-input__inner {
          width: 311px;
          height: 48px;
          padding: 0 16px;
          background: unset;
        }
      }
    }

    :deep(.el-form-item).is-required:not(.is-no-asterisk)
      > .el-form-item__label::before {
      display: none;
    }

    :deep(.el-form-item).is-required:not(.is-no-asterisk)
      > .el-form-item__label::after {
      content: '*';
      margin-left: 4px;
      color: #f52c5c;
    }

    .dialog-join-us-title {
      color: #fff;
      font-family: Poppins-Bold Italic;
      font-size: 20px;
      font-style: italic;
      font-weight: bold;

      .dialog-join-us-title-first {
        font-family: Poppins-Italic;
        font-weight: normal;
      }
    }

    .dialog-join-us-wrap {
      .company-name {
        :deep(.el-input__inner) {
          width: 646px;
        }
      }

      .dialog-join-us-button {
        position: relative;
        width: 100%;
        height: 48px;
        border-radius: 16px;
        background: linear-gradient(90deg, #ff5000 0%, #ff8f12 100%);
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        line-height: 48px;
        text-align: center;
        cursor: pointer;

        &::before {
          content: '';
          position: absolute;
          right: 0;
          bottom: 100%;
          left: 0;
          height: 28px;
          border-radius: 0;
          background: linear-gradient(
            180deg,
            rgb(255 255 255 / 0%) 0%,
            #fff 100%
          );
        }
      }

      :deep(.company-search) {
        padding: 0;
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        background: unset;
        box-shadow: none;

        .company-search-left .company-search-left-content {
          padding-right: 0;

          .company-search-left-content-wrap
            .company-search-left-content-wrap-country {
            width: auto;
            margin-right: 0;
            padding-left: 0;
          }
        }
      }
    }
  }
</style>

<style lang="scss">
  @import url('~/assets/scss/memberShip.scss');
  .el-message-box__content {
    display: flex;
    justify-content: center;
  }
  .el-message-box__btns {
    display: flex;
    justify-content: center;
  }

  .join-us-success {
    text-align: center;
    z-index: 99999;

    .el-message-box__header {
      display: none;
    }

    .el-message-box__content {
      padding: 40px;
      padding-bottom: 24px;

      .icon {
        width: 150px;
        height: 150px;
        margin: 0 auto;
        background-image: url('https://resources.jctrans.com/res/hzh/pc/img/zwz-icon_success_pre.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }

      .desc {
        color: #232324;
        font-family: Poppins-SemiBold, Poppins;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
      }
    }
    .el-message-box__btns {
      padding: 0 40px 40px;
      text-align: center;

      .el-button {
        width: 188px;
        height: 48px;
        border: 1px solid #ff6a00;
        border-radius: 4px;
        background-color: unset !important;
        color: #ff6a00;
        font-family: Poppins-Regular, Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
      }
    }
  }
  .is-message-box {
    z-index: 9999999 !important;
  }

  .dialog-join-us.el-select-dropdown.company-search {
    z-index: 9999 !important;
  }
</style>
