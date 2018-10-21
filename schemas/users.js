var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    userID:Number,
    username: String,
    createTime: Date,
    loastLogin: Date,
    comment:String
});