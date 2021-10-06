// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({

//     orderid:{
//         type:String,
//         required:true
//     },
//     cusid:{
//         type:String,
//         required:true
//     },
//     product:{
//         type:String,
//         required:true
//     },
//     quantity:{
    
//         type:String,
//         required:true
//     }

// });



module.exports = mongoose.model('orders', orderSchema)

// module.exports = mongoose.model('orders',orderSchema)

