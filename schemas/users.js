var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    userID:Number,
    name:String,
    comment:String
});
