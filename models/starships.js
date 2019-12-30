const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const starshipSchema = new Schema({
    id: Schema.Types.Number,
    pilots: [Number]
});

module.exports = mongoose.model('StarShips', starshipSchema);