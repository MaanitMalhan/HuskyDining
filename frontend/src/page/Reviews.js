import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ReviewPage = () => {
  const [reviews, setReviews] = useState({});
  const [newReview, setNewReview] = useState({
    diningHall: "",
    reviewText: "",
    rating: "",
  });

  // Fetch reviews from backend when component mounts
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews"); // Fetching from backend
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { diningHall, reviewText, rating } = newReview;

    // Send new review to backend and add to local state on success
    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ diningHall, reviewText, rating }),
      });

      if (response.ok) {
        const updatedReviews = await response.json();
        setReviews(updatedReviews); // Update state with new reviews
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }

    setNewReview({ diningHall: "", reviewText: "", rating: "" });
  };

  return (
    <div>
      <Header />
      <div className="reviewHeading">
        <h1>Dining Hall Reviews</h1>
      </div>

      {/* Review Form */}
      <div className="reviewForm">
        <h2>Submit a Review</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Dining Hall:
            <select
              name="diningHall"
              value={newReview.diningHall}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a Dining Hall</option>
              <option value="Connecticut">Connecticut</option>
              <option value="McMahon">McMahon</option>
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="Northwest">Northwest</option>
              <option value="Whitney">Whitney</option>
              <option value="Putnam">Putnam</option>
              <option value="Gelfenbien">Gelfenbien</option>
            </select>
          </label>

          <label>
            Review:
            <textarea
              name="reviewText"
              value={newReview.reviewText}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Rating:
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              value={newReview.rating}
              onChange={handleInputChange}
              required
            />
          </label>

          <button type="submit">Submit Review</button>
        </form>
      </div>

      {/* Display Reviews */}
      <div className="reviewsSection">
        <h2>All Reviews</h2>
        {Object.entries(reviews).map(([hall, hallReviews]) => (
          <div key={hall} className="diningHallReviews">
            <h3>{hall} Dining Hall</h3>
            <ul>
              {hallReviews.map((review, index) => (
                <li key={index}>
                  <p>
                    <strong>Rating:</strong> {review.rating}/5
                  </p>
                  <p>{review.reviewText}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default ReviewPage;
