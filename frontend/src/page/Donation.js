import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Donation = () => {
    const [donationType, setDonationType] = useState('');
    const [amount, setAmount] = useState('');
    const [recipient, setRecipient] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState('');


    const handleDonationSubmit = (e) => {
        e.preventDefault();

        setConfirmationMessage(`Thank you for donating ${amount} ${donationType} to ${recipient}!`); //Simple confirmation
        setShowConfirmation(true);
        setDonationType('');  //Reset the form
        setAmount('');
        setRecipient('');
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
                    <label htmlFor="recipient">Recipient:</label>
                    <input
                        type="text"
                        id="recipient"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        placeholder="Enter Recipient"
                    />
                    <button type="submit">Donate Now</button>
                </form>

                {showConfirmation && (
                    <div 
                    className="confirmation-message">
                        {confirmationMessage}
                    </div>
                )}

            </main>
            <Footer />
        </div>
    );
};

export default Donation;
