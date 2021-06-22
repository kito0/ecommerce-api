const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const productsRoute = require('./routes/product.route');

const app = express();
const PORT = 5000;

mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
	})
	.catch((err) => console.log(err.message));

app.use(express.json());

app.use('/api/v1/products', productsRoute);
