import React, { useState } from "react";
import { Navbar } from "../components/navigation/Nav";
import axios from "axios";

export const Donate = () => {
  const [fromEmail, setFromEmail] = useState("");
  const [toEmail, setToEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("flexpass");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDonate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("/api/transaction/donate", {
        fromEmail,
        toEmail,
        amount,
        type,
      });
      setMessage(response.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
     <main className="bg-projblack min-h-screen text-white flex flex-col items-center justify-center px-6">
      {/*  <main
        className="bg-projblack min-h-screen text-white flex flex-col items-center justify-center px-6"
        style={{
          background: "linear-gradient(45deg, rgb(95, 20, 224), rgb(155, 105, 241))",
        }}
       > */}
      <Navbar />
      <div className="max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold mb-6">Donate Flex Passes or Points</h1>
        <p className="text-gray-400 mb-8">
          Help a fellow student by donating your extra Flex Passes or Points! Enter the recipient's email and amount below.
        </p>
        <form onSubmit={handleDonate} className="space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
          <input
            type="email"
            placeholder="Recipient Email"
            value={toEmail}
            onChange={(e) => setToEmail(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <option value="flexpass">Flex Pass</option>
            <option value="points">Points</option>
          </select>
          <button
            type="submit"
            className="w-full py-3 bg-custom-gradient text-white font-semibold text-lg rounded-lg transition duration-200 ease-in-out hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={loading}
          >
            {loading ? "Processing..." : "Donate"}
          </button>
          {message && <p className="text-green-400 mt-4">{message}</p>}
          {error && <p className="text-red-400 mt-4">{error}</p>}
        </form>
      </div>
    </main>
  );
};
