import React from 'react';

function CustomerRow({ customer, onLogDelivery, isLogged }) {
  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #eee',
    margin: '5px 0',
    backgroundColor: isLogged ? '#f0f0f0' : '#fff',
    color: isLogged ? '#999' : '#000',
  };

  const buttonStyle = {
    padding: '5px 10px',
    marginLeft: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: isLogged ? 'not-allowed' : 'pointer',
  };

  return (
    <div style={rowStyle}>
      <div>
        <strong>{customer.name}</strong> ({customer.phone})
      </div>
      <div>
        <button
          style={buttonStyle}
          onClick={() => onLogDelivery(customer._id, 'Delivered')}
          disabled={isLogged}
        >✅</button>
        <button
          style={buttonStyle}
          onClick={() => onLogDelivery(customer._id, 'Damaged')}
          disabled={isLogged}
        >❌</button>
        <button
          style={buttonStyle}
          onClick={() => onLogDelivery(customer._id, 'Not Delivered')}
          disabled={isLogged}
        >⏳</button>
      </div>
    </div>
  );
}

export default CustomerRow;
