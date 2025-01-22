import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [netid, setNetid] = useState('');  // Change 'email' to 'netid'
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ netid, password }),  // Send 'netid' instead of 'email'
      });
      const data = await response.json();
      
      if (data.Login) {
        login(data.token);  // Call login function with token
        navigate('/dashboard');  // Redirect to dashboard after login
      } else {
        alert('Login failed: ' + data.message);  // Show the error message from backend
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in: ' + error.message);
    }
  };

  // Function to navigate back to the home page
  const handleGoBack = () => {
    navigate('/');  // Navigate to the home page
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="netid">NetID</label> {/* Change label to 'NetID' */}
          <input
            type="text"
            id="netid"
            placeholder="Enter your netid"
            value={netid}
            onChange={(e) => setNetid(e.target.value)}  // Set 'netid' state
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button">Log In</button>
        </form>

        {/* Go Back to Home Button */}
        <button onClick={handleGoBack} className="go-back-button">
          Go Back to Home
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
