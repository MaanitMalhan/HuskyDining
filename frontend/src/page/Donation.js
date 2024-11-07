import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Donation = () => {
    const [donationType, setDonationType] = useState('');
    const [amount, setAmount] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleDonationSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your donation!"); //Simple confirmation
        setShowConfirmation(true);
        setDonationType('');  //Reset the form
        setAmount('');
    };

    return (
        <div>
            <Header />
            <main className="donation-page">
                <h2>Make a Donation</h2>
                <form onSubmit={handleDonationSubmit}>
                    <label htmlFor="donationType">Donation Type:</label>
                    <select
                        id="donationType"
                        value={donationType}
                        onChange={(e) => setDonationType(e.target.value)}
                    >
                        <option value="">Select...</option>
                        <option value="flexPass">Flex Pass</option>
                        <option value="points">Points</option>
                    </select>

                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter Amount"
                    />

                    <button type="submit">Donate Now</button>
                </form>

                {showConfirmation && (
                    <div 
                    className="confirmation-message">
                    Thank you for your donation!
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Donation;
