const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    

    firstname: {
        type: String,
        required: true,
    },
    ccode:{
        type:String,
        default: 'a',
    },
    lastname: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },

    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'sending',
    } ,
    identity: {
        type: String,
        default: 'member',
    },
    verified_email: {
        type: Boolean,
        default: false,
    }
    // days: Number,
    // nature: String,
    // departure: String,
    // arrival: String,
    // secretcode: String,
    // phonereceiver: Number,
});
module.exports = mongoose.model('user', UserSchema);