import Taro from '@tarojs/taro';
// import Config from '@/config';
// import Utils from '@/utils';

export default function appLaunch(){
  const systemInfo = Taro.getSystemInfoSync()
  console.log('systemInfo>>', systemInfo)
  Taro.$statusBarHeight = systemInfo.statusBarHeight
  
    // Taro.getSystemInfo({}).then(res => {
    //   console.log('res>>>', res)
    // })
    // console.log(Taro.getSystemInfoSync())
  // /**
  //  * 自动升级处理
  //  */
  // if (Taro.canIUse('getUpdateManager')) {
  //   const updateManager = Taro.getUpdateManager()
  //   updateManager.onCheckForUpdate(function (res) {
  //     if (res.hasUpdate) {
  //       updateManager.onUpdateReady(function () {
  //         Taro.showModal({
  //           title: '更新提示',
  //           content: '新版本已经准备好，是否重启应用？',
  //           success: function (resp) {
  //             if (resp.confirm) {
  //               updateManager.applyUpdate()
  //             }
  //           }
  //         })
  //       })
  //       updateManager.onUpdateFailed(function () {
  //         Taro.showModal({
  //           title: '已经有新版本了哟~',
  //           content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
  //         })
  //       })
  //     }
  //   })
  // } else {
  //   Taro.showModal({
  //     title: '提示',
  //     content: '当前微信版本过低，无法使用自动升级功能，请升级到最新微信版本后重试。'
  //   })
  // }

  // /**
  //  * 消息订阅
  //  */
  // if(!Taro.requestSubscribeMessage){
  //   Taro.showModal({
  //     title: '提示',
  //     content: '当前微信版本过低，无法使用消息订阅功能，请升级到最新微信版本后重试。'
  //   })
  // } else {
  //   Taro.getSetting({
  //     withSubscriptions: true,
  //     success: function(e){
  //       function showTip(notActive){
  //         const msgNames = notActive.map((v,i) => `${i+1}. ${v.name}`).join('\n');
  //         Taro.showModal({
  //           title: '提示',
  //           content: `为更好体验小程序,请在小程序右上角点开设置并开启如下消息订阅功能\n${msgNames}`,
  //           success (res) {
  //             if (res.confirm) {
  //               Utils.appUtils.subscribeMessage();
  //             } else if (res.cancel) {
  //               console.log('可惜用户已经取消了,下次再弹框吧');
  //             }
  //           }
  //         })
  //       }
  //       if(e.subscriptionsSetting){
  //         const ret = Config.subscribe.filter(item => e.subscriptionsSetting[item.id] !== 'accept');
  //         if(ret.length){
  //           showTip(ret);
  //         }
  //       }
  //     }
  //   })
  // }
  
}