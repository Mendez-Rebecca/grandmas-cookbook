const ingredient = require('../models/ingredient');
const Recipe = require('../models/recipe');

module.exports = {
    new: newIngredient,
    create,
    addToPot
}

async function newIngredient(req, res) {
    const ingredients = await ingredient.find({}).sort('ingredientList');
    res.render('ingredients/new', { title: 'Add Ingredient', ingredients});
}

async function create(req, res) {
    try {
        await ingredient.create(req.body);
    } catch(err){
        console.log(err)
    }
    res.redirect('/ingredients/new');
}

async function addToPot(req, res) {
    try {
        const recipe = await Recipe.findById(req.params.id).populate('ingredients');
        res.render('recipes/addToPot', { recipe });
    } catch (err) {
        console.error(err);
    }
}
