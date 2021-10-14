const mongoose = require('mongoose');

const lmomatSchema = new mongoose.Schema({

    // lmoID:{
    //     type:String,
    //     required:true
    // },

    matID:{
        type:String,
        required:true
    },

    matName:{
        type:String,
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

module.exports = mongoose.model('Lmomatdb',lmomatSchema)