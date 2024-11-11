export const findCityPortAddressApi = async (data) => {
  const { post } = useUseRequest()

  const res = await post(
    '/system/dms/countryCityPort/hzh/findCityPortAddress',
    data,
  )
  return res
}

interface CityParams {
  name?: string // 城市名 可选
  countryId?: number // 国家ID 可选
  provinceId?: number // 省份ID 可选
  sanctionFlag?: string // 是否被制裁(0非制裁 1被制裁)
}
/**
 *
 * @param data
 * @returns
 */
export const findCityAddressApi = async (data: CityParams) => {
  const { post } = useUseRequest()

  const res = await post('/system/dms/city/findAllList', data)
  return res
}

export const findCountryApi = async (data: CityParams) => {
  const { post } = useUseRequest()

  const res = await post('/system/dms/fr/country/findPageCountry', data)
  return res
}
