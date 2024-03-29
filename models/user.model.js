const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minLength: 10,
    },
    userStatus: {
        type: String,
        required: true, 
        default: "PENDING",
    },
    userType: {
        type: String,
        required: true,
        default: "COSTUMER",
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    updatedAt: {
        type: String,
        default: () => Date.now(),
    }
});

 const User = mongoose.model("User",userSchema);

 module.exports = User;