export const pageRedirectApi = (data) => {
  const { post } = useUseRequest()
  return post('/auth/redirect', data)
}

/**
 * 获取公司联系人信息
 * @param data  公司id  {id: 3123123123}
 * @returns
 */
export const getMainStaffApi = (data) => {
  const { post } = useUseRequest()
  return post('/hzh/fr/shops/getMainStaff', data)
  // return post('/hzh/shops/getCompanyBusinessCard', data)
}
