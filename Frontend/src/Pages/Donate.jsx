import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { useDonateMutation } from "../slices/donateSlice";

export const Donate = () => {
  const [fromEmail, setFromEmail] = useState("");
  
  const [toEmail, setToEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("flexpass");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const [donate, { isLoading }] = useDonateMutation();

  // const handleDonate = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     const response = await axios.post("/api/transaction/donate", {
  //       fromEmail,
  //       toEmail,
  //       amount,
  //       type,
  //     });
  //     setMessage(response.data.message);
  //   } catch (err) {
  //     setError(err.response?.data?.message || "Something went wrong");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo?.email) {
      setFromEmail(userInfo.email);
    }
  }, []);

  const handleDonate = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage("");
    try {
      const res = await donate({ fromEmail, toEmail, amount, type }).unwrap();
      setMessage(res.message || "Donation successful!");
    } catch (err) {
      setError(err?.data?.message || "Something went wrong");
    }
  };

  return (
    <main className="bg-gray-10 min-h-screen text-gray-800 flex flex-col items-center justify-center px-6">
      <Navbar />
      <div className="max-w-lg w-full text-center bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6">Donate Flex Passes or Points</h1>
        <p className="text-gray-600 mb-8">
          Help a fellow student by donating your extra Flex Passes or Points! Enter the recipient's email and amount below.
        </p>
        <form onSubmit={handleDonate} className="space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            className="w-full px-4 py-2 bg-gray-200 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
          <input
            type="email"
            placeholder="Recipient Email"
            value={toEmail}
            onChange={(e) => setToEmail(e.target.value)}
            className="w-full px-4 py-2 bg-gray-200 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
          <input
            type="number"
            min={1}
            max={1000}
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 bg-gray-200 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-2 bg-gray-200 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <option value="flexpass">Flex Pass</option>
            <option value="points">Points</option>
          </select>
          <button
            type="submit"
            className="w-full py-3 bg-custom-gradient text-white font-semibold text-lg rounded-lg transition duration-200 ease-in-out hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Donate"}
          </button>
          {message && <p className="text-green-400 mt-4">{message}</p>}
          {error && <p className="text-red-400 mt-4">{error}</p>}
        </form>
      </div>
    </main>
  );
};