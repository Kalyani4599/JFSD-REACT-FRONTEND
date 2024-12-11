// src/components/Login.js

import React, { useState, useEffect } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password in sign-up mode
  const [error, setError] = useState(''); // State for error messages
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between login and sign-up mode

  // Define users for login
  const adminUsername = 'admin'; // Admin username
  const adminPassword = 'Admin@123'; // Admin password
  const expertUsername = 'expert'; // Expert username
  const expertPassword = 'Pass@123'; // Expert password
  const regularUsername = 'user'; // Regular user username
  const regularPassword = 'User@123'; // Regular user password

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      const role = localStorage.getItem('role');
      onLogin(role); // Automatically log in if token and role are cached
    }
  }, [onLogin]);

  // Password validation function
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  // Handle login functionality
  const handleLogin = () => {
    if (!validatePassword(password)) {
      setError('Password must contain at least 8 characters, including uppercase, lowercase, digits, and special characters.');
      return;
    }

    if (username === adminUsername && password === adminPassword) {
      localStorage.setItem('authToken', 'adminToken');
      localStorage.setItem('role', 'admin');
      onLogin('admin');
    } else if (username === expertUsername && password === expertPassword) {
      localStorage.setItem('authToken', 'expertToken');
      localStorage.setItem('role', 'expert');
      onLogin('expert');
    } else if (username === regularUsername && password === regularPassword) {
      localStorage.setItem('authToken', 'userToken');
      localStorage.setItem('role', 'regular');
      onLogin('regular');
    } else {
      setError('Invalid username or password');
    }
  };

  // Handle sign-up functionality
  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must contain at least 8 characters, including uppercase, lowercase, digits, and special characters.');
      return;
    }

    setIsSignUp(false);
    setError('');
    alert('Sign-up successful! You can now log in.');
  };

  return (
    <div className="login-container">
      <h1 className="login-title">{isSignUp ? 'Sign Up' : 'Login Page'}</h1>

      {/* Username Input */}
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      {/* Password Input */}
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Confirm Password for Sign-Up */}
      {isSignUp && (
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      )}

      {/* Error Message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Login/Sign-Up Button */}
      <button onClick={isSignUp ? handleSignUp : handleLogin}>
        {isSignUp ? 'Sign Up' : 'Login'}
      </button>

      {/* Switch Between Login and Sign-Up */}
      <p>
        {isSignUp ? 'Already have an account?' : 'Don’t have an account?'}{' '}
        <button
          onClick={() => {
            setIsSignUp(!isSignUp);
            setError(''); // Reset error message on toggle
          }}
          style={{ border: 'none', background: 'none', color: 'blue', cursor: 'pointer' }}
        >
          {isSignUp ? 'Login here' : 'Sign Up here'}
        </button>
      </p>
    </div>
  );
};

export default Login;
