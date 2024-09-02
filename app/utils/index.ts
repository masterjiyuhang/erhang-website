export function classNames(...classes: any[string]) {
  return classes.filter(Boolean).join(' ')
}

export const kebabCase = (str: string) => {
  return str
    ?.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
    )
    ?.map((x) => x.toLowerCase())
    ?.join('-')
}

export const omit = (obj: object, keys: string[]) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key)),
  )
}

const hashRE = /#.*$/
const extRE = /(index)?\.(md|html)$/
const endingSlashRE = /\/$/

/**
 * Remove `.md` or `.html` extention from the given path. It also converts
 * `index` to slush.
 */
export function normalize(path: string): string {
  return ensureStartingSlash(
    decodeURI(path)
      .replace(hashRE, '')
      .replace(extRE, '')
      .replace(endingSlashRE, ''),
  )
}

function ensureStartingSlash(path: string): string {
  return path.startsWith('/') ? path : `/${path}`
}

export function joinUrl(base: string, path: string): string {
  if (path.startsWith('#')) return path
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`
}

export function getCnOrEn(cn: string, en: string) {
  const { locale } = useI18n()
  return locale.value === 'cn' ? cn : en
}

/**
 * 判断域名是否为IP
 * @param {*} hostname
 * @returns
 */
export function isIpAddress(hostname) {
  const ipv4Pattern =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  const ipv6Pattern =
    /^((?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|::|(?:[a-fA-F0-9]{1,4}:){1,7}:|:(?::[a-fA-F0-9]{1,4}){1,7})$/

  return ipv4Pattern.test(hostname) || ipv6Pattern.test(hostname)
}

/**
 * 获取一级域名
 * @returns
 */
export function getFirstDomain() {
  const { hostname } = window.location
  const parts = hostname.split('.')
  if (parts.length < 3 || isIpAddress(hostname)) {
    return null
  }
  if (parts.length === 3) {
    const topLevelDomain = `.${parts.slice(-2).join('.')}`
    return topLevelDomain
  }
  const topLevelDomain = `.${parts.slice(-3).join('.')}`
  return topLevelDomain
}
