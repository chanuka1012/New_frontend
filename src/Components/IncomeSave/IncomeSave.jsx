import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//import Header from '../Header/Header';
import Footer from '../Footer/Footer';
//import BackgroundImage from '../BackgroundImage/BackGroundImage';
import axios from 'axios';
import Header01 from '../Header01/Header01';
import './incomeSave.css'

export default function IncomeSave() {
  const { state } = useLocation();
  const navigate = useNavigate();

  

  const category = state?.category; // Retrieve category passed from Income Page

  const [incomeData, setIncomeData] = useState({
    amount: '',
    date: '',
    source: '',
    userId: '', // Add dynamic userId if available
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncomeData({ ...incomeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/api/incomes/save', {
        ...incomeData,
        category, // Add category to the request data
      });

      setMessage('Income saved successfully!');
      setIncomeData({
        amount: '',
        date: '',
        source: '',
        userId: '',
      });
      navigate('/income'); // Redirect back to Income Page
    } catch (error) {
      setMessage(
        error.response?.data || 'Error saving income. Please try again later.'
      );
      console.error(error);
    }
  };

  return (
    <div>
      <Header01/>
      <div className="income-container">
      <div style={{ padding: '20px', textAlign: 'center' }}>
      <div className="box">
        <h2>Save Income</h2>
        {category && <h3>Category: {category}</h3>}
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Amount:</label>
            <input
              type="number"
              name="amount"
              value={incomeData.amount}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Date:</label>
            <input
              type="date"
              name="date"
              value={incomeData.date}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Source:</label>
            <input
              type="text"
              name="source"
              value={incomeData.source}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#007BFF',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Save Income
          </button>
        </form>
        {message && <p style={{ marginTop: '20px', color: 'green' }}>{message}</p>}
      </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

