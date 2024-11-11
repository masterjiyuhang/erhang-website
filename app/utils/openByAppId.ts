import { pageRedirectApi } from '~/api/index'
import { reportCallBack } from '~/api/system'
export const openPageByAppId = async (appId: string, path = '') => {
  const res: any = await pageRedirectApi({ toSys: appId, path })
  const link = document.createElement('a')
  link.href = res.data.redirectPath
  link.target = '_blank'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export const openByLink = (path: string, target = '_blank') => {
  console.log('🚀 ~ file: openByAppId.ts:15 ~ openByLink ~ path:', path)
  if (!path) {
    console.error(
      '🚀 ~ file: openByAppId.ts:15 ~ openByLink ~ path is null:',
      path,
    )
    return
  }

  reportCallBack(
    {
      eventCode: 'HOME.AD.LINK.CLICK',
      extensions: {
        AD_PATH: path || '',
      },
    },
    'ZWZ.UC.HOME',
  )
  // 对 URL 进行编码，处理其中的特殊字符
  const encodedPath = encodeURI(path)
  const link = document.createElement('a')
  link.href = encodedPath
  link.target = target

  // 添加 rel 属性以避免安全漏洞
  if (target === '_blank') {
    link.rel = 'noopener noreferrer'
  }
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
