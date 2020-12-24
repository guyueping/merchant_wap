export const getDate = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  return {year, month}
}

export const typeAry = ['全部', '垫付还款', '提现'] // 0 全部，1 充值， 2 提现

export const statusAry = ['全部', '处理中', '交易成功', '交易失败'] 

export const status = statusAry.map((each: string, index: number) => ({label: each, value: index}))

export interface I_TradeResult{
  list?: I_TradeRecords;
  page?: number;
  size?: number;
  total?: number;
  isEnd?: boolean;
}

export interface I_TradeRecords{
  tradeType: number;
  tradeStatus: number;
  amount: number;
  tradeTime: string;
  bank?: string;
  cardId?: string;  // cardId.substr(-4)
}

export interface I_ReqData{
  balanceTradeType?: number; // 交易类型：0 全部，1 充值， 2 提现
  tradeStatus?: number; // 交易状态：0 全部，1 处理中， 2 成功，3 失败
  tradeTimeFrom?: any; // 开始时间 Timestamp
  tradeTimeTo?: any; // 结束时间 Timestamp
  page?: number,
  size?: number
}