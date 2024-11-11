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

/**
 * @description: 客服中心-验证商铺指定客服(用户后台)
 * @return {*}
 */
export const toOpenCcCenterApi = (data) => {
  const { post } = useUseRequest()

  return post(`/ics/tenant/fr/session/openCcCenter`, data)
}

export const reportApi = (data, headers) => {
  const { post } = useUseRequest()

  if (data.extensions) {
    // 获取所有非ERA_开头的键并更新它们的键名
    Object.keys(data.extensions).forEach((key) => {
      if (!key.startsWith('ZWZ_')) {
        const newKey = `ZWZ_${key}`
        data.extensions[newKey] = data.extensions[key]
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete data.extensions[key]
      }
    })
  }
  if (import.meta.env.MODE === 'development') {
    console.warn('本地环境埋点', data, headers)
    return new Promise((resolve) => {
      resolve({ data, headers })
    })
  }
  return post(`/tracking/report`, data, {}, { headers })
}

export const reportCallBack = (data, pageCode, operationType = 'EVENT') => {
  const { eventCode, extensions } = data
  const reportData = {
    eventCode,
    extensions,
  }
  const reportHeaders = {
    'operation-timestamp': new Date().getTime(), // 客户端的当前时间的时间戳
    'operation-stay': 0,
    'operation-type': operationType || 'EVENT',
    'page-code': pageCode || 'PAGE-CODE-IS-NULL',
  }
  return new Promise((resolve, reject) => {
    reportApi(reportData, reportHeaders)
      .then((res) => {
        resolve(res)
      })
      .catch((error) => reject(error))
  })
}
