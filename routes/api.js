var express = require('express');
var router = express.Router();

router.use(function(){
  responseData = {
     code:0,
     message:''
  }
});


/* GET users listing. */
router.post('/user/register', function(req, res, next) {
  console.log(req.body);
});

module.exports = router;
