const mongoose = require ('mongoose')

const driverSchemaSchedule= new mongoose.Schema({
    name:{
        type:String,
        required: [true,'Please Enter Name']
    
    },

    nic:{
        type:String,
        required:[true,'Please enter NIC number'],
        maxlength:[12, 'Please enter valid NIC ']
    }
})
module.exports= mongoose.model('driverschedules',driverSchemaSchedule)