const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    OrderID:{
        type:String,
        required:true
    },
    CheckedDate:{
        type:Date,
        required:true
    },
    ArrivalDate:{
        type:Date,
        required:true
    },
    BuyerID:{
        type:String,
        required:true
    },
    requirment1:{
        type:String,
        required:true
    },
    requirment2:{
        type:String,
        required:true
    },
    Qualityrate:{
        type:Number,
        required:true
    }
}
)
module.exports = mongoose.model('Postsqc',postSchema);
