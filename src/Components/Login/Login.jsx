import React, { useState } from 'react'
import './login.css'

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
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
    
        // Simple validation for demo purposes
        if (!formData.email || !formData.password) {
          setErrorMessage('Please fill in both fields.');
          return;
        }
    
        if (formData.password.length < 6) {
          setErrorMessage('Password must be at least 6 characters long.');
          return;
        }
    
        // Mock successful login
        setSuccessMessage('Login successful!');
        console.log('Login Data Submitted:', formData);
    
        // Clear form fields
        setFormData({
          email: '',
          password: '',
        });
      };

  return (
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
  );
}
