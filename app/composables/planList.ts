export const usePlanList = () => {
  interface ApiResponse {
    msg: string
    code: number
    data: {
      records: any[] // 这里的 records 可以是任意类型的数组，根据实际情况定义
      total: number
      size: number
      current: number
      orders: any[] // 同样，orders 也可以是任意类型的数组
      optimizeCountSql: boolean
      searchCount: boolean
      optimizeJoinOfCountSql: boolean
      // 可以根据实际返回的数据类型，进一步定义字段
    }
  }

  const config = useRuntimeConfig()

  async function getPlanList() {
    const { data, status, error, refresh, clear } = await useAsyncData<any>(
      `${config.public.SAPI_DOMAIN}/rms/risk/guide/guideCase/list`,
      () =>
        $fetch(`${config.public.SAPI_DOMAIN}/rms/risk/guide/guideCase/list`),
      {
        server: true,
      },
    )

    return {
      data,
      status,
      error,
      refresh,
      clear,
    }
  }

  return {
    getPlanList,
  }
}
