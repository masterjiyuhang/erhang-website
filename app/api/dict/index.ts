export async function getCountry(params = {}) {
  const { post } = useUseRequest()
  const result: any = await post('/system/dms/fr/aggr/findPageList', {
    ...params,
    level: 2,
    displayInfo: ['Country'],
  })

  function toUpperCase(key = '') {
    return key.charAt(0).toUpperCase() + key.slice(1)
  }

  function setObjectValue(obj = {}, objKey = '') {
    const keyList = Object.keys(obj)
    const newObj = {}
    for (let i = 0; i < keyList.length; i++) {
      const key = keyList[i]
      newObj[`${objKey}${toUpperCase(key)}`] = obj[key]
    }
    return newObj
  }

  const countryList = result.data.records.map((item) => {
    return {
      ...setObjectValue(item.continent, 'continent'),
      ...item.country,
    }
  })
  return {
    ...result.data,
    records: countryList,
  }
}
