const Product = require('../models/product.model');
const multer = require('multer');

// GET http://localhost:5000/api/v1/products
exports.getAllProducts = async (req, res) => {
	Product.find()
		.then((products) => {
			res.status(200).json(products);
		})
		.catch((err) => res.status(500).send(err));
};

// GET http://localhost:5000/api/v1/products/:id
exports.getProductByID = async (req, res) => {
	Product.findById(req.params.id)
		.then((product) => {
			res.status(200).json(product);
		})
		.catch((err) => res.status(500).send(err));
};

// POST http://localhost:5000/api/v1/products
exports.createProduct = async (req, res) => {
	Product.create(req.body)
		.then((product) => {
			res.status(201).json(product);
		})
		.catch((err) => res.status(400).send(err));
};

// PUT http://localhost:5000/api/v1/products/:id
exports.editProduct = async (req, res) => {
	Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then((product) => {
			product
				? res.status(200).json(product)
				: res.status(404).send('Product does not exist');
		})
		.catch((err) => res.status(500).send(err));
};

// PUT http://localhost:5000/api/v1/products/:id
exports.addImage = async (req, res) => {
	Product.findByIdAndUpdate(
		req.params.id,
		{
			$push: {
				images: {
					img: req.img,
				},
			},
		},
		{ new: true }
	)
		.then((product) => {
			res.status(201).json(product);
		})
		.catch((err) => res.status(400).send(err));
};

// PUT http://localhost:5000/api/v1/products/:id
exports.addReview = async (req, res) => {
	Product.findByIdAndUpdate(
		req.params.id,
		{ $push: { reviews: req.body } },
		{ new: true }
	)
		.then((product) => {
			res.status(201).json(product);
		})
		.catch((err) => res.status(400).send(err));
};

// DELETE http://localhost:5000/api/v1/products/:id
exports.deleteProduct = async (req, res) => {
	Product.findByIdAndDelete(req.params.id)
		.then((product) => {
			product
				? res.status(200).json(product)
				: res.status(404).send('Product does not exist');
		})
		.catch((err) => res.status(500).send(err));
};
