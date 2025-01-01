import React, { useState } from 'react' 
import './register.css'

export default function Register() {
      
    const [formData, setFormData] = useState({
        id: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const [message, setMessage] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const validatePassword = () => {
        const { password, confirmPassword } = formData;
        if (password.length < 6) {
          return 'Password must be at least 6 characters long.';
        }
        if (password !== confirmPassword) {
          return 'Passwords do not match.';
        }
        return '';
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationMessage = validatePassword();
        if (validationMessage) {
          setMessage(validationMessage);
        } else {
          setMessage('Registration successful!');
          // Reset the form fields
          setFormData({
            id: '',
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: '',
          });
        }
      };
    

  return (
    <div  style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className='register1' >
          <label>ID:</label>
          <input className='input1'
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <div className='register1'>
          <label>First Name:</label>
          <input className='input1'
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className='register1'>
          <label>Last Name:</label>
          <input className='input1'
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className='register1'>
          <label>Email:</label>
          <input className='input1'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='register1'>
          <label>Password:</label>
          <input className='input1'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className='register1'>
          <label>Confirm Password:</label>
          <input className='input1'
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button className='buttonregister'
          type="submit"
          
          
        >
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
  );
}

