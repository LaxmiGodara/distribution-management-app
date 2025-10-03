const express = require('express');
const router = express.Router();
const {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} = require('../controllers/customerController');

router.route('/').post(createCustomer).get(getAllCustomers);

router.route('/:id').get(getCustomerById).put(updateCustomer).delete(deleteCustomer);

module.exports = router;