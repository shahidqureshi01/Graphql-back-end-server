const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehiclesSchema = new Schema({
    id: Schema.Types.Number,
    pilots: []
});

module.exports = mongoose.model('Vehicles', vehiclesSchema);