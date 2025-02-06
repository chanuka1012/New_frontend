import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css"

export default function Header() {
  return (
    <header style={{ backgroundColor: '#007BFF', color: 'white', padding: '10px 20px', textAlign: 'center' }}>
      <h2>Welcome to Our Application</h2>
      <nav>
        <Link to="/" className="header-link" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/Register" className="header-link" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Register</Link>
        <Link to="/Login" className="header-link" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Login</Link>
      </nav>
    </header>
  );
}

