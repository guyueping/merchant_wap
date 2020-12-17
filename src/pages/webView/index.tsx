import { WebView } from '@tarojs/components'
import React from 'react'
import Taro, { useRouter } from '@tarojs/taro'

const webPage = () => {
  const { path, params } = useRouter()

  return <WebView src={decodeURIComponent(params.url)} />
}

export default webPage