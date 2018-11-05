var mongoose = require('mongoose');
var stockMarketsSchema = require('../schemas/stock.market');

module.exports = mongoose.model('StockMarkets', stockMarketsSchema);