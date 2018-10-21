
var mongoose = require('mongoose');
var userSchema = require('../schemas/users');

mongoose.model('user',userSchema);