const mongoose = require("mongoose");

const factorySchema = new mongoose.Schema({
  orderid: {
    type: String,
    required: true,
  },

  rawproduct: {
    type: String,
    require: true,
  },

  matone: {
    type: String,
    require: true,
  },

  matoneqty: {
    type: String,
    require: true,
  },

  mattwo: {
    type: String,
    require: true,
  },

  mattwoqty: {
    type: String,
    require: true,
  },

  matthree: {
    type: String,
    require: true,
  },

  matthreeqty: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("rawmaterialfactory", factorySchema);
