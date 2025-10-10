// Import the Express library to create a router for handling product-related routes
const express = require('express');

// Create a new router instance using Express's Router functionality
const router = express.Router();

// Import the product controller functions for handling product operations
const {
  createProduct,    // Controller to handle creating a new product
  getAllProducts,   // Controller to handle fetching all products
  getProductById,   // Controller to handle fetching a single product by its ID
  updateProduct,    // Controller to handle updating a product by its ID
  deleteProduct,    // Controller to handle deleting a product by its ID
} = require('../controllers/productController');

const { protect } = require('../middleware/authMiddleware');

// Define the route for the root path ('/')
// POST /api/products - Create a new product
// GET /api/products - Retrieve all products
router.route('/')
  .post(createProduct)      // When a POST request is made to '/', call createProduct
  .get(getAllProducts);     // When a GET request is made to '/', call getAllProducts

// Define the route for operations on a specific product by its ID ('/:id')
// GET /api/products/:id - Retrieve a product by its ID
// PUT /api/products/:id - Update a product by its ID
// DELETE /api/products/:id - Delete a product by its ID
router.route('/:id')
  .get(getProductById)      // When a GET request is made to '/:id', call getProductById
  .put(updateProduct)       // When a PUT request is made to '/:id', call updateProduct
  .delete(deleteProduct);   // When a DELETE request is made to '/:id', call deleteProduct

// Export the router so it can be used in the main server file
module.exports = router;