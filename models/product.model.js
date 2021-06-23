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
	price: {
		type: Number,
		required: true,
	},
	images: [
		{
			img: {
				type: String,
				required: true,
			},
		},
	],
	tags: [
		{
			tag: {
				type: String,
				required: true,
			},
		},
	],
	sizes: [
		{
			size: {
				type: String,
				required: true,
			},
			price: {
				type: Number,
				required: true,
			},
		},
	],
	colors: [
		{
			color: {
				type: String,
				required: true,
			},
			price: {
				type: Number,
				required: true,
			},
		},
	],
	variations: [
		{
			variationType: {
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
		},
	],
	reviews: [
		{
			userID: {
				type: String,
				required: true,
			},
			username: {
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
