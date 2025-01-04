import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BackgroundImage from '../BackgroundImage/BackGroundImage';

export default function Register() {
  const [formData, setFormData] = useState({
    //id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePassword = () => {
    const { password } = formData;
    if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    return '';
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const validationMessage = validatePassword();
    if (validationMessage) {
      setMessage(validationMessage);
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8081/api/users/register', formData);
      setMessage('Registration successful!'); // Backend success message
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });

      // Redirect to login page
      navigate('/login');
    } catch (error) {
      if (error.response) {
        // Backend returned an error response
        setMessage(error.response.data || 'Error registering user. Please try again.');
      } else if (error.request) {
        // No response received from the backend
        setMessage('No response from server. Please try again later.');
      } else {
        // Other errors
        setMessage('Error registering user. Please try again.');
      }
      console.error(error);
    }
  };
  


  return (
    <div>
      <Header />
      
      <div className="registration-container">

    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>

    <div className="box">

      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="register1">
          <label>First Name:</label>
          <input
            className="input1"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="register1">
          <label>Last Name:</label>
          <input
            className="input1"
            type="text"
            name="lastName"
            value={formData.lastName} 
            onChange={handleChange}
            required
          />
        </div>
        <div className="register1">
          <label>Email:</label>
          <input
            className="input1"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="register1">
          <label>Password:</label>
          <input
            className="input1"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="buttonregister" type="submit">
          Register
        </button>
      </form>
      {message && (
        <div
          style={{
            marginTop: '20px',
            padding: '10px',
            color: message === 'Registration successful!' ? 'green' : 'red',
            border: `1px solid ${
              message === 'Registration successful!' ? 'green' : 'red'
            }`,
          }}
        >
          {message}
        </div>
      )}
      </div>
    </div>
    <Footer />
    </div>
    </div>
  );
}
