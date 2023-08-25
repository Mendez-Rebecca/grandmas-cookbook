const Recipe = require('../models/recipe');

module.exports = {
    index,
    show
}

async function index(req, res) {
    const recipes = await Recipe.find({});
    res.render('recipes/index', { title: 'All Recipes', recipes});
}

async function show(req, res) {
    const recipe = await Recipe.findById(req.params.id).populate('ingredients');
    res.render('recipes/show', { title: 'All Recipes', recipe });
}
