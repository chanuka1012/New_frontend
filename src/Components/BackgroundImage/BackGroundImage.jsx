import React from 'react';

export default function BackgroundImage() {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <img
        src="/money_manager.jpg" // Accessing the image from the public folder
        alt="Money Manager"
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
      />
    </div>
  );
}
