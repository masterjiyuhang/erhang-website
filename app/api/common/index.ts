const { post } = useUseRequest()

export async function postJoinUs(data) {
  const result = await post(`/collect/fr/questionnaire/submit`, { ...data })
  return result
}
