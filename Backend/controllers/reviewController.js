import asyncHandler from "express-async-handler";
import Review from "../models/reviewModel.js";

// @desc User Reviews
// route GET /api/review
// @access Public
const getReviews = asyncHandler(async (req, res) => {
  const { page, limit } = req.query;

  // Calculate the number of documents to skip
  const skip = (page - 1) * limit;

  // Fetch paginated data
  const reviews = await Review.find().skip(skip).limit(Number(limit));

  res.json(reviews);
});

export { getReviews };
