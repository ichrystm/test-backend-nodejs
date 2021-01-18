var express = require('express');
const HomeController = require('../controllers/HomeController');
const CategoryController = require('../controllers/CategoryController');
const router = express.Router();

router.get('/', HomeController.index);

router.post('/category', CategoryController.create);

module.exports = router;