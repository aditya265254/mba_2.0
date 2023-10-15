const { USERTYPES } = require("../constant");
const Booking = require("../models/booking.model");
const User = require("../models/user.model");

async function getAllBookings(req, res) {

     
    if (req.userType === USERTYPES.CUSTOMER) {
        const userId = req.userId;
        const user = await User.find({ userId: userId});
        const queryObj = {};
        queryObj.userId = user._id;
    } 
    const bokkings = await Booking.find(queryObj);
    res.status(200).send(bookings);
}
async function getBookingById(req, res) {
   try { 
    const booking = await Booking.findById(req.params.id);
    if (req.userType === USERTYPES.ADMIN || req.userType === USERTYPES.CLINT){
        res.send(booking);
    } else if (req.userType ===  USERTYPES.CUSTOMER) {
        const userId = req.userId;
        const user = await User.find({ userId: userId});
         
        if (booking.userId === user._id) {
            res.send(booking);
        } else {
            res.status(403).send({
                message: `This booking is not created by the current user`
            })
        }
    }
   } catch (ex) {
    res.status(404).send({
        message: `Booking with Id: ${req.params.id} does not exists`,
    })
   }
}
async function updateBooking(req, res) {  

    if (req.userType === USERTYPES.ADMIN || req.userType === USERTYPES.CLINT){
    const updateBooking = await Booking.findByIdAndUpdate(req.params.id, req.body);
    res.send(updateBooking);
 
     } else if (req.userType ===  USERTYPES.CUSTOMER) {
        const userId = req.userId;
        const user = await User.find({ userId: userId});
     
        try {
        const booking = await Booking.findById(req.params.id);
        if (booking.userId === user._id) {
            const updateBooking = await Booking.findByIdAndUpdate(req.params.id, req.body);
            res.send(updateBooking);
        } else {
            res.status(403).send({
                message: `User can only updat a booking created by them`
            })
        }
        } catch (ex) {
            res.status(404).send({
                message: `Booking with Id: ${req.params.id} does not exists`,
            })
        } 
        
    } 
   }
async function createBooking(req, rea) {
    const booking = await Booking.create(req.body);
    res.status(201).send(booking);
}


module.exports  = {
    getAllBookings,
    getBookingById,
    updateBooking,
    createBooking,
} 