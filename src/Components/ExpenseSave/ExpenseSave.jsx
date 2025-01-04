import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//import Header from '../Header/Header';
import Footer from '../Footer/Footer';
//import BackgroundImage from '../BackgroundImage/BackGroundImage';
import axios from 'axios';
import Header01 from '../Header01/Header01';
import './expenseSave.css'

export default function ExpenseSavePage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const category = state?.category; // Retrieve category passed from ExpensePage

  const [expenseData, setExpenseData] = useState({
    amount: '',
    date: '',
    description: '',
    userId: '', // Add dynamic userId if available
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({ ...expenseData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/api/expenses/save', {
        ...expenseData,
        category, // Add category to the request data
      });

      setMessage('Expense saved successfully!');
      setExpenseData({
        amount: '',
        date: '',
        description: '',
        userId: '',
      });
      navigate('/expense'); // Optionally redirect after saving
    } catch (error) {
      setMessage(
        error.response?.data || 'Error saving expense. Please try again later.'
      );
      console.error(error);
    }
  };

  return (
    <div>
      <Header01 />
      <div className="expense-container">
      
      <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <div className="box">
        <h2>Save Expense for: {category}</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>Amount:</label>
            <input
              type="number"
              name="amount"
              value={expenseData.amount}
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
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={expenseData.date}
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
            <label>Description:</label>
            <textarea
              name="description"
              value={expenseData.description}
              onChange={handleChange}
              rows="3"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            ></textarea>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#28A745',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Save Expense
          </button>
        </form>
        {message && (
          <div
            style={{
              marginTop: '20px',
              padding: '10px',
              color: message.includes('successfully') ? 'green' : 'red',
              border: `1px solid ${
                message.includes('successfully') ? 'green' : 'red'
              }`,
            }}
          >
            {message}
          </div>
        )}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

