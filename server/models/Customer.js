// Import the mongoose library to interact with MongoDB
const mongoose = require('mongoose');

// Define the schema for the Customer collection
const customerSchema = new mongoose.Schema({
  // Customer's name (required field)
  name: {
    type: String,      // The data type is String
    required: true,    // This field must be provided
  },
  // Customer's address (optional field)
  address: {
    type: String,      // The data type is String
    // Not required, so it can be omitted
  },
  // Customer's phone number (required field)
  phone: {
    type: String,      // The data type is String
    required: true,    // This field must be provided
  },
  // Customer's email address (optional field)
  email: {
    type: String,      // The data type is String
    // Not required, so it can be omitted
  },
  // Status of the customer (Active, Paused, or Inactive)
  status: {
    type: String,                          // The data type is String
    enum: ['Active', 'Paused', 'Inactive'],// Only these values are allowed
    default: 'Active',                     // Default value is 'Active'
  },
  // The order of the customer in a route (for sorting or delivery order)
  routeOrder: {
    type: Number,      // The data type is Number
    default: 0,        // Default value is 0 if not specified
  },
}, { 
  // Add createdAt and updatedAt timestamps automatically
  timestamps: true 
});

// Create the Customer model using the schema defined above
const Customer = mongoose.model('Customer', customerSchema);

// Export the Customer model so it can be used in other files
module.exports = Customer;