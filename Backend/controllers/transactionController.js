import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import mongoose from "mongoose";

// @desc User Request Flex Transaction
// route GET /api/transaction/flex
// @access Private
const requestFlexTransaction = asyncHandler(async (req, res) => {
  const { fromUserId, toUserId, flexPassCount } = req.body;

  if (!fromUserId || !toUserId || !flexPassCount) {
    res.status(400);
    throw new Error(
      "Please provide all required fields: fromUserId, toUserId, flexpassCount"
    );
  }

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    // Subtract flexpass from sender
    const sender = await User.findByIdAndUpdate(
      fromUserId,
      { $inc: { flexpass: -flexPassCount } },
      { new: true, session }
    );

    if (!sender) {
      throw new Error("Sender not found");
    }

    if (sender.flexpass < 0) {
      throw new Error("Sender has insufficient flexpass");
    }

    // Add flexpass to recipient
    const recipient = await User.findByIdAndUpdate(
      toUserId,
      { $inc: { flexpass: flexPassCount } },
      { new: true, session }
    );

    if (!recipient) {
      throw new Error("Recipient not found");
    }

    // Commit the transaction if both updates succeed
    await session.commitTransaction();
    session.endSession();

    res.status(200).json({
      message: "Transaction successful",
    });
  } catch (error) {
    // Rollback transaction in case of any error
    await session.abortTransaction();
    session.endSession();
    res.status(400);
    throw new Error(error.message);
  }
});

// @desc User Request Points Transaction
// route GET /api/transaction/points
// @access Private
const requestPointsTransaction = asyncHandler(async (req, res) => {
  const { fromUserId, toUserId, pointsCount } = req.body;

  if (!fromUserId || !toUserId || !pointsCount) {
    res.status(400);
    throw new Error(
      "Please provide all required fields: fromUserId, toUserId, flexpassCount"
    );
  }

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    // Subtract flexpass from sender
    const sender = await User.findByIdAndUpdate(
      fromUserId,
      { $inc: { points: -pointsCount } },
      { new: true, session }
    );

    if (!sender) {
      throw new Error("Sender not found");
    }

    if (sender.flexpass < 0) {
      throw new Error("Sender has insufficient flexpass");
    }

    // Add flexpass to recipient
    const recipient = await User.findByIdAndUpdate(
      toUserId,
      { $inc: { points: pointsCount } },
      { new: true, session }
    );

    if (!recipient) {
      throw new Error("Recipient not found");
    }

    // Commit the transaction if both updates succeed
    await session.commitTransaction();
    session.endSession();

    res.status(200).json({
      message: "Transaction successful",
    });
  } catch (error) {
    // Rollback transaction in case of any error
    await session.abortTransaction();
    session.endSession();
    res.status(400);
    throw new Error(error.message);
  }
});

// @desc User Donate Transaction
// route GET /api/transaction/donate
// @access Private
const donateTransaction = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "donate" });
});

export { requestFlexTransaction, requestPointsTransaction, donateTransaction };
