import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Account = () => {
  const { user } = useContext(AuthContext);
  const [accountInfo, setAccountInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccountInfo = async () => {
      try {
        const response = await fetch('https://your-backend.com/api/account-info', {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        const data = await response.json();
        setAccountInfo(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching account information:', error);
        setLoading(false);
      }
    };

    if (user) {
      fetchAccountInfo();
    }
  }, [user]);

  if (loading) {
    return <p>Loading account information...</p>;
  }

  if (!accountInfo) {
    return <p>Unable to retrieve account information. Please try again later.</p>;
  }

  return (
    <div className="account-container">
      <h2>Account Information</h2>
      <div className="account-details">
        <p><strong>Flex Passes Remaining:</strong> {accountInfo.flexPasses}</p>
        <p><strong>Points Balance:</strong> {accountInfo.points}</p>
      </div>
      <h3>Past Transactions</h3>
      <ul className="transactions-list">
        {accountInfo.transactions.map((transaction, index) => (
          <li key={index}>
            <p><strong>Date:</strong> {transaction.date}</p>
            <p><strong>Description:</strong> {transaction.description}</p>
            <p><strong>Amount:</strong> {transaction.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Account;