
import React, { useState, useEffect } from 'react'
// import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { goTo, backTo } from '@utils/mnRoute'
import { IPb } from './interface'
import './nav.less'
import RouteImg from './route1.png'

const MnNav = (IProps: IPb) => {
    const { hideArrow, path } = IProps
    const jumpFunc = () => {


        if (path) {
            goTo(path, IProps.gotoType || 3) // reLaunch 关闭所有页面，打开到应用内的某个页面
        } else {
            backTo()
        }
    }
    return (
        <View className='mnNav_box'>
            {hideArrow && !path ? <View className='leftPart' >
            </View> : <View className='leftPart' onClick={jumpFunc}>
                    <Image className='routeImg' src={RouteImg}></Image>
                    <Text className='backTitle fos'>{IProps.backTitle || ''}</Text>
                </View>}

            <View className='midPart'>
                <Text className='title fos'>{IProps.title || ''}</Text>
            </View>
        </View>
    )
}
export default MnNav
