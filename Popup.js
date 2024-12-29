import React, { useState } from 'react';

const Popup = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Button clicked!');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>My Chrome Extension</h1>
      <button onClick={handleClick} style={{ padding: '10px', cursor: 'pointer' }}>
        Click me!
      </button>
      {message && <p style={{ marginTop: '10px', color: 'green' }}>{message}</p>}
    </div>
  );
};

export default Popup;

