const mongoose = require('mongoose');
const Schema = mongoose.Schema;

speciesSchema = new Schema({
    id: Number,
    classification: String,
    people: [Number],
    name: String
});

module.exports = new mongoose.model('Species', speciesSchema, 'species'); 