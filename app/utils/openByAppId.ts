import { pageRedirectApi } from '~/api'

export const openPageByAppId = async (appId, path = '') => {
  const res: any = await pageRedirectApi({ toSys: appId, path })
  const link = document.createElement('a')
  link.href = res.data.redirectPath
  link.target = '_blank'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
