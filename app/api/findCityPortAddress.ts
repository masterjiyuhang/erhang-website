export const findCityPortAddressApi = async (data) => {
  const { post } = useUseRequest()

  const res = await post(
    '/system/dms/countryCityPort/findCityPortAddress',
    data,
  )
  return res
}
