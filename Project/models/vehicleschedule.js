const mongoose= require('mongoose')
const vehicleSchemaschedule= new  mongoose.Schema({
    regno:{
        type:String
    },
    brandname:{

    }
})

module.exports= mongoose.model('vehicleschedules',vehicleSchemaschedule)
