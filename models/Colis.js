const mongoose = require('mongoose');
const ColisSchema = mongoose.Schema({
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "user" //on reference a la collection user
     },
    emailowner:{
        type: String,
        default: "not specified"
    },
    days:{
        type: Number,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    departure:{
        type: String,
        required: true,
        
    },
    arrival:{
        type: String,
        required: true,
        
    },
    
    receiver:{
        type: String,
        required: true,
        
    },

    status:{
        type:String,
        default: 'not took yet'
    },
    
  
    created_at: {
        type: Date,
        default: Date.now
    }

});
module.exports = mongoose.model('colis', ColisSchema);