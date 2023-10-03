const { createPayment } = require("../controllers/payment.controller");
const { verifyToken } = require("../middlewares/auth.Jwt");

module.exports = function (app) {
    app.post("/mba/api/v1/payments", [verifyToken] ,createPayment);
};