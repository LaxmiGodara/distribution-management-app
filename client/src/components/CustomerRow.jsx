import React from 'react';

function CustomerRow({ customer }) {
  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #eee',
    margin: '5px 0',
  };

  const buttonStyle = {
    padding: '5px 10px',
    marginLeft: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={rowStyle}>
      <div>
        <strong>{customer.name}</strong> ({customer.phone})
      </div>
      <div>
        {/* These buttons are placeholders for now. We will add logic tomorrow. */}
        <button style={buttonStyle}>✅</button>
        <button style={buttonStyle}>❌</button>
        <button style={buttonStyle}>⏳</button>
      </div>
    </div>
  );
}

export default CustomerRow;
