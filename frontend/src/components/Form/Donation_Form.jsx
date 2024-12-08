import React, { useState, useEffect } from "react";

export const Donation_Form = () => {
  const [donationType, setDonationType] = useState("");
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [donationHistory, setDonationHistory] = useState([]);

  const handleDonationSubmit = async (e) => {
    e.preventDefault();

    if (!donationType || !amount || amount <= 0 || !recipient) {
      alert("Please fill all fields with valid data.");
      return;
    }

    try {
      const response = await fetch("/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          netid: "your-netid-here",
          donationType,
          amount: parseInt(amount, 10),
          recipient,
        }),
      });

      if (response.ok) {
        setConfirmationMessage(
          `Thank you for donating ${amount} ${donationType} to ${recipient}!`
        );
        setShowConfirmation(true);
        setDonationType("");
        setAmount("");
        setRecipient("");
        fetchDonationHistory();
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (err) {
      console.error("Error submitting donation:", err);
      alert("An error occurred. Please try again.");
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
    <div className="container py-16">
      <div className="container w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100 my-16">
        <h1 className="text-5xl font-semibold">Make a Donation</h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
          Donate a FlexPass or Points
        </p>
        <form onSubmit={handleDonationSubmit}>
          <div className="mt-8">
            <div className="flex flex-col">
              <label htmlFor="donationType" className="text-lg font-medium">
                Donation Type:
              </label>
              <select
                id="donationType"
                value={donationType}
                onChange={(e) => setDonationType(e.target.value)}
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              >
                <option value="">Select...</option>
                <option value="flexPass">Flex Pass</option>
                <option value="points">Points</option>
              </select>
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-lg font-medium">Amount:</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter amount"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-lg font-medium">Recipient:</label>
              <input
                type="text"
                id="recipient"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="Enter Recipient"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              />
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-blue rounded-xl text-white font-bold text-lg">
                Donate
              </button>
            </div>
          </div>
        </form>

        {showConfirmation && (
          <div className="duration-200">Thank you for your donation!</div>
        )}

        <section className="donation-history">
          <h3>Your Donation History</h3>
          <ul>
            {donationHistory.map((donation, index) => (
              <li key={index}>
                Donated {donation.amount} {donation.transaction_type} to{" "}
                {donation.recipient} on{" "}
                {new Date(donation.transaction_date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
