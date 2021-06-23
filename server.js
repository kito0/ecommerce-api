const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

const productsRoute = require('./routes/product.route');

const app = express();
const PORT = process.env.PORT || 5000;

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
app.use('/uploads/', express.static('images'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.use('/api/v1/products', productsRoute);
