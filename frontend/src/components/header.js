import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header">
      <h1>HuskyDining</h1>
      
      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
      />
      <button className="search">
        Search
      </button>

      {/* Sign In Button */}
      <button className="sign-in">
        Sign In
      </button>
    </nav>
  );
};

export default Header;