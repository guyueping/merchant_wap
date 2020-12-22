### 简单消息提示
```
  <Modal show={showModal} content='未登录或登录已过期，请登录' title='温馨提示' onClose={() => {setShowModal(false)}} />
```

### 内容带图标消息提示
```
  <Modal 
    show={true} 
    content={
      <View>
        <image src={iconAvatar} style={{width: 43, height: 43, display: 'block', margin: '5px auto 12px auto'}} />
        <View>提交成功，感谢您带反馈～</View>
      </View>
    } 
  onClose={() => {setShowModal(false)}} 
/>
```

### 确认框
```
<Modal show={showModal} content='您确定要退出系统吗' title='温馨提示' onCancel={handleCancel} onConfirm={handleConfirm} />
```

### 警告弹框
```
<Modal 
  show={showModal} 
  content={<View>当前平台垫付资金<Text className='red'>-¥100.00元</Text>请先处理欠款后可正常提现</View>} 
  popWarning={true} 
  onCancel={() => {setShowModal(false)}} 
  confirmText='立即处理'
  onConfirm={() => {setShowModal(false); Taro.navigateTo({url: '/pages/repay/index'}); }}
/>
```