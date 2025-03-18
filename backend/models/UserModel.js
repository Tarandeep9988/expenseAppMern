const mongoose = require("mongoose");
const validator = require("validator");

// User Schema Model - (Name, email, password, creation Date) with validation rules
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true, 
        validate: validator.isEmail,
    }, 
    password: {
        type: String, 
        required: [true, "Password is required"],
        minlength: [6, "Password must be Atleast 6 character"],
    },
    transactions: {
        type: [],
    },
}, { timestamps: true })

const User = mongoose.model("User", userSchema);

module.exports = User;