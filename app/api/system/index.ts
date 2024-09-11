export const authExchangeApi = (data) => {
  const { post } = useUseRequest()
  return post('/auth/exchange', data)
}

export const logoutApi = () => {
  const { post } = useUseRequest()
  return post('/logout')
}

export const getUserCompanyInfoApi = () => {
  const { post } = useUseRequest()
  return post('/auth/userCompany')
}

export const getCompanyInfoApi = (data) => {
  const { post } = useUseRequest()
  return post('/auth/company', data)
}
export const getUserInfoApi = (data) => {
  const { post } = useUseRequest()
  return post('/auth/user', data)
}

export const getPermsApi = () => {
  const { post } = useUseRequest()
  return post(`/auth/perms`, { sysId: getAppId() })
}

export function getJoinCompanyApi(data = {}) {
  const { post } = useUseRequest()
  return post(`/auth/getJoinCompany`, { method: 'post', data })
}
