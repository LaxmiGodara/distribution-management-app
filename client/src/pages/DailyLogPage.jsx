import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerRow from '../components/CustomerRow';

function DailyLogPage() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loggedCustomers, setLoggedCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const handleLogDelivery = async (customerId, status) => {
    try {
      const logData = {
        customer: customerId,
        status: status,
        date: new Date().toISOString(),
      };
      await axios.post('http://localhost:5000/api/dailylog', logData);
      setLoggedCustomers([...loggedCustomers, customerId]);
    } catch (error) {
      console.error('Error logging delivery:', error);
      alert('Failed to log delivery.');
    }
  };

  if (loading) {
    return <p>Loading customers...</p>;
  }

  return (
    <div>
      <h2>Daily Delivery Log</h2>
      <div>
        {customers.length > 0 ? (
          customers.map((customer) => (
            <CustomerRow
              key={customer._id}
              customer={customer}
              onLogDelivery={handleLogDelivery}
              isLogged={loggedCustomers.includes(customer._id)}
            />
          ))
        ) : (
          <p>No customers found.</p>
        )}
      </div>
    </div>
  );
}

export default DailyLogPage;
