// Import the bcryptjs library for hashing and comparing passwords securely
const bcrypt = require('bcryptjs');
// Import the jsonwebtoken library for creating and verifying JWT tokens
const jwt = require('jsonwebtoken');
// Import the User model to interact with the users collection in MongoDB
const User = require('../models/User');

// Function to generate a JWT token for a given user ID
const generateToken = (id) => {
  // Sign a new JWT token with the user's id as payload, using the secret from environment variables, and set it to expire in 30 days
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Controller function to handle user registration
const registerUser = async (req, res) => {
  try {
    // Destructure name, email, and password from the request body
    const { name, email, password } = req.body;

    // Check if any of the required fields are missing
    if (!name || !email || !password) {
      // Respond with a 400 Bad Request if any field is missing
      return res.status(400).json({ message: 'Please add all fields' });
    }

    // Check if a user with the provided email already exists in the database
    const userExists = await User.findOne({ email });
    if (userExists) {
      // Respond with a 400 Bad Request if the user already exists
      return res.status(400).json({ message: 'User already exists' });
    }

    // Generate a salt for hashing the password (10 rounds)
    const salt = await bcrypt.genSalt(10);
    // Hash the user's password using the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user in the database with the provided name, email, and hashed password
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // If user creation is successful, respond with the user's details and a JWT token
    if (user) {
      res.status(201).json({
        _id: user.id, // User's unique ID
        name: user.name, // User's name
        email: user.email, // User's email
        token: generateToken(user._id), // JWT token for authentication
      });
    } else {
      // If user creation failed, respond with a 400 Bad Request
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    // If any error occurs during registration, respond with a 500 Internal Server Error and the error details
    res.status(500).json({ message: 'Server error', error });
  }
};

// Controller function to handle user login
const loginUser = async (req, res) => {
  try {
    // Destructure email and password from the request body
    const { email, password } = req.body;
    // Find the user in the database by email
    const user = await User.findOne({ email });

    // If user exists and the provided password matches the hashed password in the database
    if (user && (await bcrypt.compare(password, user.password))) {
      // Respond with the user's details and a JWT token
      res.json({
        _id: user.id, // User's unique ID
        name: user.name, // User's name
        email: user.email, // User's email
        token: generateToken(user._id), // JWT token for authentication
      });
    } else {
      // If authentication fails, respond with a 400 Bad Request
      res.status(400).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    // If any error occurs during login, respond with a 500 Internal Server Error and the error details
    res.status(500).json({ message: 'Server error', error });
  }
};

// Export the controller functions so they can be used in route handlers
module.exports = {
  registerUser,
  loginUser,
};
