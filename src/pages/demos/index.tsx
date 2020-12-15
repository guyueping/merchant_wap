import React from 'react'
import { View } from '@tarojs/components'
import { StatusWait, StatusWarn, StatusSearch, StatusEmpty } from '@/components/status'
import './index.styl'

const Demo = () => {
  
  return  (
    <View className='demo_page'>
      <StatusWait mainInfo='等待处理' moreInfo='已提交申请，等待处理' style={{ marginBottom: 20, backgroundColor: '#FFFFFF' }} />
      <StatusWarn mainInfo='无法完成操作' moreInfo='由于你的账户还未绑定，请前往柜台处理' style={{ marginBottom: 20 , backgroundColor: '#FFFFFF' }} />
      <StatusSearch moreInfo='抱歉，未找到与搜索相匹配内容' style={{ marginBottom: 20, backgroundColor: '#FFFFFF' }} />
      <StatusEmpty moreInfo='暂无记录' style={{ mrginBottom: 20, backgroundColor: '#FFFFFF' }} />
    </View>
  )
}
export default Demo