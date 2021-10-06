const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

        missingitem:{
            type:Number,
            required:true
        },
        misplased:{
            type:Number,
            required:true
        },
        ambigusitem:{
            type:Number,
            required:true
        },
        duplicateitem:{
            type:Number,
            required:true
        },
        srate:{
            type:Number,
            required:true
        }
}
)


module.exports = mongoose.model('Postsqcc',postSchema);
