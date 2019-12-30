const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const peopleSchema = new Schema({
    _id: Schema.Types.ObjectId,
    id: Number,
    homeworld: Number,
    name: String,
});

module.exports = new mongoose.model('People', peopleSchema, 'people');