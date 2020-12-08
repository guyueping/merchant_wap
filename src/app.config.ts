export default {
  pages: [
    'pages/index/index',
    'pages/login/index',
    'pages/list/index'
  ],
  tabBar: {
    list: [{
      // 'iconPath': 'resource/latest.png',
      // 'selectedIconPath': 'resource/lastest_on.png',
      'pagePath': 'pages/index/index',
      'text': '首页'
    }, {
      // 'iconPath': 'resource/hotest.png',
      // 'selectedIconPath': 'resource/hotest_on.png',
      'pagePath': 'pages/login/index',
      'text': '我的'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundColor: '#eeeeee',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
