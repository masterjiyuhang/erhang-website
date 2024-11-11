const { post } = useUseRequest()
// 获取验证图片  以及token
export function reqGet(data) {
  return post(`/code`, data)
}

// 滑动或者点选验证
export function reqCheck(data) {
  return post(`/check`, data)
}
