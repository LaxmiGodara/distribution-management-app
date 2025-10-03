const Customer = require('../models/Customer');

const createCustomer = async (req, res) => {
  try {
    const { name, phone, address, email, status, routeOrder } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ message: 'Name and phone are required' });
    }
    const newCustomer = new Customer({ name, phone, address, email, status, routeOrder });
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    res.status(500).json({ message: 'Error creating customer', error });
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({}).sort({ routeOrder: 1 });
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching customers', error });
  }
};

const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching customer', error });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: 'Error updating customer', error });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
    if (!deletedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting customer', error });
  }
};

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};