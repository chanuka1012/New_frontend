import React, { useState } from 'react'
import './login.css'
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
//import BackgroundImage from '../BackgroundImage/BackGroundImage';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


export default function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Inside Login component
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/users/login', formData);
      setSuccessMessage(response.data); // "Login successful"
      console.log('User authenticated');
      navigate('/main'); // Navigate to Expense Page on successful login
    } catch (error) {
      setErrorMessage(error.response?.data || 'Invalid credentials.');
    }
  };

  return (

    <div>

      <Navbar />

      <div className="login-container">
        <div className="login-card">
          <h2 className="title">Login to FinanceTracker</h2>
          <p>
            Don't have an account? <a href="/signup">Sign Up here!</a>
          </p>

          <form onSubmit={handleSubmit}>
            <input className="input-field"
              type="email"
              placeholder="E-mail address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input className="input-field"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button className="login-btn" type="submit">Login</button>
          </form>



          {errorMessage && (
            <div style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</div>
          )}
          {successMessage && (
            <div style={{ color: 'green', marginBottom: '10px' }}>{successMessage}</div>
          )}




          <p className="or-text">...or login via</p>

          <button className="social-btn facebook">Login with Facebook</button>
          <button className="social-btn google">Login with Google</button>
          <button className="social-btn apple">Login with Apple</button>

          <p className="terms">
            By logging in, you agree to our <a href="/terms">Terms of Use</a> and{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>
      </div>

    </div>
  );

}
