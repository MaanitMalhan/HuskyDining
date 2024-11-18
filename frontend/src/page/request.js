import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Request = () => {
    const [userId, setUserIdRequest] = useState('');
    const [currentUserData, setCurrentUserData] = useState(null);
    const [requestedUserData, setRequestedUserData] = useState(null);
    const [error, setError] = useState(null);

    // Function to fetch user data
    const fetchUserData = async (id, setData) => {
        setError(null);
        
        try {
            const response = await fetch(`/students/${id}`);
            if (!response.ok) {
                if (response.status === 404) {
                    setData(false); // Set to false if user not found
                } else {
                    throw new Error('Failed to fetch user data');
                }
            } else {
                const textData = await response.text();
                // Sees if data is retrieved from the backend. If not, no user was found
                if (textData) {
                    const data = JSON.parse(textData); 
                    setData(data);  
                } else {
                    setData(false);
                }
            }
        } catch (err) {
            setError(err.message);
        }
    };

    // Fetch the current user data
    useEffect(() => {
        fetchUserData('1', setCurrentUserData); // Fetch user with ID '1' for testing purposes
    }, []);

    // Handle the button click to fetch user data based on input
    const handleFetchClick = () => {
        if (userId) {
            fetchUserData(userId, setRequestedUserData); // Fetch data for the user ID entered
        }
    };

    return (
        <div>
            <Header />
            <main>
                {/* Display current user's information */}
                <h2>Your Account Information</h2>
                {currentUserData && currentUserData !== false && (
                    <div>
                        <h3>{currentUserData.name}</h3>
                        <p><strong>Points:</strong> {currentUserData.points}</p>
                        <p><strong>Flex Passes:</strong> {currentUserData.flex_passes}</p>
                        <p><strong>PeopleSoft ID:</strong> {currentUserData.peoplesoft}</p>
                        <p><strong>NetID:</strong> {currentUserData.netid}</p>
                    </div>
                )}

                {/* Input for user ID */}
                <label>
                    Enter User ID:
                    <input
                        type="text"
                        value={userId}
                        onChange={(e) => setUserIdRequest(e.target.value)}
                        placeholder="Enter ID (e.g., 420)"
                    />
                </label>
                <button onClick={handleFetchClick}>
                    {'Fetch User'}
                </button>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                
                {/* Check if requestedUserData is false (user not found) */}
                {requestedUserData === false && <p>User not found.</p>}
                
                {/* For testing purposes, shows all data of requested user */}
                {requestedUserData && requestedUserData !== false && (
                    <div>
                        <h2>Requested User Information</h2>
                        <h3>{requestedUserData.name}</h3>
                        <p><strong>Points:</strong> {requestedUserData.points}</p>
                        <p><strong>Flex Passes:</strong> {requestedUserData.flex_passes}</p>
                        <p><strong>PeopleSoft ID:</strong> {requestedUserData.peoplesoft}</p>
                        <p><strong>NetID:</strong> {requestedUserData.netid}</p>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Request;
