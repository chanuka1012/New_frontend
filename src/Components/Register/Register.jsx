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
      </form>
    </div>
  );
}
