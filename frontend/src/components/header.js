import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <nav className="header" style={{ backgroundColor: '#000080', padding: '10px 0' }}>
      <h1 style={{ color: 'white', display: 'inline-block', marginLeft: '20px' }}>HuskyDining</h1>
      
      
      {/* Navigation Links */}
      <div className="nav-links" style={{ display: 'inline-block', marginLeft: '40px' }}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/request">Request</Link>
        <Link to="/donation">Donate</Link>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        style={{ marginLeft: 'auto', marginRight: '10px' }}
      />
      <button className="search" style={{ marginRight: '10px' }}>Search</button>

      {/* Log In Button with navigate onClick */}
      <button
        className="sign-in"
        style={{ marginRight: '20px' }}
        onClick={handleLoginClick}
      >
        Log In
      </button>
    </nav>
  );
};

export default Header;