import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerForm from './components/CustomerForm';

function App() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/customers');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleCustomerAdded = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Distribution Management App</h1>
      <CustomerForm onCustomerAdded={handleCustomerAdded} />
      <h2>Customer List</h2>
      {customers.length > 0 ? (
        <ul>
          {customers.map((customer) => (
            <li key={customer._id}>{customer.name} - {customer.phone}</li>
          ))}
        </ul>
      ) : (
        <p>No customers found. Add one above!</p>
      )}
    </div>
  );
}

export default App;
