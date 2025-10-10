// Import the mongoose library to interact with MongoDB
const mongoose = require('mongoose');

// Define the schema for the User model using mongoose.Schema
const userSchema = new mongoose.Schema({
  // The 'name' field stores the user's name as a string and is required
  name: {
    type: String,      // Data type is String
    required: true,    // This field must be provided
  },
  // The 'email' field stores the user's email address as a string, must be unique and is required
  email: {
    type: String,      // Data type is String
    required: true,    // This field must be provided
    unique: true,      // Ensures no two users have the same email
  },
  // The 'password' field stores the user's password as a string and is required
  password: {
    type: String,      // Data type is String
    required: true,    // This field must be provided
  },
}, { 
  // Enable automatic creation of 'createdAt' and 'updatedAt' timestamp fields
  timestamps: true 
});

// Create the User model from the schema, which will be used to interact with the 'users' collection in MongoDB
const User = mongoose.model('User', userSchema);

// Export the User model so it can be used in other parts of the application
module.exports = User;
