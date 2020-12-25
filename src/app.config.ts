export default {
  // entryPagePath: 'pages/records/index',

  pages: [
    'pages/index/index',
    'pages/mine/index',
    'pages/mine/accountDetail/index',
    'pages/login/index',
    'pages/sale/index',
    'pages/account/index',
    'pages/task/index',
    'pages/task/taskDetail/index',
    'pages/order/index',
    'pages/order/orderDetail/index',
    'pages/afterSale/index',
    'pages/afterSale/afterSaleDetail/index',
    'pages/bill/index',
    'pages/records/index',
    'pages/webView/index',
    // 'pages/forgetPwd/index',
    'pages/resetPwd/index',
    'pages/withdraw/index',
    'pages/repay/index',
    'pages/settle/index',
    // 'pages/home/index',
    // 'pages/list/index'
  ],
  plugins:{
    myPlugin: {
      version: '1.3.1',
      provider: 'wxefa63d84fe9f64a2'
    }
  },
  // appId: 'wx4a48efb72145fee2',
  // tabBar: {
  //   list: [{
  //     'iconPath': 'assets/images/icon_home.png',
  //     'selectedIconPath': 'assets/images/icon_home_primary.png',
  //     'pagePath': 'pages/index/index',
  //     'text': '首页'
  //   }, {
  //     'iconPath': 'assets/images/icon_my.png',
  //     'selectedIconPath': 'assets/images/icon_my_primary.png',
  //     'pagePath': 'pages/mine/index',
  //     'text': '我的'
  //   }],
  //   'color': '#969696',
  //   'selectedColor': '#4F5AF7',
  //   'backgroundColor': '#fff',
  //   'borderStyle': 'white'
  // },
  window: {
    backgroundColor: '#F8F8F8',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#4F5AF7',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white',
    navigationStyle: 'custom'
  }
}
