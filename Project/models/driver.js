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

module.exports= mongoose.model('Driverdb',driverSchema)
