//const { truncateSync } = require('fs');
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
  },
  orderId: {
    type: String,
    required: true,
    
  },
  category: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('packingform',postSchema);