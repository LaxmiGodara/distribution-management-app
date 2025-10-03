const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

// Route for creating a new product and getting all products
router.route('/').post(createProduct).get(getAllProducts);

// Route for getting, updating, and deleting a single product by its ID
router.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);

module.exports = router;