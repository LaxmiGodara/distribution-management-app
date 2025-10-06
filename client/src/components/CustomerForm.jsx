import React, { useState } from 'react';
import axios from 'axios';

function CustomerForm({ onCustomerAdded }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please enter both name and phone number.');
      return;
    }

    try {
      const newCustomer = { name, phone };
      const response = await axios.post('http://localhost:5000/api/customers', newCustomer);
      onCustomerAdded(response.data); // Notify the parent component
      setName(''); // Clear the form
      setPhone(''); // Clear the form
    } catch (error) {
      console.error('Error creating customer:', error);
      alert('Failed to add customer.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h3>Add New Customer</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <button type="submit" style={{ padding: '5px 10px' }}>Add Customer</button>
    </form>
  );
}

export default CustomerForm;
