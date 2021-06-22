const Product = require('../models/product.model');

// GET http://localhost:5000/api/v1/products
exports.getAllProducts = async (req, res) => {
	Product.find().then((products) => {
		res.status(200).json(products);
	});
};

// GET http://localhost:5000/api/v1/products
exports.createProduct = async (req, res) => {
	Product.create(req.body).then((product) => {
		res.status(201).json(product);
	});
};

// PUT http://localhost:5000/api/v1/products/:id
exports.editProduct = async (req, res) => {
	Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
		(product) => {
			res.status(200).json(product);
		}
	);
};
