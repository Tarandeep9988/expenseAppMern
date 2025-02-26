const mongoose = require('mongoose');

// schema design
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required']
    },
    email : {
        type : String,
        required : [true, 'email is required and should by unique'],
        unique : true
    },
    password : {
        type : String, 
        required : [true, 'password is required']
    }
}, {timestamps : true})

// export
const userModel = new mongoose.model('users', userSchema);

module.exports = userModel;