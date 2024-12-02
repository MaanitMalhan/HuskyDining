// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if there's a token in localStorage when the component mounts
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token });
    }
  }, []);

  // Login function: saves token to localStorage and updates user state
  const login = (token) => {
    localStorage.setItem('token', token);
    setUser({ token });
  };

  // Logout function: removes token from localStorage and resets user state
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  // Helper to check if the user is authenticated
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};