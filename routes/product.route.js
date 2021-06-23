const router = require('express').Router();
const {
	getAllProducts,
	getProductByID,
	createProduct,
	editProduct,
	addImage,
	addReview,
	deleteProduct,
} = require('../controllers/product.controller');
const multer = require('multer');
const dotenv = require('dotenv').config();
const { GridFsStorage } = require('multer-gridfs-storage');
const crypto = require('crypto');

// var storage = multer.diskStorage({
// 	destination: (req, file, cb) => {
// 		cb(null, './uploads/');
// 	},
// 	filename: (req, file, cb) => {
// 		cb(null, file.fieldname + '-' + Date.now());
// 	},
// });
// var upload = multer({ storage: storage });

const storage = new GridFsStorage({
	url: process.env.CONNECTION_URL,
	file: (req, file) => {
		return new Promise((resolve, reject) => {
			crypto.randomBytes(16, (err, buf) => {
				if (err) {
					return reject(err);
				}
				const filename = file.originalname;
				const fileInfo = { filename: filename, bucketName: 'uploads' };
				resolve(fileInfo);
			});
		});
	},
});
const upload = multer({ storage });

// FETCH
router.get('/', getAllProducts);
router.get('/:id', getProductByID);

// CREATE
router.post('/', createProduct);

// UPDATE
router.put('/:id', editProduct);
router.put('/image/:id', upload.single('img'), addImage);
router.put('/review/:id', addReview);

// DELETE
router.delete('/:id', deleteProduct);

module.exports = router;
