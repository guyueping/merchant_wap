const mockData = [
  {
    tradeType: 1, // 1,2
    tradeStatus: 1, // 1,2,3
    amount: 123,
    tradeTime: '11月12日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 1, // 1,2
    tradeStatus: 2, // 1,2,3
    amount: 123213,
    tradeTime: '11月13日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 1, // 1,2
    tradeStatus: 3, // 1,2,3
    amount: 679,
    tradeTime: '11月14日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 2, // 1,2
    tradeStatus: 1, // 1,2,3
    amount: 67856,
    tradeTime: '11月15日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 2, // 1,2
    tradeStatus: 2, // 1,2,3
    amount: 4564545,
    tradeTime: '11月16日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 2, // 1,2
    tradeStatus: 3, // 1,2,3
    amount: 456546,
    tradeTime: '11月17日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 1, // 1,2
    tradeStatus: 1, // 1,2,3
    amount: 123,
    tradeTime: '11月12日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 1, // 1,2
    tradeStatus: 2, // 1,2,3
    amount: 123213,
    tradeTime: '11月13日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 1, // 1,2
    tradeStatus: 3, // 1,2,3
    amount: 679,
    tradeTime: '11月14日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 2, // 1,2
    tradeStatus: 1, // 1,2,3
    amount: 67856,
    tradeTime: '11月15日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 2, // 1,2
    tradeStatus: 2, // 1,2,3
    amount: 4564545,
    tradeTime: '11月16日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 2, // 1,2
    tradeStatus: 3, // 1,2,3
    amount: 456546,
    tradeTime: '11月17日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 1, // 1,2
    tradeStatus: 1, // 1,2,3
    amount: 123,
    tradeTime: '11月12日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 1, // 1,2
    tradeStatus: 2, // 1,2,3
    amount: 123213,
    tradeTime: '11月13日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 1, // 1,2
    tradeStatus: 3, // 1,2,3
    amount: 679,
    tradeTime: '11月14日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 2, // 1,2
    tradeStatus: 1, // 1,2,3
    amount: 67856,
    tradeTime: '11月15日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 2, // 1,2
    tradeStatus: 2, // 1,2,3
    amount: 4564545,
    tradeTime: '11月16日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 2, // 1,2
    tradeStatus: 3, // 1,2,3
    amount: 456546,
    tradeTime: '11月17日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 1, // 1,2
    tradeStatus: 1, // 1,2,3
    amount: 123,
    tradeTime: '11月12日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 1, // 1,2
    tradeStatus: 2, // 1,2,3
    amount: 123213,
    tradeTime: '11月13日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 1, // 1,2
    tradeStatus: 3, // 1,2,3
    amount: 679,
    tradeTime: '11月14日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 2, // 1,2
    tradeStatus: 1, // 1,2,3
    amount: 67856,
    tradeTime: '11月15日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 2, // 1,2
    tradeStatus: 2, // 1,2,3
    amount: 4564545,
    tradeTime: '11月16日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 2, // 1,2
    tradeStatus: 3, // 1,2,3
    amount: 456546,
    tradeTime: '11月17日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 1, // 1,2
    tradeStatus: 1, // 1,2,3
    amount: 123,
    tradeTime: '11月12日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 1, // 1,2
    tradeStatus: 2, // 1,2,3
    amount: 123213,
    tradeTime: '11月13日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 1, // 1,2
    tradeStatus: 3, // 1,2,3
    amount: 679,
    tradeTime: '11月14日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 2, // 1,2
    tradeStatus: 1, // 1,2,3
    amount: 67856,
    tradeTime: '11月15日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 2, // 1,2
    tradeStatus: 2, // 1,2,3
    amount: 4564545,
    tradeTime: '11月16日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  },
  {
    tradeType: 2, // 1,2
    tradeStatus: 3, // 1,2,3
    amount: 456546,
    tradeTime: '11月17日',
    bank: '建设银行', 
    cardId: '1234567890123456', // cardId.substr(-4)
  }
]

export default mockData

