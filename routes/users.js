var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// 选择集合
var User = require('../models/user.server.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add', function(req, res, next){
  // 数据集
  var content = {
    name:"Nick",
    age:23,
    sex:'男',
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
  };
  // 实例化对象并插入数据
  var userInsert = new User(content);

  userInsert.save(function(err){
    if(err){
      res.end('Error');
      return next();
    }

    UserInsert.find({}, function(err, docs){
      if(err) {
        res.end('Error');
        return next();
      }

      res.json(docs);
    });
  });
});


//删除
router.post('/delete', function(req, res, next) {
  var userName = req.body.name;

  user.remove({name: userName}, function(err,result){
    if(err){
    console.log(err);
  }else{
    console.log("delete success");
  };

  res.send("<a href='/'>删除成功 点击返回主页</a>");
});

//更新
router.post('/update', function(req, res, next) {
  var condition = {name: req.body.name},
  update = {$set: {password: req.body.password}},
  options = {multi: true};
  user.update(condition, update, options, function(err,result){
    if(err){
    console.log(err);
  }else{
    console.log('update error');
  };
  res.send("<a href='/'>更新成功 点击返回主页</a>");
});

//查找：find  findOne findAll  查询所有栏目 findById

router.post('/find', function(req, res, next) {

  var content = {name:"姓名2"};
  var field = {name:1,age:1,sex:1};
  
  user.find({name: req.body.name}, function(err, docs){
    console.log(docs);
    var str = "<a href='/'>查找成功 点击返回主页</a><br />" + docs;
    res.send(str);
  });
});

module.exports = router;
