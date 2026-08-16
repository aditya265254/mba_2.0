const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    bookingId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Bookings",
        require: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "IN_PROGRESS",
    },
    createdAt: {
        type: Date,
        default: () => Date.now (),
        required: true,
        immutable: true,
    }, 
    updatedAt: {
        type: Date,
        default: () => Date.now (),
    }   
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
