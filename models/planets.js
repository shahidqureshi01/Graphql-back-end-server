const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planetsSchema = new Schema({
    id: Number,
    name: String
});

module.exports = new mongoose.model('Planets', planetsSchema);
