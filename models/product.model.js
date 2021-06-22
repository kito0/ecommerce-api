const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	variation: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	reviews: [
		{
			accountID: {
				type: String,
				required: true,
			},
			message: {
				type: String,
				required: true,
			},
			timestamp: {
				type: Date,
				default: Date.now(),
				required: true,
			},
		},
	],
});

module.exports = mongoose.model('Product', productSchema);
