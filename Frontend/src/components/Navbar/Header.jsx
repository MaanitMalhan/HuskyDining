import React from 'react';

const Header = () => {
    const username = 'John Doe'; // Placeholder username

    return (
        <div className="header">
            <div className="left">
                <h1>HuskyDining</h1>
            </div>
            <div className="right">
                <p>{username}</p>
            </div>
        </div>
    );
};

export default Header;