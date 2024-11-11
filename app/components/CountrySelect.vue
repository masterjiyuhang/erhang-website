<template>
  <el-select
    v-model="model"
    filterable
    remote
    reserve-keyword
    placeholder="请填写您所属国家"
    :remote-method="remoteMethod"
    :loading="loading"
    :popper-class="`company-search company-search-value company-search-country dialog-join-us`"
  >
    <el-option
      v-for="item in options"
      :key="item.id"
      :label="item.nameCn"
      :value="item.id"
    >
      {{ item.nameCn }}
    </el-option>
  </el-select>
</template>

<script lang="ts" setup>
  import { getCountry } from '~/api/dict'

  const model = defineModel()

  const options = ref([])
  const loading = ref(false)

  onMounted(() => {
    initData()
  })

  const initData = () => {
    if (model.value) {
      getCountryList('', model.value)
    }
  }

  const getCountryList = async (key = '', id = null) => {
    try {
      loading.value = true

      const params = {
        sort: 'nameEn',
        current: 1,
        size: 99,
        prefixSearchContent: key.trim(),
      }

      if (id) {
        params.appointSearch = [
          {
            name: 'countryId',
            val: JSON.stringify([id]),
          },
        ]
      }

      const result = await getCountry(params)

      options.value = result.records
    } catch (e) {
      console.error(e)
      options.value = []
    } finally {
      loading.value = false
    }
  }

  const remoteMethod = (query: string) => {
    if (query) {
      getCountryList(query)
    } else {
      options.value = []
    }
  }
</script>

<style scoped lang="scss">
  :deep(.el-select__wrapper) {
    width: 311px;
    height: 48px;
    padding: 0 16px;
    background: unset;
  }
</style>
