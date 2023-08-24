// src/Register.js
import React, { useState } from 'react';
import Login from './Login';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white p-16 rounded-2xl shadow-2xl w-full sm:w-96">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full px-4 py-2 rounded border mb-3"
            onChange={handleChange}
            value={formData.username}
            required
          />
          <input
            type="first_name"
            name="first_name"
            placeholder="john"
            className="w-full px-3 py-2 rounded border mb-3"
            onChange={handleChange}
            value={formData.first_name}
            required
          />
          <input
            type="last_name"
            name="last_name"
            placeholder="doe"
            className="w-full px-3 py-2 rounded border mb-3"
            onChange={handleChange}
            value={formData.last_name}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-3 py-2 rounded border mb-3"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-3 py-2 rounded border mb-3"
            onChange={handleChange}
            value={formData.password}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full px-3 py-2 rounded border mb-3"
            onChange={handleChange}
            value={formData.confirmPassword}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
          >
            Register
          </button>
          <p className='text-sm font-thin text-blue-500 py-4 justify-center'> have an account?  </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
