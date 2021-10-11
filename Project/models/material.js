const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({

    // matID:{
    //     type:String,
    //     required:true
    // },

    matName:{
        type:String,
        required:true
    },

    supID:{
        type:String,
        required:true
    },

    supName:{
        type:String,
        required:true
    },

    arrDate:{
        type:String,
        required:true
    },

    shipID:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    qty:{
        type:Number,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('Materialdb',materialSchema)