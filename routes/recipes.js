const express = require('express');
const router = express.Router();

const recipesCtrl = require('../controllers/recipes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', recipesCtrl.index);
router.get('/:id', recipesCtrl.show);
router.get('/new', ensureLoggedIn, recipesCtrl.new);


module.exports = router;
