import React, { useState } from 'react'; // Import React and the useState hook for managing component state
import axios from 'axios'; // Import axios for making HTTP requests

// Define the CustomerForm component, which receives an onCustomerAdded callback prop from its parent
function CustomerForm({ onCustomerAdded }) {
  // Declare a state variable 'name' and its setter 'setName', initialized to an empty string
  const [name, setName] = useState('');
  // Declare a state variable 'phone' and its setter 'setPhone', initialized to an empty string
  const [phone, setPhone] = useState('');

  // Define the function to handle form submission, marked as async for asynchronous operations
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)
    // Check if either the name or phone field is empty
    if (!name || !phone) {
      alert('Please enter both name and phone number.'); // Alert the user if validation fails
      return; // Exit the function early if validation fails
    }

    try {
      // Create a new customer object with the current name and phone values
      const newCustomer = { name, phone };
      // Send a POST request to the backend API to add the new customer
      const response = await axios.post('http://localhost:5000/api/customers', newCustomer);
      // Call the onCustomerAdded callback with the response data to notify the parent component
      onCustomerAdded(response.data); // Notify the parent component
      setName(''); // Reset the name field to an empty string after successful submission
      setPhone(''); // Reset the phone field to an empty string after successful submission
    } catch (error) {
      // Log any errors that occur during the request to the console
      console.error('Error creating customer:', error);
      // Alert the user that adding the customer failed
      alert('Failed to add customer.');
    }
  };

  // Render the form UI
  return (
    // The form element, with the handleSubmit function attached to the onSubmit event
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h3>Add New Customer</h3> {/* Heading for the form */}
      <input
        type="text" // Input type is text for the customer's name
        placeholder="Name" // Placeholder text for the input
        value={name} // Bind the input value to the 'name' state variable
        onChange={(e) => setName(e.target.value)} // Update the 'name' state when the input changes
        required // Make the field required for form validation
        style={{ marginRight: '10px', padding: '5px' }} // Inline styling for spacing and padding
      />
      <input
        type="text" // Input type is text for the customer's phone number
        placeholder="Phone" // Placeholder text for the input
        value={phone} // Bind the input value to the 'phone' state variable
        onChange={(e) => setPhone(e.target.value)} // Update the 'phone' state when the input changes
        required // Make the field required for form validation
        style={{ marginRight: '10px', padding: '5px' }} // Inline styling for spacing and padding
      />
      <button type="submit" style={{ padding: '5px 10px' }}>Add Customer</button> {/* Submit button */}
    </form>
  );
}

// Export the CustomerForm component as the default export of this module
export default CustomerForm;
