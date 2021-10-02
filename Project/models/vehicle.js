const mongoose = require('mongoose')

const vehicleschema = new mongoose.Schema({

    regno:{
        type:String,
        required:true
    },

    engno:{
        type:String,
        required:true
    },
    brandname:{
        type:String,
        required:true
    },
    manuyear:{
        type:Date,
        required:true
    }


});

module.exports= mongoose.model('vehicledbs',vehicleschema)