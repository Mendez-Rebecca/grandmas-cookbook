require('dotenv').config();
require('./config/database');

const Recipe = require('./models/recipe');

let recipes = await Recipe.find({});
console.log(recipes)
