export const phone_reg = {
  re: /^1(3|4|5|6|7|8|9)\d{9}$/,
  name: '手机号'
}
export const password_reg = {
  re: /[a-zA-Z0-9]{8}$/, // /[a-zA-Z0-9]{8}$/.test(field) && /[0-9]+/.test(field) && /[a-z]+/.test(field) && /[A-Z]+/.test(field)
  name: '密码'
}
export const imgcode_reg = {
  re: /\d{4,6}$/,
  name: '图片验证码'
}
export const smscode_reg = {
  re: /\d{4,6}$/,
  name: '短信验证码'
}
export const idCardNo_reg = {
  re: /(^(\d|[*]){18}$)|(^(\d|[*]){17}(\d|X|x)$)/,
  name: '身份证号'
}
export const cardNo_reg = {
  re: /(^\d{16,24}$)/,
  name: '银行卡号'
}
export const fullName_reg = {
  re: /^([\u2E80-\u9FFFa-zA-Z\.\s]){2,24}$/,
  name: '姓名'
}

