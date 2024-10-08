export const pageRedirectApi = (data) => {
  const { post } = useUseRequest()
  return post('/auth/redirect', data)
}
