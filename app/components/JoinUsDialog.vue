<template>
  <el-dialog
    v-model="dialogVisible"
    title="申请表单"
    width="50%"
    destroy-on-close
    append-to-body
  >
    <el-form ref="formRef" :model="formData">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="formData.email" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="closeFormModal">取消</el-button>
      <el-button type="primary" @click="submitForm">提交</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
  const dialogVisible = ref(false)
  const formData = ref({
    name: '',
    email: '',
  })

  const { $mitt } = useNuxtApp()

  const {
    public: {
      constant: { OPEN_JOIN_US },
    },
  } = useRuntimeConfig()

  const openFormModal = (data) => {
    console.log('🚀 ~ file: JoinUsDialog.vue:39 ~ openFormModal ~ data:', data)
    formData.value = { ...formData.value, ...data }
    dialogVisible.value = true
  }

  const closeFormModal = () => {
    dialogVisible.value = false
  }
  const submitForm = () => {
    console.log('表单数据:', formData.value)
    closeFormModal()
  }
  // 监听 Mitt 事件
  onMounted(() => {
    $mitt.on(OPEN_JOIN_US, openFormModal)
  })
  // 卸载时移除事件监听
  onUnmounted(() => {
    $mitt.off(OPEN_JOIN_US)
  })
</script>

<style></style>
