var express = require('express');
const HomeController = require('../controllers/HomeController');
const CategoryController = require('../controllers/CategoryController');
const ProductController = require('../controllers/ProductController');
const router = express.Router();

router.get('/', HomeController.index);

router.post('/category', CategoryController.create);

router.get('/product', ProductController.get);
router.post('/product', ProductController.create);
router.patch('/product/:id', ProductController.edit);
router.delete('/product/:id', ProductController.delete);

module.exports = router;