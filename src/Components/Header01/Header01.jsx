import React from 'react'
import { Link } from 'react-router-dom';

export default function Header01() {
  return (
    <header style={{ backgroundColor: '#007BFF', color: 'white', padding: '10px 20px', textAlign: 'center' }}>
      <h2>Welcome to Our Application</h2>
      <nav>
        <Link to="/" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/Register" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Register</Link>
        <Link to="/Login" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Login</Link>
        <Link to="/main" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Main</Link> {/* New Main Page Link */}
      </nav>
    </header>
  )
}

