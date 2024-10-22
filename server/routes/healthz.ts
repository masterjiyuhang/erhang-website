export default defineEventHandler(async (event) => {
  console.log('🚀 ~ file: health.ts:2 ~ defineEventHandler ~ event:', event)

  return {
    status: 'ok',
    uptime: process.uptime(), // 服务器已运行时间（秒）
    timestamp: new Date().toISOString(), // 当前时间
  }
})
