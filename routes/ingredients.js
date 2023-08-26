const express = require('express');
const router = express.Router();
const ingredientsCtrl = require('../controllers/ingredients');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/ingredients/new', ensureLoggedIn, ingredientsCtrl.new);

module.exports = router;
