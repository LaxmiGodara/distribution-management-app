// Import the Customer model from the models directory
   const Customer = require('../models/Customer');

// Controller to create a new customer
const createCustomer = async (req, res) => {
  try {
    // Destructure the required and optional fields from the request body
    const { name, phone, address, email, status, routeOrder } = req.body;

    // Check if both name and phone are provided, as they are required fields
    if (!name || !phone) {
      // If either is missing, respond with a 400 Bad Request and an error message
      return res.status(400).json({ message: 'Name and phone are required' });
    }

    // Create a new Customer instance with the provided data
    const newCustomer = new Customer({ name, phone, address, email, status, routeOrder });

    // Save the new customer to the database
    const savedCustomer = await newCustomer.save();

    // Respond with the saved customer and a 201 Created status
    res.status(201).json(savedCustomer);
  } catch (error) {
    // If an error occurs, respond with a 500 Internal Server Error and the error details
    res.status(500).json({ message: 'Error creating customer', error });
  }
};

// Controller to get all customers, sorted by routeOrder in ascending order
const getAllCustomers = async (req, res) => {
  try {
    // Find all customers in the database and sort them by routeOrder (ascending)
    const customers = await Customer.find({}).sort({ routeOrder: 1 });

    // Respond with the list of customers and a 200 OK status
    res.status(200).json(customers);
  } catch (error) {
    // If an error occurs, respond with a 500 Internal Server Error and the error details
    res.status(500).json({ message: 'Error fetching customers', error });
  }
};

// Controller to get a single customer by their ID
const getCustomerById = async (req, res) => {
  try {
    // Find the customer in the database by the ID provided in the request parameters
    const customer = await Customer.findById(req.params.id);

    // If the customer does not exist, respond with a 404 Not Found and an error message
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Respond with the found customer and a 200 OK status
    res.status(200).json(customer);
  } catch (error) {
    // If an error occurs, respond with a 500 Internal Server Error and the error details
    res.status(500).json({ message: 'Error fetching customer', error });
  }
};

// Controller to update an existing customer by their ID
const updateCustomer = async (req, res) => {
  try {
    // Find the customer by ID and update with the data from the request body
    // The { new: true } option returns the updated document
    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // If the customer does not exist, respond with a 404 Not Found and an error message
    if (!updatedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Respond with the updated customer and a 200 OK status
    res.status(200).json(updatedCustomer);
  } catch (error) {
    // If an error occurs, respond with a 500 Internal Server Error and the error details
    res.status(500).json({ message: 'Error updating customer', error });
  }
};

// Controller to delete a customer by their ID
const deleteCustomer = async (req, res) => {
  try {
    // Find the customer by ID and delete them from the database
    const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);

    // If the customer does not exist, respond with a 404 Not Found and an error message
    if (!deletedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Respond with a success message and a 200 OK status
    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    // If an error occurs, respond with a 500 Internal Server Error and the error details
    res.status(500).json({ message: 'Error deleting customer', error });
  }
};

// Export all controller functions so they can be used in routes
module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};