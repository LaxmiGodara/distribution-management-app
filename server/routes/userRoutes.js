// Import the Express framework to create a router for handling user-related routes
const express = require('express');

// Create a new router instance using Express to define route handlers for user operations
const router = express.Router();

// Import the controller functions for user registration and login from the userController file
const { registerUser, loginUser } = require('../controllers/userController');

// Define a POST route for user registration at the '/register' endpoint
// When a POST request is made to '/api/users/register', the registerUser controller will handle it
router.post('/register', registerUser);

// Define a POST route for user login at the '/login' endpoint
// When a POST request is made to '/api/users/login', the loginUser controller will handle it
router.post('/login', loginUser);

// Export the router so it can be used in the main server file to mount these routes under '/api/users'
module.exports = router;