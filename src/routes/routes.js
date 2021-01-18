var express = require('express');
const HomeController = require('../controllers/HomeController');
const CategoryController = require('../controllers/CategoryController');
const ProductController = require('../controllers/ProductController');
const router = express.Router();

router.get('/', HomeController.index);

router.post('/category', CategoryController.create);
router.post('/product', ProductController.create);

module.exports = router;