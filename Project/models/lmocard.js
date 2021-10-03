const mongoose = require("mongoose");

const lmoSchema = new mongoose.Schema({
  shipID: {
    type: String,
    required: true
  },
  supplierID: {
    type: String,
    required: true
  },
  supllierName: {
    type: String,
    required: true
  },
  lessmaterialID: {
    type: String,
    required: true
  },
  lessmaterialName: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  unitPrice: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("lmodb", lmoSchema);
