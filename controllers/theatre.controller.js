const Theatre = require("../models/theatre.model")

async function getAllTheatres(req, res) {
const theaters = await Theatre.find();
res.status(200).send(theaters);
}    

async function getTheatreById(req, res) {
    const id = req.params.id;
    try {
        const theatre = await Theatre.findById(id);
        res.status(200).send(theatre);
    } catch (ex) {
        res.status(404).send ({
            message: `Theater with ID : ${id} does not exists`,
        })
    }
    }
async function createTheatre(req, res) {
const theater = req.body;
try {
    const newTheatre  = await Theatre.create(theater);
    res.status(201).send(newTheatre);
} catch (ex) {
    res.status(400).send({
        message: "Theatre body is invalid",
    });
}
    
}

async function updateTheatre(req, res) {
    const id  = req.params.id;
    try { 
        Theatre.findById(id);
    } catch (ex) {
        res.status(404).send({
            message: "Theater does not exiats",
        })
    }
    const updateTheatre = await Theatre.findByIdAndUpdate(id, req.body);
    res.send(updateTheatre);
}


async function deleteTheatre(req, res) {
    const id = req.params.id;
    try { 
        Theatre.findById(id);
    } catch (ex) {
        res.status(404).send({
            message: "Theater does not exiats",
        })
    }
    await Theatre.findByIdAndDelete(id);
}

async function addMoviesToATheatre(req, res) {
    const  moviesToBeAdded = req.body;
    if (!Array.isArray(moviesToBeAdded)) {
        res.status(400).send({
            message: "Request body should be an array of movies ids",
        });
    }
    const TheatreId = req.params.id;
    try {
        const theater = await Theatre.findById(TheatreId);
        const existingMovies = theatre.movies;
        const updateMovies = [...moviesToBeAdded, ...existingMovies];
        theater.movies = updateMovies;
        const updateTheatre = await Theatre.findByIdAndUpdate(TheatreIdm, theater);
        res.status(200).send(updateTheatre);

    } catch (ex) { 
    res.status(404).send({
        message: `Theatrea with ID: ${TheatreId} does not exist`,
    });
    }
} 
module.exports = {
    getAllTheatres,
    getTheatreById,
    createTheatre,
    updateTheatre,
    deleteTheatre,
    addMoviesToATheatre,
}