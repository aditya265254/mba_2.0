const jwt = require("jasonwebtoken");
const { USERTYPES } = require("../constant");

const verifyToken = (req, res, next) => {
    let token = req.headers["x-acess-token"];
    if (!token) {
        res.status(401).send({
            message: "no acess token provided",
        });
    }
    jwt.verify(token, SECRET_KEY,(err,decoded) =>{
         if (err) {
            res.status(401).send({
                message: "Acess token is invalid",
            });
            return;
         }
         req.userId = decoded.userId;
         req.userType = decoded.userType;
         next;

    });
};

const isAdmin = (req, res, next) => {
  if (!req.userId) {
    let token =  req.headers["x-access-token"];
    if (!token) {
        res.status(401).send({
            message: "No access token provided",
        });
    }
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            req. status(401).send({
                message: "Access token is invalid", 
            });
            return;
        }
        req.userId = decoded.userId;
        req.userType = decoded.userType;
    });
  }
  if (req.userId && req.userType && req.userType === USERTYPES.ADMIN) {
    next();
  } else if (req.userType !== USERTYPES.ADMIN) {
    res.status(403).send ({
        message: "User is not an admin",
     });
  }
};



const isAdminOrClint = (req, res, next) => {
    if (!req.userId) {
        let token =  req.headers["x-access-token"];
        if (!token) {
            res.status(401).send({ 
                message: "No access token provided",
            });
        }
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                req. status(401).send({
                    message: "Access token is invalid", 
                });
                return;
            }
            req.userId = decoded.userId;
            req.userType = decoded.userType;
        });
      }
      if (req.userId && req.userType && (req.userType === USERTYPES.ADMIN || req.userType === USERTYPES.CLINT )) {
        next();
      } else if (req.userType !== USERTYPES.ADMIN && req.userType !== USERTYPES.CLINT ) {
        res.status(403).send ({
            message: "User is not an admin or clint",
         });
      }
}  


module.exports = {
    isAdmin,
    isAdminOrClint,
    verifyToken
};