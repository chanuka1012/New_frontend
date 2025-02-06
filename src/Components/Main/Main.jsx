import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import Header from '../Header/Header';
import Header02 from '../Headero2/Header02';
import Footer from '../Footer/Footer';
//import BackgroundImage from '../BackgroundImage/BackGroundImage';

import  './main.css'


export default function Main() {

    const navigate = useNavigate();

  return (
    <div>
      <Header02/>
      <div className="main-container">
      
      <div style={{ padding: '20px', textAlign: 'center' }}>
      <div className="box">
        <h1>Welcome to the Finance Manager</h1>
        <p>Manage your expenses, income, and budget efficiently.</p>

        <div style={{ marginTop: '40px' }}>
          {/* Expense Button */}
          <button
            style={{
              margin: '10px',
              padding: '15px 30px',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: '#007BFF',
              color: 'white',
              fontSize: '18px',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/expense')}
          >
            Expense
          </button>

          {/* Income Button */}
          <button
            style={{
              margin: '10px',
              padding: '15px 30px',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: '#28A745',
              color: 'white',
              fontSize: '18px',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/income')}
          >
            Income
          </button>

          

          


          

        </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
