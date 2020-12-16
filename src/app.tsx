import React, { Component } from 'react'
// import { Provider } from 'react-redux'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

// import configStore from './store'
import 'taro-ui/dist/style/index.scss' 
import './app.styl'
import appLaunch from './app-launch'

// const store = configStore()

class App extends Component {
  componentDidMount () {
    appLaunch()
    // Taro.getSystemInfo({}).then(res => {
    //   console.log('res>>>', res)
    // })
    // console.log(Taro.getSystemInfoSync())
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  onShareAppMessage(){
    console.log('asfsdfss')
    return{
      title:'点击转发后,页面文章的标题',
      desc:'分享页面的内容',
      path:'/page/user?id=123'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <View className='app_container'>
        {this.props.children}
      </View>
      // <Provider store={store}>
      //   {this.props.children}
      // </Provider>
    )
  }
}

export default App
