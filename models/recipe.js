const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingsSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String,
}, {
    timestamps: true
});

const recipeSchema = new Schema({
    recipeName: { type: String, required: true},
    ratings: [ratingsSchema],
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: 'Ingredient'
    }],
    measurementQty: Number,
    measurements: String,
    recipeImg: String,
    instructions: String
});

module.exports = mongoose.model('Recipe', recipeSchema);
