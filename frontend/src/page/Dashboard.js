import React from 'react';
import LogoutButton from '../components/LogoutButton';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the protected dashboard!</p>
      <LogoutButton />
    </div>
  );
};

export default Dashboard;