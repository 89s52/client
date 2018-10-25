var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Admin = require('../models/admin.server.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/admin', function(req, res, next){
  var admin = new Admin({
 
    title: String, 
    author: String, 
    body: String, 
    comments: [{ 
        body: String, 
        data: Date 
    }], 
    date: { 
        type: Date, 
        default: Date.now 
    }, 
    hidden: Boolean, 
    meta: { 
        votes: Number, 
        favs: Number 
  });

  admin.save(function(err){
    if(err){
      res.end('Error');
      return next();
    }

    admin.find({}, function(err, docs){
      if(err) {
        res.end('Error');
        return next();
      }

      res.json(docs);
    });
  });
});

module.exports = router;