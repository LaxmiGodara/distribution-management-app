import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        // Make a GET request to your backend's customer endpoint
        const response = await axios.get('http://localhost:5000/api/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []); // The empty array ensures this effect runs only once

  return (
    <div style={{ padding: '20px' }}>
      <h1>Distribution Management App</h1>
      <h2>Customer List</h2>
      {customers.length > 0 ? (
        <ul>
          {customers.map((customer) => (
            <li key={customer._id}>{customer.name} - {customer.phone}</li>
          ))}
        </ul>
      ) : (
        <p>Loading customers...</p>
      )}
    </div>
  );
}

export default App;