const router = require('express').Router();

const {
	getAllProducts,
	createProduct,
	editProduct,
} = require('../controllers/product.controller');

router.get('/', getAllProducts);

router.put('/:id', editProduct);

router.post('/', createProduct);

module.exports = router;
