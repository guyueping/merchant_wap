
import React, { useState, useEffect, useCallback, memo } from 'react'
import Taro from '@tarojs/taro'
import { View, Picker, ScrollView } from '@tarojs/components'
import { IPs } from './interface'
import MnNav from './nav'
import Tab from './tab'
import IconHome from './home1.png'
import IconHomeAct from './home2.png'
import IconMine from './mine1.png'
import IconMineAct from './mine2.png'
import './mnLayout.less'

const dataList = [
    { title: '首页', pathVal: "/pages/index/index", icon: IconHome, iconAct: IconHomeAct, index: 0 },
    { title: '我的', pathVal: "/pages/mine/index", icon: IconMine, iconAct: IconMineAct, index: 1 }
]
// const envList = ['prod', 'pre', 'sit', 'test', 'dev'];
const MnLayout = (IProps: IPs) => {
    const { arrowType = 1, hideArrow = true, navStyle = {}, showTab = false, tabPath = '', children, title, gotoType = 2, hideStatusBar = false, showNav = true, path, statusBarStyle, restStyle, backTitle, } = IProps
    const [styleObj, setStyleObj] = useState({ width: '', height: '', })
    const [statusBarHeight, setStatusBarHeight] = useState(20)
    const numberChange = () => {

    }
    const _init = useCallback(() => {
        try {
            const res = Taro.getSystemInfoSync()
            // const model = res.model ? res.model : 'unknown'
            // Taro.showToast({
            //     title: model,
            //     icon: 'none',
            //     duration: 2000,
            // })
            let obj = { width: '100%', height: `${res.statusBarHeight || 0}px` }
            if (statusBarStyle) {
                Object.assign(obj, statusBarStyle)
            }
            setStatusBarHeight(res.statusBarHeight)
            setStyleObj(obj)
        } catch (e) {
            // Do something when catch error
            console.log(e)
        }

    }, [statusBarStyle])
    useEffect(() => {
        _init()
    }, [_init])
    return (
        <View className='mnlayout_box' style={{ width: '100vw', height: '100vh', ...restStyle }}>
            {!hideStatusBar && styleObj.width ? <View className='statusBarHeight' style={styleObj}></View> : null}
            { showNav ? <MnNav arrowType={arrowType} navStyle={navStyle} hideArrow={hideArrow} gotoType={gotoType} title={title} backTitle={backTitle} path={path} ></MnNav> : null
            }
            <View className='childrenView'> {children}</View>
            {tabPath ? <Tab statusBarHeight={statusBarHeight} tabPath={tabPath} dataList={dataList}></Tab> : null}

        </View >
    )
}
export default memo(MnLayout)
