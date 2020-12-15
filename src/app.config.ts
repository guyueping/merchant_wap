export default {
  // entryPagePath: 'pages/demos/index',

  pages: [
    'pages/home/index',
    'pages/mine/index',
    'pages/login/index',
    'pages/list/index',
    'pages/sale/index',
    'pages/account/index',
    'pages/task/index',
    'pages/order/index',
    'pages/afterSale/index',
    'pages/bill/index',
    'pages/records/index',
    'pages/demos/index'
  ],
  tabBar: {
    list: [{
      'iconPath': 'assets/images/icon_home.png',
      'selectedIconPath': 'assets/images/icon_home_primary.png',
      'pagePath': 'pages/home/index',
      'text': '首页'
    }, {
      'iconPath': 'assets/images/icon_my.png',
      'selectedIconPath': 'assets/images/icon_my_primary.png',
      'pagePath': 'pages/mine/index',
      'text': '我的'
    }],
    'color': '#969696',
    'selectedColor': '#4F5AF7',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundColor: '#F1F2F6',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#4D66FF',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  }
}
