const { getAllTheatres, getTheatreById, createTheatre, updateTheatre, deleteTheatre, addMoviesToATheatre } = require("../controllers/theatre.controller");
const { verifyToken, isAdmin, isAdminOrClint } = require("../middlewares/auth.Jwt");
const isTheatreOwneroradmin = require("../middlewares/theatre");


module.exports = function (app) {
    app.get("/mba/api/v1/theatres",[verifyToken], getAllTheatres);
    app.get("/mba/api/v1/theatres/:id", [verifyToken], getTheatreById);
    app.post("/mba/api/v1/theatres", [verifyToken, isAdmin],createTheatre);
    app.put("/mba/api/v1/theatres/:id", [verifyToken, isAdminOrClint, isTheatreOwneroradmin],updateTheatre);
    app.delete("/mba/api/v1/theatres/:id",[verifyToken, isAdminOrClint, isTheatreOwneroradmin], deleteTheatre);
    app.put("/mba/api/v1/theatres/:id/movies",[verifyToken,isAdminOrClint, isTheatreOwneroradmin], addMoviesToATheatre);
};