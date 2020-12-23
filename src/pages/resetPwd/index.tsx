import React, { useState, useEffect, useRef } from 'react'
import { View, Input } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import MnLayout from '@/components/mnLayout'
import { phone_reg, password_reg, smscode_reg } from '@/utils/reg'
import req from '@/utils/mnRequest'
import './index.styl'


const ResetPwd = () => {
  const { path, params } = useRouter()
  const { type = '1', account = '' } = params
  const time = useRef()
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [errMsg, setErrMsg] = useState('')
  const [count, setCount] = useState(0)
  const [data, setData] = useState({
    phone: '',
    pwd:'',
    confirmPwd: '',
    verifyCode: ''
  })
  
  const handleChange = (e, fieldName) => {
    errMsg && setErrMsg('')
    setData({
      ...data,
      [fieldName]: e.detail.value
    })
  }

  const trim = (str: string) => { // 删除左右两端的空格
    return str.replace(/(^\s*)|(\s*$)/g, '');
  }

  useEffect(() => {
    const { phone, pwd, confirmPwd, verifyCode } = data
    if(!!phone && !!pwd && !!confirmPwd && !!verifyCode) {
      btnDisabled && setBtnDisabled(false)
    } else {
      !btnDisabled && setBtnDisabled(true)
    }
  }, [data, btnDisabled])

  const showMsg = (msg: string) => {
    Taro.showToast({
      title: msg,
      icon: 'none',
      duration: 2000
    })
  }
  const getVerifyCode = async () => {
    if(count > 0) {
      return false
    }
    const { phone } = data
    const phoneVal = trim(phone)
    if(!phone_reg.re.test(phoneVal)) {
      showMsg('请输入有效手机号')
      return false
    }
    showMsg('短信发送成功')
    setCount(60)
    countDown(60)
    // try {
    //   const dataVal = { mobile: phoneVal, captchaType: 6 }
    //   const res = await req.post({ apiUrl: 'captcha.sms',  dataVal })
    //   if (res.success) {
    //     showMsg('短信发送成功')
    //     setCount(60)
    //     countDown(60)
    //   }
    // } catch (error) {}
  }


  const countDown = (num: number) => {
    time.current && clearTimeout(time.current)
    num > 0 && (time.current = setTimeout(() => {
      setCount(num - 1)
      countDown(num - 1)
    }, 1000))
  }


  const handleUpdate = () => {
    const { phone, pwd, confirmPwd, verifyCode } = data
    const phoneVal = trim(phone)
    const pwdVal = trim(pwd)
    const confirmPwdVal = trim(confirmPwd)
    const verifyCodeVal = trim(verifyCode)
    if(!phone_reg.re.test(phoneVal)) {
      setErrMsg('请输入有效手机号')
      return false
    }
    if(pwd !== confirmPwd) {
      setErrMsg('两次密码输入不一致')
      return false
    }
    if(!(password_reg.re.test(pwd) && /[0-9]+/.test(pwd) && /[a-z]+/.test(pwd) && /[A-Z]+/.test(pwd))) {
      setErrMsg('密码格式须为8位，仅且需包含大小写字母及数字')
      return false
    }
    if(!smscode_reg.re.test(verifyCode)) {
      setErrMsg('验证码错误')
      return false
    }
    console.log(`phoneVal=${phoneVal}, pwdVal=${pwdVal}, confirmPwdVal=${confirmPwdVal},verifyCodeVal=${verifyCodeVal}`)
    doUpdate({
      mobile:phoneVal,
      captcha: verifyCodeVal,
      password: pwdVal,
      captchaType: 6
    })
  }

  const doUpdate = async (dataVal: any) => {
    try {
      const res = await req.post({ apiUrl: 'login.modPw.captcha',  dataVal:params })
      if (res.success) {
        showMsg('密码修改成功')
        Taro.navigateTo({url: '/pages/login/index'})
      }
    } catch (error) {}
  }

  return  (
    <MnLayout title={type === '1' ? '修改登录密码' : '忘记密码'} hideArrow={false}>
      <View className='pwd_page_box'>
        <View className='pwd_form_box'>
          <View className='field_box flex_center_start_row'>
            <View className='fieldLabel'>手机号：</View>
            <Input 
              type='text' 
              // disabled={!!(type === '1')} 
              // value={account} 
              placeholder='请输入手机号' 
              className='fieldInput' 
              maxlength={11} 
              placeholderStyle='color:rgba(0, 0, 0, 0.25)' 
              onInput={(e) => handleChange(e, 'phone')} 
            />
          </View>
          <View className='field_box flex_center_start_row'>
            <View className='fieldLabel'>短信验证码：</View>
            <Input 
              type='text' 
              placeholder='请输入验证码' 
              className='fieldInput' 
              placeholderStyle='color:rgba(0, 0, 0, 0.25)' 
              maxlength={6}
              onInput={(e) => handleChange(e, 'verifyCode')}
            />
          <View className={count > 0 ? 'count_down_btn' :'verifyCode_btn'} onClick={getVerifyCode}>{count > 0 ? `${count}s后重新获取` : '获取验证码'}</View>
          </View>
          <View className='field_box flex_center_start_row'>
            <View className='fieldLabel'>新密码：</View>
            <Input 
              type='text' 
              password
              placeholder='8位包含大小写字母、数字' 
              className='fieldInput' 
              maxlength={8} 
              placeholderStyle='color:rgba(0, 0, 0, 0.25)'
              onInput={(e) => handleChange(e, 'pwd')}
            />
          </View>
          <View className='field_box flex_center_start_row'>
            <View className='fieldLabel'>确认新密码：</View>
            <Input 
              type='text' 
              password
              placeholder='8位包含大小写字母、数字' 
              className='fieldInput' 
              placeholderStyle='color:rgba(0, 0, 0, 0.25)' 
              maxlength={8} 
              onInput={(e) => handleChange(e, 'confirmPwd')}
            />
          </View>
        </View>
        {!!errMsg && (
          <View className='error_msg'>
            <View className='at-icon at-icon-alert-circle err_icon'></View>
            <View>{errMsg}</View>
          </View>
        )}
        <AtButton className='confirm_button' onClick={handleUpdate} disabled={btnDisabled}>确定</AtButton>
      </View>
    </MnLayout>
  )
}
export default ResetPwd

