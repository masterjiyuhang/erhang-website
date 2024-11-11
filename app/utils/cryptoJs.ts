import CryptoJS from 'crypto-js'

const key = 'jctrans2003Z!2@#'

// 解密方法
function Decrypt(word) {
  if (!word) {
    return word
  }
  const keys = CryptoJS.enc.Utf8.parse(key)
  const decrypt = CryptoJS.AES.decrypt(word, keys, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  })
  try {
    if (CryptoJS.enc.Utf8.stringify(decrypt).toString() === '') {
      return word
    }
    return CryptoJS.enc.Utf8.stringify(decrypt).toString()
  } catch (error) {
    return word
  }
}

// 加密方法
function Encrypt(word) {
  if (!word) {
    return word
  }
  const keys = CryptoJS.enc.Utf8.parse(key)
  const srcs = CryptoJS.enc.Utf8.parse(word)
  const encrypted = CryptoJS.AES.encrypt(srcs, keys, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  })
  return encrypted.toString()
}

export { Decrypt, Encrypt }
