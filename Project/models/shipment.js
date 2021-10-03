const mongoose = require('mongoose');


const shipmentSchema = new mongoose.Schema({

    shipmentID:{
        type: String,
        required: true
    },
    supplierID:{
        type: String,
        required: true
    },
    supllierName:{
        type: String,
        required: true
    },
    materialID:{
        type: String,
        required: true
    },
    materialName:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    },
    unitPrice:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Shipmentsdb',shipmentSchema);