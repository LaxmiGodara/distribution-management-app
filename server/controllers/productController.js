// Import the Product model from the models directory
const Product = require('../models/Product');


// @desc    Create a new product
const createProduct = async (req, res) => {
  try {
    // Destructure name and price from the request body
    const { name, price } = req.body;
    // Check if required fields (name and price) are present in the request
    if (!name || !price) {
      // If either field is missing, return a 400 Bad Request with an error message
      return res.status(400).json({ message: 'Please provide name and price' });
    }
    // Create a new Product instance with the provided name and price
    const newProduct = new Product({ name, price });
    // Save the new product to the database
    const savedProduct = await newProduct.save();
    // Respond with the saved product and a 201 Created status
    res.status(201).json(savedProduct);
  } catch (error) {
    // If an error occurs, respond with a 500 Internal Server Error and the error details
    res.status(500).json({ message: 'Error creating product', error });
  }
};

// @desc    Get all products
// @route   GET /api/products
const getAllProducts = async (req, res) => {
  try {
    // Retrieve all products from the database
    const products = await Product.find({});
    // Respond with the list of products and a 200 OK status
    res.status(200).json(products);
  } catch (error) {
    // If an error occurs, respond with a 500 Internal Server Error and the error details
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

// @desc    Get a product by its ID
// @route   GET /api/products/:id
const getProductById = async (req, res) => {
  try {
    // Extract the product ID from the request parameters
    const productId = req.params.id;
    // Find the product in the database by its ID
    const product = await Product.findById(productId);

    // If the product does not exist, return a 404 Not Found with an error message
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    // Respond with the found product and a 200 OK status
    res.status(200).json(product);
  } catch (error) {
    // If an error occurs, respond with a 500 Internal Server Error and the error details
    res.status(500).json({ message: 'Error fetching product', error });
  }
};

// @desc    Update a product by its ID
// @route   PUT /api/products/:id
const updateProduct = async (req, res) => {
  try {
    // Extract the product ID from the request parameters
    const productId = req.params.id;
    // Get the updated data from the request body
    const updatedData = req.body;
    // Find the product by ID and update it with the new data, returning the updated document
    const updatedProduct = await Product.findByIdAndUpdate(productId, updatedData, { new: true });

    // If the product does not exist, return a 404 Not Found with an error message
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    // Respond with the updated product and a 200 OK status
    res.status(200).json(updatedProduct);
  } catch (error) {
    // If an error occurs, respond with a 500 Internal Server Error and the error details
    res.status(500).json({ message: 'Error updating product', error });
  }
};

// @desc    Delete a product by its ID
// @route   DELETE /api/products/:id
const deleteProduct = async (req, res) => {
  try {
    // Extract the product ID from the request parameters
    const productId = req.params.id;
    // Find the product by ID and delete it from the database
    const deletedProduct = await Product.findByIdAndDelete(productId);

    // If the product does not exist, return a 404 Not Found with an error message
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    // Respond with a success message and a 200 OK status
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    // If an error occurs, respond with a 500 Internal Server Error and the error details
    res.status(500).json({ message: 'Error deleting product', error });
  }
};

// Export all controller functions so they can be used in route definitions
module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};