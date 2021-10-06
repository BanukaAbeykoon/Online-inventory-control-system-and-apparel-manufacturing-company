//const { truncateSync } = require('fs');
const mongoose = require('mongoose');

const cusOrder = new mongoose.Schema({
  topic:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true 
  },
  postCategory:{
    type:String,
    required:true
  }
});
module.exports = mongoose.model('customerOrder',cusOrder);