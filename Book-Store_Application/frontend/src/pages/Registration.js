import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', formData);
      alert('Registration Successful');
    } catch (error) {
      alert('Registration Failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
