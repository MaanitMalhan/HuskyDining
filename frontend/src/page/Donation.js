import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Donation = () => {
    const [donationType, setDonationType] = useState('');
    const [amount, setAmount] = useState('');
    const [recipient, setRecipient] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [donationHistory, setDonationHistory] = useState([]);

    const handleDonationSubmit = async (e) => {
        e.preventDefault();

        if (!donationType || !amount || amount <= 0 || !recipient) {
            alert('Please fill all fields with valid data.');
            return;
        }

        try {
            const response = await fetch('/donations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    netid: 'your-netid-here',
                    donationType,
                    amount: parseInt(amount, 10),
                    recipient
                }),
            });

            if (response.ok) {
                setConfirmationMessage(`Thank you for donating ${amount} ${donationType} to ${recipient}!`);
                setShowConfirmation(true);
                setDonationType('');
                setAmount('');
                setRecipient('');
                fetchDonationHistory();
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (err) {
            console.error('Error submitting donation:', err);
            alert('An error occurred. Please try again.');
        }
    };

    // const fetchDonationHistory = async () => {
    //     try {
    //         const response = await fetch('/donations/your-netid-here');
    //         const history = await response.json();
    //         setDonationHistory(history);
    //     } catch (err) {
    //         console.error('Error fetching donation history:', err);
    //     }
    // };

    const fetchDonationHistory = async () => {
        // Stubbed data to simulate backend response
        const mockHistory = [
            {
                transaction_type: "points",
                amount: 100,
                transaction_date: "2024-11-01T10:00:00Z",
                recipient: "Recipient A",
            },
            {
                transaction_type: "flexPass",
                amount: 5,
                transaction_date: "2024-11-02T15:30:00Z",
                recipient: "Recipient B",
            },
        ];
        setDonationHistory(mockHistory);
    };
    
    useEffect(() => {
        fetchDonationHistory();
    }, []);

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
                    <div className="confirmation-message">
                        {confirmationMessage}
                    </div>
                )}
                <section className="donation-history">
                    <h3>Your Donation History</h3>
                    <ul>
                        {donationHistory.map((donation, index) => (
                            <li key={index}>
                                Donated {donation.amount} {donation.transaction_type} to {donation.recipient} on{' '}
                                {new Date(donation.transaction_date).toLocaleDateString()}
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Donation;
