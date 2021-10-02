const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({

    orderId:{ 
        type: String,
        required: true
        },

        cusName:{ 
        type: String,
        required: true
        },

         cusStatus:{ 
         type: String,
         required: true
         }, 
      
        pjournal:{ 
        type: String,
        required: true
        },

        sjournal:{ 
        type: String,
        required: true
        }, 
            
        gjournal:{ 
        type: String,
        required: true
         },  
                
        other:{ 
        type: String,
        required: true
         }
});

module.exports = mongoose.model('Accountsdb',accountSchema);