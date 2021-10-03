const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({

    facname: {
        type: String,
        required: true,
    },

    factelephone: {
        type: Number,
        require: true,
    },

    facemail: {
        type: String,
        require: true,
    },

    facwebsite: {
        type: String,
        require: true,
    },

    ceoname: {
        type: String,
        require: true,
    },

    fconame: {
        type: String,
        require: true,
    },

    product: {
        type: String,
        require: true,
    },

    units: {
        type: Number,
        require: true,
    }

});

module.exports = mongoose.model('inventory', inventorySchema);

