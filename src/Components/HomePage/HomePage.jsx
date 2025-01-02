import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Add styling for header and footer here

export default function HomePage() {
  return (
    <div>
      {/* Header Section */}
      <header style={{ backgroundColor: '#007BFF', color: 'white', padding: '10px 20px', textAlign: 'center' }}>
        <h2>Welcome to Our Application</h2>
        <nav>
          <Link to="/" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to="/Register" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Register</Link>
          <Link to="/Login" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Login</Link>
        </nav>
      </header>

      {/* Main Content Section */}
      <main style={{ minHeight: '60vh', padding: '20px', textAlign: 'center' }}>
        <h1>HomePage</h1>
        <p>Welcome to the home page of our application.</p>
        <div>
          <Link to="/Register" style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#28A745', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Go to the Register Page</Link>
          <Link to="/Login" style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#17A2B8', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Go to the Login Page</Link>
        </div>
      </main>

      {/* Footer Section */}
      <footer style={{ backgroundColor: '#343A40', color: 'white', padding: '10px 20px', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} Our Application. All rights reserved.</p>
      </footer>
    </div>
  );
}

