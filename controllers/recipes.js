const Ingredient = require('../models/ingredient');
const Recipe = require('../models/recipe');

module.exports = {
    index,
    show,
    new: newRecipe,
    create
}

async function index(req, res) {
    const recipes = await Recipe.find({});
    res.render('recipes/index', { title: 'All Recipes', recipes});
}

async function show(req, res) {
    const recipe = await Recipe.findById(req.params.id).populate('ingredients');
    const ingredients = await Ingredient.find({ _id: { $nin: recipe.ingredients} }).sort('ingredientList');
    res.render('recipes/show', { title: 'All Recipes', recipe, ingredients });
}

function newRecipe(req, res) {
    res.render('recipes/new', { title: 'Add New Recipe'});
}

async function create(req, res) {
    try {
        const recipe = await Recipe.create(req.body);
        res.redirect(`/recipes/${recipe._id}`);
    } catch(err) {
        console.log(err);
        res.render('recipes/new', { errorMsg: err.message});
    }
}
