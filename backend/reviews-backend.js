// reviews-backend.js
// Assume a basic Express setup

const express = require("express");
const mysql = require("mysql2/promise");
const app = express();
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "yourUsername",
  password: "yourPassword",
  database: "yourDatabase",
});

// Get reviews from database
app.get("/api/reviews", async (req, res) => {
  try {
    const [reviews] = await db.query("SELECT * FROM reviews");
    const formattedReviews = reviews.reduce((acc, review) => {
      if (!acc[review.diningHall]) acc[review.diningHall] = [];
      acc[review.diningHall].push(review);
      return acc;
    }, {});
    res.json(formattedReviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

// Add new review to database
app.post("/api/reviews", async (req, res) => {
  const { diningHall, reviewText, rating } = req.body;
  try {
    await db.query(
      "INSERT INTO reviews (diningHall, reviewText, rating) VALUES (?, ?, ?)",
      [diningHall, reviewText, rating]
    );
    const [updatedReviews] = await db.query("SELECT * FROM reviews");
    const formattedReviews = updatedReviews.reduce((acc, review) => {
      if (!acc[review.diningHall]) acc[review.diningHall] = [];
      acc[review.diningHall].push(review);
      return acc;
    }, {});
    res.json(formattedReviews);
  } catch (error) {
    console.error("Error submitting review:", error);
    res.status(500).json({ error: "Failed to submit review" });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
