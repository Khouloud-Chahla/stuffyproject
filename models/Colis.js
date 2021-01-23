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
        
    },
    type:{
        type: String,
        required: true,
    },
    departure:{
        type: String,
        
    },
    arrival:{
        type: String,
        
    },
    
    receiver:{
        type: String,
        
    },
    
  
    created_at: {
        type: Date,
        default: Date.now
    }

});
module.exports = mongoose.model('colis', ColisSchema);