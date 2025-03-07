import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//import Header from '../Header/Header';
import Footer from '../Footer/Footer';
//import BackgroundImage from '../BackgroundImage/BackGroundImage';
import axios from 'axios';
//import Header01 from '../Header01/Header01';
import Header03 from '../Header03/Header03';
import './incomeSave.css'

export default function IncomeSave() {
  const { state } = useLocation();
  const navigate = useNavigate();

  

  const category = state?.category; // Retrieve category passed from Income Page

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const [incomeData, setIncomeData] = useState({
    amount: '',
    date: today, // Initialize with today's date
    source: '',
    userId: localStorage.getItem('userId'), // Add dynamic userId if available
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
        date: today, // Reset date to today's date
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
      <Header03/>
      <div className="income-container">
  <div className="income-box">
    <h2>Save Income</h2>
    {category && <h3 className="category-header">Category: {category}</h3>}
    <form onSubmit={handleSubmit} className="income-form">
      <div className="form-group">
        <label>Amount:</label>
        <input type="number" name="amount" value={incomeData.amount} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Date:</label>
        <input type="date" name="date" value={incomeData.date} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Source:</label>
        <input type="text" name="source" value={incomeData.source} onChange={handleChange} required />
      </div>

      <button type="submit" className="save-button">Save Income</button>
    </form>
    {message && <p className="success-message">{message}</p>}
  </div>
</div>

      <Footer />
    </div>
  );
}

