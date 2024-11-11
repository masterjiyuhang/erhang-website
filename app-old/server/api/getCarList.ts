export default defineEventHandler(async (event) => {
  const res = await $fetch('/car/getListByName', {
    method: 'post',
    body: { name: '' },
    baseURL: 'http://localhost:3000/v1/api',
  })

  return res
})
