const Ingredient = require('../models/ingredient');
const Recipe = require('../models/recipe');

module.exports = {
    new: newIngredient,
    create,
    addToPot
}

async function newIngredient(req, res) {
    const ingredients = await Ingredient.find({}).sort('ingredientList');
    res.render('ingredients/new', { title: 'Add Ingredient', ingredients});
}

async function create(req, res) {
    try {
        await Ingredient.create(req.body);
    } catch(err){
        console.log(err)
    }
    res.redirect('/ingredients/new');
}

async function addToPot(req, res) {
    const recipe = await Recipe.findById(req.params.id);
    recipe.ingredients.push(req.body.ingredientId);
    await recipe.save();
    res.redirect(`/recipes/${recipe._id}`);
}
