const express = require('express');
const router = express.Router();
const ratingsCtrl = require('../controllers/ratings');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/recipes/:id/ratings', ensureLoggedIn, ratingsCtrl.create);

module.exports = router;
