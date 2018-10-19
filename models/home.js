//引用mongoose模块    
var mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost:27017/test')

//创建对象定义集合结构类型(其实就是表结构)
var testSchema=new mongoose.Schema({
    userID:Number,
    name:String,
    comment:String
},{collection:'sam'});//collection:'sam'表示操作的集合

//操作数据库
var Cat=mongoose.model('Cat',testSchemas);
var kitty=new Cat({userID:1,name:"李四",comment:"路过路过"});
kitty.save(function(err){
    if(err){
        console.log(err);
        data.err="保存失败";
    }else{
        data.err="保存成功";
    }
});
