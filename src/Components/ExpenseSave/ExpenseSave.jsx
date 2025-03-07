import React, { useState , useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//import Header from '../Header/Header';
import Footer from '../Footer/Footer';
//import BackgroundImage from '../BackgroundImage/BackGroundImage';
import axios from 'axios';
//import Header01 from '../Header01/Header01';
import Header03 from '../Header03/Header03';
import './expenseSave.css'

export default function ExpenseSavePage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const category = state?.category; // Retrieve category passed from ExpensePage

  const [expenseData, setExpenseData] = useState({
    amount: '',
    date: '',// Will be auto-filled
    description: '',
    userId: localStorage.getItem('userId'), // Add dynamic userId if available
  });

  const [message, setMessage] = useState('');

  // Auto-fill date with the current date when the component loads
  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
    setExpenseData((prevData) => ({ ...prevData, date: currentDate }));
  }, []);

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
        date: new Date().toISOString().split('T')[0], // Reset date to current date
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
      <Header03/>
      <div className="expense-container">
  <div className="expense-form-box">
    <h2>Save Expense for: {category}</h2>
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label>Amount:</label>
        <input type="number" name="amount" value={expenseData.amount} onChange={handleChange} required />
      </div>

      <div className="input-group">
        <label>Date:</label>
        <input type="date" name="date" value={expenseData.date} onChange={handleChange} required />
      </div>

      <div className="input-group">
        <label>Description:</label>
        <textarea name="description" value={expenseData.description} onChange={handleChange} rows="3" required></textarea>
      </div>

      <button type="submit" className="save-button">Save Expense</button>
    </form>

    {message && <div className={`message-box ${message.includes('successfully') ? 'success' : 'error'}`}>{message}</div>}
  </div>
</div>

      <Footer />
    </div>
  );
}

