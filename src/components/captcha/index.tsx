import React, { useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import req from '@/utils/mnRequest'

interface I_Captcha{
  onSuccess?: () => void;
  show?: boolean;
}

const Captcha = (props: I_Captcha) => { 
  const [loadCaptcha, setLoadCaptcha] = useState(false)
  const [challenge, setChallenge] = useState('')
  const [gt, setGt] = useState('')
  const [verify, setVerify] = useState(false)
  const [toReset, setToReset] = useState(true)
  const [offline, setOffline] = useState(true)

  useEffect(() => {
    getGeeTest()
  }, [])

  const resetGee = () => {
    getGeeTest()
    setVerify(false)
    setToReset(true)
    setOffline(true)
  }

  const getGeeTest = async () => {
    const {success, result = {}} = await req.post('usercenter.behavior.preProcess', {})
    if(success) {
      const { challenge: challengeVal, gt: gtVal, newCaptcha, success: suc } = result
      setLoadCaptcha(true)
      setChallenge(challengeVal)
      setGt(gtVal)
      setOffline(!suc)
      // const d = { loadCaptcha: true, gt, challenge, offline: !suc }
      // setGData(d)
    }
  }

  const onSuccess = () => {
    console.log('onOnSuccess');
    resetGee()
    props.onSuccess && props.onSuccess()
  }

  return (
    <View>
      {props.show ? <captcha 
        id="captcha" 
        gt={gt} 
        loadCaptcha={loadCaptcha} 
        challenge={challenge} 
        offline={offline} 
        product='bind'
        verify={verify}
        toReset={toReset}
        onOnSuccess={onSuccess}
        onOnClose={() => {console.log('onOnClose')}}
        onOnReady={() => {console.log('bindonReady')}} 
        onOnError={() => {console.log('bindonError')}}
      /> : null}
    </View>
  )
}
export default Captcha