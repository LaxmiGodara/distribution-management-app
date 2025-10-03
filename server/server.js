
// Load environment variables from a .env file into process.env
require('dotenv').config();

// Import the Express framework for building web applications
const express = require('express');

// Import Mongoose for interacting with MongoDB
const mongoose = require('mongoose');

// Create an instance of an Express application
const app = express();

// Use Express middleware to automatically parse incoming JSON request bodies
app.use(express.json());

// Import product-related routes from the specified file
const productRoutes = require('./routes/productRoutes');

const customerRoutes = require('./routes/customerRoutes');

// ... after your other app.use() statements
app.use('/api/customers', customerRoutes);

// Register the product routes under the '/api/products' path prefix
app.use('/api/products', productRoutes);

// Set the port number for the server to listen on, using the PORT environment variable if available, otherwise defaulting to 8000
const PORT = process.env.PORT || 8000;

// Connect to the MongoDB database using the connection string from environment variables
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // If the connection is successful, log a success message
    console.log('MongoDB connected successfully.');

    // Start the Express server and listen for incoming requests on the specified port
    app.listen(PORT, () => {
      // Log a message indicating the server is running and the URL to access it
      console.log(`Server is running successfully on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    // If the database connection fails, log the error message
    console.error('Database connection failed:', err);
    // Exit the process with a failure code
    process.exit(1);
  });

// Define a route handler for the root URL ('/')
// When a GET request is made to '/', send a simple success message as the response
app.get("/", (req, res) => {
  res.send('Server is running successfully....')
});
