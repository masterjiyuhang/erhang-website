export const getShopPopularize = (data) => {
  const { post } = useUseRequest()
  return post('/hzh/fr/popularize/getShopPopularize', data)
}
