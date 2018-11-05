var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  code: number,
  data: {
    securityCode: string,
    name: string,
    now: number,
    close: number,
    open: number,
    high: number,
    low: number,
    volume: number,
    bid1: number,
    bid2: number,
    bid3: number,
    bid4: number,
    bid5: number,
    bid1Volume: number,
    bid2Volume: number,
    bid3Volume: number,
    bid4Volume: number,
    bid5Volume: number,
    ask1: number,
    ask2: number,
    ask3: number,
    ask4: number,
    ask5: number,
    ask1Volume: number,
    ask2Volume: number,
    ask3Volume: number,
    ask4Volume: number,
    ask5Volume: number,
    transactions: [
      {
        time: string,
        price: number,
        volume: number,
        action: string,
        amount: number
      },
      {
        time: string,
        price: number,
        volume: number,
        action: string,
        amount: number
      },
      {
        time: string,
        price: number,
        volume: number,
        action: string,
        amount: number
      },
      {
        time: string,
        price: number,
        volume: number,
        action: string,
        amount: number
      },
      {
        time: string,
        price: number,
        volume: number,
        action: string,
        amount: number
      },
      {
        time: string,
        price: number,
        volume: number,
        action: string,
        amount: number
      }
    ],
    datetime: string
  },
  msg: string
});