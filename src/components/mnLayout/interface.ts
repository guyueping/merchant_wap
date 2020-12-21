export interface IPb {
  title: string //  显示的title
  path?: string // 传入跳转的路径，如果不传就是默认返回上一级
  backTitle?: string // 返回的显示文案
  statusBarStyle?: object // 自定义StatusBar 的样式
  hideStatusBar?: boolean // 隐藏 顶部的StatusBar
  gotoType?: number // 跳转类型
  hideArrow?: boolean //
}
export interface IPt {
  dataList: object[]
  tabPath: string
  statusBarHeight: number
}

export interface IPs extends IPb {
  tabPath?: string
  openScroll?: boolean
  showNav?: boolean // 是否要显示头部导航栏
  showTab?: boolean // 是否要显示底部tab
  children: React.ReactNode // 显示的业务页面内容
  restStyle?: React.CSSProperties // 包裹的剩余样式属性
}
