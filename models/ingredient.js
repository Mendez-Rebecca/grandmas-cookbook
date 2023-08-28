const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    ingredientList: {
        type: String,
        required: true
    },
    measurementQty: {
        type: Number,
        required: true
    },
    measurements: String
});

module.exports = mongoose.model('Ingredient', ingredientSchema)
