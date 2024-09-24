import { getFirstDomain } from '~/utils'

const TokenKey = 'JC-JAVA-Token'
const ExpiresInKey = 'ERA-Expires-In'
const ExpiresInTimeKey = 'ERA-Expires-Time-In'
const RefreshTokenKey = 'ERA-Refresh-Token'

// 获取 token
function getToken() {
  const tokenCookie = useCookie(TokenKey)
  return tokenCookie.value
}

// 工程默认APPID获取
function getAppId() {
  return 'HZH'
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
}
