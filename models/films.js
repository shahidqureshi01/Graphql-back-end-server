const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const filmSchema = new Schema({
    _id: Schema.Types.ObjectId,
    id: Number,
    characters: [],
    created: {
        type: String
    },
    director: {
        type: String
    },
    edited: {
        type: String
    },
    episode_id: {
        type: Number
    },
    opening_crawl: {
        type: String
    },
    planets: [{
        type: Number
    }],
    producer: {
        type: String
    },
    release_date: {
        type: String
    },
    species: [{
        type: Number
    }],
    starships: [{
        type: Number
    }],
    title: {
        type: String
    },
    vehicles: [{
        type: Number
    }]
});


module.exports = mongoose.model('films', filmSchema);

