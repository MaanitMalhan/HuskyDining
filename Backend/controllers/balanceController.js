import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc Get User Balance (flexpass, points)
// route GET /api/balance/:id
// @access Private
const getBalance = asyncHandler(async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });

  if (!user) {
    res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({
    flexpass: user.flexpass,
    points: user.points,
  });
});

export { getBalance };
