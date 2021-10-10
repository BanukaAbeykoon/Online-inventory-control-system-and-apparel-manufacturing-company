const mongoose = require('mongoose')

const vehicleschema = new mongoose.Schema({

    regno:{
        type:String,
        required:true,
        unique:true
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

/**
 * Validates unique email
 */
 vehicleschema.path('regno').validate(async (regno) => {
    const nicCount = await mongoose.models.vehicledbs.countDocuments({ regno })
    return !nicCount
  }, 'Reg no is already exists'
 )
module.exports= mongoose.model('vehicledbs',vehicleschema)