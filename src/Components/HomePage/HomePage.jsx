import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Add styling for header and footer here
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BackgroundImage from '../BackgroundImage/BackGroundImage';

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="home-container">
      <div className="box"> 
      {/* Main Content Section */}
      <main style={{ minHeight: '60vh', padding: '20px', textAlign: 'center' }}>
        
        <h1>HomePage</h1>
        <p>Welcome to the home page of our application.</p>
        <div>
          <Link to="/Register" style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#28A745', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Go to the Register Page</Link>
          <Link to="/Login" style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#17A2B8', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Go to the Login Page</Link>
        </div>
      </main>
      </div>
      </div>
      <Footer />
    </div>
  );
}

