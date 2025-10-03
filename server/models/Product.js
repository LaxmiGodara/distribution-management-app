// Import the mongoose library to interact with MongoDB
const mongoose = require('mongoose');

// Define a schema for the Product model using mongoose.Schema
const productSchema = new mongoose.Schema({
  // The 'name' field is of type String and is required for every product
  name: {
    type: String,      // Specifies that the value must be a string
    required: true     // Makes this field mandatory
  },
  // The 'price' field is of type Number and is required for every product
  price: {
    type: Number,      // Specifies that the value must be a number
    required: true     // Makes this field mandatory
  }
});

// Create a Mongoose model named 'Product' using the defined schema
const Product = mongoose.model('Product', productSchema);

// Export the Product model so it can be used in other parts of the application
module.exports = Product;
