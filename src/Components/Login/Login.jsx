import React, { useState } from 'react'
import './login.css'
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BackgroundImage from '../BackgroundImage/BackGroundImage';

export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const [errorMessage, setErrorMessage] = useState('');
      const [successMessage, setSuccessMessage] = useState('');
    
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
        } catch (error) {
          setErrorMessage(error.response?.data || 'Invalid credentials.');
        }
      };

  return (
    <div>
      <Header />
      <BackgroundImage />
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      
             
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='login1'>
          <label>Email:</label>
          <input className='login_input'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='login1'>
          <label>Password:</label>
          <input className='login_input'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {errorMessage && (
          <div style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</div>
        )}
        {successMessage && (
          <div style={{ color: 'green', marginBottom: '10px' }}>{successMessage}</div>
        )}
        <button
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Login
        </button>
      </form>
    </div>
    <Footer />
    </div>
  );
}
