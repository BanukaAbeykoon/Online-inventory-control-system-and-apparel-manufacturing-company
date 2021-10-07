//const { truncateSync } = require('fs');
const mongoose = require('mongoose');

const cusOrder = new mongoose.Schema({
  orderID:{
    type:String,
    required:true
  },
  product:{
    type:String,
    required:true 
  },
  unprice:{
    type:String,
    required:true 
  },
  qty:{
    type:String,
    required:true
  }
});
module.exports = mongoose.model('cusOrd',cusOrder);