const express = require('express');
const router = express.Router();

const recipesCtrl = require('../controllers/recipes');

/* GET users listing. */
router.get('/', recipesCtrl.index);


module.exports = router;
