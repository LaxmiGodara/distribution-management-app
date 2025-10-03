const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Active', 'Paused', 'Inactive'],
    default: 'Active',
  },
  routeOrder: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;