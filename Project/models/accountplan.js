const mongoose = require('mongoose');

const accountplanSchema = new mongoose.Schema({

        plan:{ 
        type: String,
        required: true
        },

        section:{ 
        type: String,
        required: true
         },  
               
        

         deci:{ 
         type: String,
         required: true
         }, 
      
        requr:{ 
        type: String,
        required: true
        },

        time:{ 
        type: String,
        required: true
        }, 
            
        
});

module.exports = mongoose.model('AccountPlan',accountplanSchema);