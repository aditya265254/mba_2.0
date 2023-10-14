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
    
}
async function updateTheatre(req, res) {}
async function deleteTheatre(req, res) {}
async function addMoviesToATheatre(req, res) {}
module.exports = {
    getAllTheatres,
    getTheatreById,
    createTheatre,
    updateTheatre,
    deleteTheatre,
    addMoviesToATheatre,
}