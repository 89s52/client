
var mongoose = require('mongoose');
var usersSchema = require('../schemas/admins');

module.exports = mongoose.model('Admin', adminsSchema);