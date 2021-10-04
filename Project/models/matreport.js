const mongoose = require('mongoose');

const matreportSchema = new mongoose.Schema({

    matreportID:{
        type:String,
        required:true
    },

    matID:{
        type:String,
        required:true
    },

    matName:{
        type:String,
        required:true
    },

    date:{
        type:String,
        required:true
    },

    shipID:{
        type:String,
        required:true
    },

    defect:{
        type:String,
        required:true
    },

    qty:{
        type:Number,
        required:true
    }

   


});

module.exports = mongoose.model('Matreportdb',matreportSchema)