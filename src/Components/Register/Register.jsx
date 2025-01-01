import React, { useState } from 'react'

export default function Register() {

    const [formData, setFormData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { firstName, value } = e.target;
        setFormData({
            ...formData,
            [firstName]: value
        });
    };

    const handleChange1 = (e) => {
        const { lastName, value } = e.target;
        setFormData({
            ...formData,
            [lastName]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Submit form data (e.g., API call)
        console.log('Registered Data:', formData);
        alert('Registration successful!');
    };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>

        <div className='register1'>
          <label>ID : </label>
          <input 
            type="text"
            name="id"
            value={FormData.id}
            onChange={handleChange}
            required
          />
        </div>

        <div className='register1'>
          <label>First_Name : </label>
          <input 
            type="text"
            name="firstName"
            value={FormData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className='register1'>
          <label>Last_Name : </label>
          <input 
            type="text"
            name="lastName"
            value={FormData.lastName}
            onChange={handleChange1}
            required
          />
        </div>

        <div className='register1'>
          <label>Email : </label>
          <input 
            type="email"
            name="email"
            value={FormData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className='register1'>
          <label>Password : </label>
          <input 
            type="password"
            name="password"
            value={FormData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className='register1'>
          <label>Confirm Password : </label>
          <input 
            type="password"
            name="confirmPassword"
            value={FormData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className='buttonregister'>Register</button>

      </form>
    </div>
  );
}
