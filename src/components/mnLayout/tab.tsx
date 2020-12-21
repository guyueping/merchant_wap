
import React, { useState, useEffect } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { goTo } from '@utils/mnRoute'
// import { getData, setData } from '@utils/ypStore'
import './tab.less'
import { IPt } from './interface'

const MnLayout = (IProps: IPt) => {
    const { dataList, tabPath, statusBarHeight } = IProps
    const jumpTo = (item) => {
        goTo(item.pathVal, 1)
    }
    return (
        <View className='tab_mnlayout_box'>
            <View className='tab_mnlayout_boxwrap'>
                {dataList.map((item: any) => {
                    return <View onClick={
                        () => {
                            jumpTo(item)
                        }
                    } key={item.pathVal} className={`tabItem ${item.pathVal === tabPath ? 'act_tab_class' : 'normal_tab'}`}
                    >
                        <Image className='tab_img' src={item.pathVal === tabPath ? item.iconAct : item.icon}></Image>
                        <Text className='tab_fo'>{item.title}</Text>
                    </View>
                })}
            </View>
            {statusBarHeight > 40 ? <View className='statusBarHeightTab' style={{ width: '100vw', height: '20px', background: '#fff' }}></View> : null}
        </View>
    )
}
export default MnLayout
