const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    ingredientList: {
        type: String,
        require: true,
        unique: true
    },
    measurementQty: Number,
    measurements: String
});

module.exports = mongoose.model('Ingredient', ingredientSchema)
