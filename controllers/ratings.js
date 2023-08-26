const Recipe = require('../models/recipe');

module.exports = {
    create,
    delete: deleteRating
}

async function create(req, res) {
    const recipe = await Recipe.findById(req.params.id);

    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    recipe.ratings.push(req.body);

    try {
        await recipe.save();
    } catch(err) {
        console.log(err);
    }
    res.redirect(`/recipes/${recipe._id}`);
}

async function deleteRating(req, res) {
    const recipe = await Recipe.findOne({ 'ratings._id': req.params.id, 'ratings.user': req.user._id });

    if (!recipe) return res.redirect('/recipes');
    recipe.ratings.remove(req.params.id);
    await recipe.save();
    res.redirect(`/recipes/${recipe._id}`);
}
