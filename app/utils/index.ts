import { reportCallBack } from '@/api/system'

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
  const { locale, defaultLocale } = useI18n()

  if (locale.value) {
    return locale.value === 'cn' ? cn : en
  }
  return defaultLocale === 'cn' ? cn : en
}

/**
 * 判断域名是否为IP
 * @param {*} hostname
 * @returns
 */
export function isIpAddress(hostname: string) {
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

export function splitArrayIntoGroups(arr: any[], groupSize: number) {
  const result = []
  if (arr && arr.length) {
    for (let i = 0; i < arr.length; i += groupSize) {
      result.push(arr.slice(i, i + groupSize))
    }
  }

  return result
}

export function getVipLogoClass(code: string) {
  const map = {
    'JC eCommerce': 'vip-code-4',
    'JC Projects': 'vip-code-7',
    'JC Dangerous Goods': 'vip-code-2',
    GRP: 'vip-code-5',
    GCP: 'vip-code-3',
    'JC Rising': 'vip-code-5',
    'JC Premium': 'vip-code-3',
    'JC Railway': 'vip-code-6',
    'JC Elite': 'vip-code-1',
    'JC Vendor': 'vip-code-8', // JC Vendor
    'JC Vendor Consulting Services': 'vip-code-8-1', // JC Vendor Consulting Services
    'JC Vendor Finance Services': 'vip-code-8-2', // JC Vendor Finance Services
    'JC Vendor IT Services': 'vip-code-8-3', // JC Vendor IT Services
    'JC Vendor Transportation': 'vip-code-8-4', // JC Vendor Transportation
    'JC Vendor Warehousing': 'vip-code-8-5', // JC Vendor Warehousing
  }
  return map[code] || ''
}

export const isProd = () => {
  return process.env.NODE_ENV === 'production'
}

export const isDev = () => {
  return process.env.NODE_ENV === 'development'
}

export async function openGlobalIM(item: any = {}) {
  console.log('🚀 ~ file: index.ts:128 ~ openGlobalIM ~ item:', item)
  const { $JCIM } = useNuxtApp()
  const { userId } = useMyUserStore()

  if (item.id || item.companyId) {
    if (!userId) {
      go2LoginPage()
      return
    }
    try {
      await $JCIM?.openIMSendMsg({ id: item.companyId || item.id, text: '' })
      console.log('消息发送成功')
    } catch (error) {
      console.error('发送消息时出错:', error)
      ElMessage.error('IM加载中，请稍后再试')
    }
  } else {
    try {
      await $JCIM.openIM()
    } catch (error) {
      ElMessage.error('IM加载中，请稍后再试')
    }
  }
}

export function openGlobalContactInfo(data) {
  const app = useNuxtApp()
  app.$getContactInfo(data)
}

// 比较两个日期字符串（'YYYY-MM-DD HH:mm:ss' 格式）
export function isWithinRange(
  fromTime: string | number | Date,
  toTime: string | number | Date,
) {
  // 获取当前日期
  const currentDate = new Date()
  currentDate.setHours(0, 0, 0, 0) // 确保时间部分为当天的开始
  const fromDate = new Date(fromTime)
  const toDate = new Date(toTime)
  return currentDate >= fromDate && currentDate <= toDate
}

export function fetchAdData(defaultPromisesList, promisesList) {
  // 默认 API 调用的 promise 数组
  const defaultPromises = defaultPromisesList

  // 实际 API 调用的 promise 数组
  const promises = promisesList

  // 保存默认数据数组
  let defaultArr

  return new Promise((resolve, reject) => {
    // 获取默认数据
    Promise.allSettled(defaultPromises)
      .then((defaultResults) => {
        defaultArr = defaultResults
          .filter((item) => item.status === 'fulfilled')
          .map((item) => item.value.data.value)

        // 获取实际数据
        return Promise.allSettled(promises)
      })
      .then((results) => {
        // 处理实际数据
        const todayRecords = results
          .filter((item) => item.status === 'fulfilled')
          .map((item) => item.value.data.value)
          .map((item) => item.data?.records)

        // 创建新数组，整合符合条件的数据和默认数据
        const result = todayRecords.map((group, index) => {
          const validItems = group
            ? group.filter((item) => isWithinRange(item.fromTime, item.toTime))
            : []
          return validItems.length > 0 ? validItems : [defaultArr[index]]
        })

        // 将结果展平成一维数组并返回
        resolve(result.flat() || [])
      })
      .catch((error) => {
        reject(error)
      })
  })
}
