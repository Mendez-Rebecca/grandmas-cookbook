const ingredient = require('../models/ingredient');
const Recipe = require('../models/recipe');

module.exports = {
    new: newIngredient
}

async function newIngredient(req, res) {
    const ingredients = await ingredient.find({}).sort('ingredientList');
    res.render('ingredients/new', { title: 'Add Ingredient', ingredients});
}
