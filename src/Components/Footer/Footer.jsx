import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#343A40', color: 'white', padding: '10px 20px', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Our Application. All rights reserved.</p>
    </footer>
  );
}
