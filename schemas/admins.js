var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
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
    } 
});