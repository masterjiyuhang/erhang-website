export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const config = useRuntimeConfig()
    const res = await event
      .$fetch(`${config.public.SAPI_DOMAIN}/collect/ad/level-3/${query.id}`, {
        method: 'GET',
        timeout: 10000,
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          return {} // 如果是 404 错误，返回空对象
        }
        throw error // 其他错误抛出
      })

    return res
  } catch (error) {
    console.log(
      '🚀 ~ file: level3Ad.ts:17 ~ defineEventHandler ~ error:',
      error,
    )
    return {}
  }
})
