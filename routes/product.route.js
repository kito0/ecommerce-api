const router = require('express').Router();

const {
	getAllProducts,
	getProductByID,
	createProduct,
	editProduct,
	addReview,
	deleteProduct,
} = require('../controllers/product.controller');

// FETCH
router.get('/', getAllProducts);
router.get('/:id', getProductByID);

// CREATE
router.post('/', createProduct);

// UPDATE
router.put('/:id', editProduct);
router.put('/review/:id', addReview);

// DELETE
router.delete('/:id', deleteProduct);

module.exports = router;
