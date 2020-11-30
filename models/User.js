const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    address: String,
    phone: Number,
    email: String,
    username: String,
    password: String,
    // days: Number,
    // nature: String,
    // departure: String,
    // arrival: String,
    // secretcode: String,
    // phonereceiver: Number,
});
module.exports = mongoose.model('user', UserSchema);