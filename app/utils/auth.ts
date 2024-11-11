import { isClient } from '@vueuse/core'
import { getFirstDomain } from '~/utils'

const TokenKey = 'JC-JAVA-Token'
const ExpiresInKey = 'ERA-Expires-In'
const ExpiresInTimeKey = 'ERA-Expires-Time-In'
const RefreshTokenKey = 'ERA-Refresh-Token'

async function setClientId() {
  if (isClient) {
    const app = useNuxtApp()

    localStorage.setItem('clientId', await app.$getFingerprint())
  }
}

// 获取 token
function getToken() {
  const tokenCookie = useCookie(TokenKey)
  return tokenCookie.value
}

// 工程默认APPID获取
function getAppId() {
  return 'ZWZ'
}

// 设置 token
function setToken(token) {
  const topDomain = getFirstDomain()
  const tokenCookie = useCookie(TokenKey, {
    domain: topDomain || undefined,
  })
  tokenCookie.value = token
}

// 移除 token
function removeToken() {
  const refreshTokenCookie = useCookie(RefreshTokenKey)
  refreshTokenCookie.value = null

  const topDomain = getFirstDomain()
  const tokenCookie = useCookie(TokenKey, {
    domain: topDomain || undefined,
  })
  tokenCookie.value = null
}

// 获取过期时间
function getExpiresIn() {
  const expiresInCookie = useCookie(ExpiresInKey)
  return expiresInCookie.value || -1
}

// 设置过期时间
function setExpiresIn(time) {
  const expiresInCookie = useCookie(ExpiresInKey)
  expiresInCookie.value = time
}

// 移除过期时间
function removeExpiresIn() {
  const expiresInTimeCookie = useCookie(ExpiresInTimeKey)
  expiresInTimeCookie.value = null

  const expiresInCookie = useCookie(ExpiresInKey)
  expiresInCookie.value = null
}

// 设置 refresh token
function setRefreshToken(token) {
  const refreshTokenCookie = useCookie(RefreshTokenKey)
  refreshTokenCookie.value = token
}

// 获取 refresh token
function getRefreshToken() {
  const refreshTokenCookie = useCookie(RefreshTokenKey)
  return refreshTokenCookie.value || ''
}

// 获取过期时间点
function getExpiresTimeIn() {
  const expiresInTimeCookie = useCookie(ExpiresInTimeKey)
  return expiresInTimeCookie.value || ''
}

// 设置过期时间点
function setExpiresTimeIn(time) {
  const expiresInTimeCookie = useCookie(ExpiresInTimeKey)
  expiresInTimeCookie.value = time
}

function go2LoginPage(fullPath = '/', target = '_self') {
  const appId = encodeURIComponent(getAppId())
  const encodedFullPath = encodeURIComponent(fullPath)
  const config = useRuntimeConfig()

  const global =
    config.public.LOGIN_SITE +
    `${config.public.ENV !== 'prod' ? '-' + config.public.ENV : ''}` +
    '.' +
    config.public.DOMAIN_NAME
  let path = `${global || window.BASE_INFO.VUE_APP_LOGIN_PAGE}?appId=${appId}&path=${encodedFullPath}`

  if (sessionStorage.getItem('prjId')) {
    path += `&prjId=${sessionStorage.getItem('prjId')}`
  }

  const link = document.createElement('a')
  link.href = path
  link.target = target

  // 使用 createEvent 创建点击事件
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window,
  })

  link.dispatchEvent(event)
}

export {
  getToken,
  setToken,
  getExpiresTimeIn,
  setExpiresTimeIn,
  getRefreshToken,
  setRefreshToken,
  getExpiresIn,
  setExpiresIn,
  removeExpiresIn,
  removeToken,
  getAppId,
  setClientId,
  go2LoginPage,
}
