const mongoose = require('mongoose')

const driverSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,'Please Enter Name']
    },
    age:{
        type:Number,
        required:true
    },
    nic:{
        type:String,
        unique:[true,"NIC must be UNIQUE"],
        required:[true,'Please enter NIC number'],
        maxlength:[12, 'Please enter valid NIC ']
    },
    address:{
        type:String,
        required:true
    }
});

/**
 * Validates unique email
 */
 driverSchema.path('nic').validate(async (nic) => {
    const nicCount = await mongoose.models.Driverdb.countDocuments({ nic })
    return !nicCount
  }, 'NIC already exists'
  
  )

module.exports= mongoose.model('Driverdb',driverSchema)
