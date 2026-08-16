const { getAllMovies, getMovieById, createMovie, updateMovie, deletMovie } = require("../controllers/movie.controller");
const { verifyToken, isAdmin } = require("../middlewares/auth.Jwt");

module.exports = function(app) {
    app.get("/mba/api/v1/movies", getAllMovies);
    app.get("/mba/api/v1/movies/:id", getMovieById);
    app.post("/mba/api/v1/movies",[verifyToken, isAdmin], createMovie);
    app.put("/mba/api/v1/movies/:id",[verifyToken, isAdmin], updateMovie);
    app.delete("/mba/api/v1/movies/:id", [verifyToken, isAdmin], deletMovie);

};