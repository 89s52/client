var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    uid: String,                //用户ID
    user_name: String,          //用户名称
    password: String,           //登录密码
    real_name: String,          //真实姓名
    phone: String,              //电话号码
    email: String,              //电子邮箱
    group_id: Number,           //用户所属分组ID
    status: Number,             //用户状态 0:注销，1：有效，2:超级管理员
    comment: String,            //备注信息
    insert_time: Date,          //添加时间
    update_time: Date           //更新时间
});

    
