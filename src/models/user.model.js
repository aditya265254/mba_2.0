const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
        default: "CUSTOMER",
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

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        if (!this.password.startsWith('$2a$') && !this.password.startsWith('$2b$') && !this.password.startsWith('$2y$')) {
            this.password = bcrypt.hashSync(this.password, 10);
        }
    }
    next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;