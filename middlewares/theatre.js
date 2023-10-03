const { USERTYPES } = require("../constant");
const Theatre = require("../models/theatre.model");
const User = require("../models/user.model");

const isTheatreOwneroradmin = async (req, res, next) => {
    const theatreId = req.params.id;
    const userId = req.userId;
    const userType = req.userType;
    if (req.userType === USERTYPES.ADMIN) {
        next();
    }
    try {
        const theatre = await Theatre.findbyId(theatreId);
        const ownerId = theatre.ownerId;

        const user = await User.findOne({ userId: userId });
        const id = user._id;

        if (id === ownerId) {
            next();
        } else {
            res.status(403).send({
                message: "Only theatre owner can call this API"
            })
        }

    } catch  (ex) {
        res.status(400).send({
            message: "Bad request"
        })
    }
}

module.exports = isTheatreOwneroradmin;