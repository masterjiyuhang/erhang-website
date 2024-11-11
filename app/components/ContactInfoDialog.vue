<template>
  <el-dialog
    v-model="dialogFormVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="714px"
    @open="handleOpen"
  >
    <div class="flex flex-col items-center justify-center">
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <img :src="currentContactInfo.logoFile" alt="" class="w-40 h-[90px]" />
      <div class="text-paper font-bold text-base">
        {{
          currentContactInfo.companyNameCn ||
          currentContactInfo.companyNameEn ||
          currentContactInfo.staffNameCn
        }}
      </div>

      <div class="grid grid-cols-2 gap-4 my-5">
        <div class="flex items-center justify-start flex-1 min-w-64">
          <svg
            t="1729654600434"
            class="icon size-4"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7054"
            width="200"
            height="200"
          >
            <path
              d="M694.874353 918.949647c-57.825882-2.108235-221.726118-24.696471-393.336471-196.367059-171.610353-171.550118-194.258824-335.450353-196.367058-393.33647-3.252706-88.124235 64.271059-173.778824 142.336-207.209412a59.030588 59.030588 0 0 1 58.006588 6.324706c64.210824 46.863059 108.604235 117.639529 146.672941 173.357176 17.227294 25.178353 13.071059 59.512471-10.24 79.75153L363.52 439.717647a19.275294 19.275294 0 0 0-5.722353 24.696471c17.709176 32.346353 49.332706 80.353882 85.473882 116.495058 36.141176 36.141176 86.437647 69.752471 120.952471 89.509648a19.395765 19.395765 0 0 0 25.840941-6.445177l50.959059-77.703529c19.516235-25.961412 56.018824-31.623529 82.582588-13.251765 56.500706 39.092706 122.458353 82.642824 170.706824 144.444235a59.030588 59.030588 0 0 1 7.589647 59.632941c-33.611294 78.426353-118.663529 145.167059-207.088941 141.914353z"
              p-id="7055"
              fill="#ff8800"
            />
          </svg>
          <span>
            {{
              (currentContactInfo &&
                (currentContactInfo.privateNumber ||
                  currentContactInfo.tel ||
                  currentContactInfo.mobile)) ||
              '-'
            }}</span
          >
        </div>
        <div class="flex items-center justify-start flex-1 min-w-64">
          <svg
            t="1729654670782"
            class="icon size-4"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7257"
            width="200"
            height="200"
          >
            <path
              d="M113.242353 250.217412l356.352 356.412235a60.235294 60.235294 0 0 0 80.655059 4.156235l4.577882-4.156235 356.111059-356.171294c1.204706 4.397176 1.987765 8.914824 2.409412 13.552941l0.240941 6.987294v481.882353c0 42.345412-32.768 77.101176-74.270118 80.112941l-6.023529 0.240942H190.765176a80.293647 80.293647 0 0 1-80.112941-74.330353l-0.180706-6.02353v-481.882353c0-4.818824 0.421647-9.456941 1.204706-14.034823l1.505883-6.746353z m720.052706-59.512471c4.818824 0 9.637647 0.421647 14.215529 1.204706l6.866824 1.566118-342.136471 342.13647-342.256941-342.13647c4.397176-1.204706 9.035294-2.048 13.673412-2.409412l7.107764-0.361412h642.529883z"
              p-id="7258"
              fill="#ff8800"
            />
          </svg>
          <span>{{
            (currentContactInfo && currentContactInfo.email) || '-'
          }}</span>
        </div>
        <div class="flex items-center justify-start flex-1 min-w-64">
          <svg
            t="1729654690145"
            class="icon size-4"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7460"
            width="200"
            height="200"
          >
            <path
              d="M672.647529 431.706353c126.674824 0 240.941176 87.762824 240.941177 209.317647 0 68.065882-36.984471 126.614588-90.714353 163.84-1.807059 10.661647-0.361412 21.383529-0.361412 32.105412a36.261647 36.261647 0 0 1-36.020706 36.442353c-27.286588 0-52.585412-9.035294-74.029176-25.901177a278.708706 278.708706 0 0 1-39.755294 2.831059c-126.674824 0-240.941176-87.762824-240.941177-209.317647s114.266353-209.317647 240.941177-209.317647zM411.648 150.588235c151.672471 0 287.081412 101.797647 300.152471 243.471059a308.705882 308.705882 0 0 0-39.152942-2.529882c-141.854118 0-281.057882 99.328-281.057882 249.374117 0 14.155294 1.204706 27.949176 3.614118 41.200942a341.112471 341.112471 0 0 1-37.225412-3.794824c-26.925176 22.046118-57.946353 34.454588-92.762353 34.454588a38.309647 38.309647 0 0 1-37.647059-38.912l0.240941-7.890823 0.602353-15.962353a84.449882 84.449882 0 0 0-2.16847-23.672471C157.455059 578.861176 110.471529 503.687529 110.471529 416.527059c0-153.178353 141.552941-265.938824 301.176471-265.938824z m180.705882 401.588706a40.176941 40.176941 0 1 0 0 80.293647 40.176941 40.176941 0 0 0 0-80.293647z m160.64753 0a40.176941 40.176941 0 1 0 0 80.293647 40.176941 40.176941 0 0 0 0-80.293647zM311.235765 271.058824a40.176941 40.176941 0 1 0 0 80.293647 40.176941 40.176941 0 0 0 0-80.293647z m200.82447 0a40.176941 40.176941 0 1 0 0 80.293647A40.176941 40.176941 0 0 0 512 271.058824z"
              p-id="7461"
              fill="#ff8800"
            />
          </svg>
          <span>{{
            (currentContactInfo && currentContactInfo.wx) || '-'
          }}</span>
        </div>
        <div class="flex items-center justify-start flex-1 min-w-64">
          <svg
            t="1729654704510"
            class="icon size-4"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7663"
            width="200"
            height="200"
          >
            <path
              d="M512 110.351059A252.385882 252.385882 0 0 0 259.855059 348.762353l-5.842824 105.592471c-8.432941 17.889882-16.685176 36.864-24.69647 56.621176-49.814588 123.422118-69.391059 231.905882-43.730824 242.266353 13.492706 5.421176 36.743529-17.106824 62.885647-57.524706a267.926588 267.926588 0 0 0 79.028706 144.323765c-41.200941 14.034824-76.619294 33.189647-76.619294 53.36847 0 20.48 99.568941 20.178824 170.164706 20.058353 22.106353-0.060235 40.658824-0.301176 55.476706-2.288941a270.396235 270.396235 0 0 0 70.656 0c14.878118 1.987765 33.430588 2.228706 55.476706 2.288941h0.060235c70.595765 0.180706 170.164706 0.361412 170.164706-20.058353 0-20.178824-35.418353-39.333647-76.619294-53.36847a267.926588 267.926588 0 0 0 78.96847-144.022588c26.142118 40.237176 49.272471 62.644706 62.644706 57.223529 25.780706-10.420706 6.204235-118.844235-43.670588-242.206118a1133.025882 1133.025882 0 0 0-24.395294-56.018823l-5.903059-106.255059A252.385882 252.385882 0 0 0 512 110.351059z"
              p-id="7664"
              fill="#ff8800"
            />
          </svg>
          <span>{{
            (currentContactInfo && currentContactInfo.qq) || '-'
          }}</span>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { getMainStaffApi } from '~/api'

  const { $mitt } = useNuxtApp()
  const dialogFormVisible = ref(false)
  const userStore = useMyUserStore()
  const currentContactInfo = ref<any>({})
  const {
    public: {
      constant: { OPEN_CONTACT_INFO },
    },
  } = useRuntimeConfig()

  onMounted(() => {
    $mitt.on(OPEN_CONTACT_INFO, openDialog)
  })

  function openDialog(config) {
    console.log(
      '🚀 ~ file: ContactInfoDialog.vue:19 ~ openDialog ~ config:',
      config,
    )
    if (!userStore.userId) {
      ElMessageBox.confirm('亲爱的JCtrans用户，请您先登录哦', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          // ElMessage({
          //   type: 'success',
          //   message: 'Delete completed',
          // })
          go2LoginPage()
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消登录',
          })
        })

      return
    }
    currentContactInfo.value = config
    dialogFormVisible.value = true
  }

  function handleOpen() {
    if (currentContactInfo.value.companyId || currentContactInfo.value.id) {
      getMainStaffApi({
        // type: 1,
        compId:
          currentContactInfo.value.companyId || currentContactInfo.value.id,
      })
        .then((res: any) => {
          if (res.code === 0) {
            currentContactInfo.value = Object.assign(
              {},
              currentContactInfo.value,
              res.data,
            )
          }
        })
        .catch((err) => {
          console.log(
            '🚀 ~ file: ContactInfoDialog.vue:68 ~ handleOpen getMainStaffApi ~ err:',
            err,
          )
        })
    }
  }

  // 卸载时移除事件监听
  onUnmounted(() => {
    $mitt.off(OPEN_CONTACT_INFO)
  })
</script>

<style></style>
