import React from 'react'
import { View, Text } from '@tarojs/components'
import './index.styl'
import { AtIcon } from 'taro-ui'

interface I_LoadMore{
  showLoading?: boolean;
  showNoData?: boolean;
}

const LoadMore = (props: I_LoadMore) => {
  return (
    <View className={`flex_center_center_row load_more_box${props.showLoading ? '' : ' none'}`}>
      {/* <AtIcon value='loading-3' size='18' color='#6E9AE5' className='loading_icon'></AtIcon>
      <Text className='info_txt'>Loading</Text> */}
      {props.showNoData ? (
        <Text className='info_txt'>没有更多数据</Text>
      ) : (
        <View>
          <AtIcon value='loading-3' size='18' color='#6E9AE5' className='loading_icon'></AtIcon>
          <Text className='info_txt'>Loading</Text>
        </View>
      )}
    </View>
  )
}

export default LoadMore