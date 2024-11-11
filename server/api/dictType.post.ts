export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  try {
    const res: any = await $fetch('/system/admin/dict/data/type/dictType', {
      method: 'post',
      body: body,
      baseURL: config.public.PROD_CLIENT_PROXY_API,
    })
    return res?.data?.records || []
  } catch (error) {
    console.log(
      '🚀 ~ file: dictType.post.ts:11 ~ defineEventHandler ~ error:',
      error,
    )
  }
})
