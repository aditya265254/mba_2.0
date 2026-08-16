const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        require: true,
    },
    cast: {
        type: [String],
        required: true,
    },
    trailorUrl: {
        type: String,
        required: true,
    },
    posterUrl: {
        type: String,
        required: true,
    },
    language: {
        type: [String],
        required: true,
    },
    genre : {
        type: String,
    },
    director: {
        type: String,
    },
    ratings: {
        type: String,
    },
    releaseStatus: {
        type: String,
        required: true,
        default: "RELESED",
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

    const Movie = mongoose.model("Movie",movieSchema)
    module.exports = Movie;