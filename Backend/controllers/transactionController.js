import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import RequestFlex from "../models/requestFlexModel.js";
import RequestPoints from "../models/requestPointsModel.js";
import Ledger from "../models/ledgerModel.js";
import mongoose from "mongoose";

// @desc User Request Flex Transaction
// route GET /api/transaction/flex
// @access Private
const requestFlexTransaction = asyncHandler(async (req, res) => {
  const { requestId, fromUserId, toUserId, flexPassCount } = req.body;

  if (!fromUserId || !toUserId || !flexPassCount || !requestId) {
    res.status(400);
    throw new Error(
      "Please provide all required fields: fromUserId, toUserId, flexpassCount"
    );
  }

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const request = await RequestFlex.findByIdAndUpdate(
      requestId,
      {
        status: "fulfilled",
        expiresAt: new Date(Date.now()),
      },
      { new: true, session }
    );

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

    const recipientUser = await User.findById(toUserId);

    // Add ledger entry
    await Ledger.create({
      userID: fromUserId,
      recipientID: toUserId,
      recipient_name: recipientUser.name,
      amount: flexPassCount,
      type: "Flex",
      transaction: "request",
    });

    // Commit the transaction if both updates succeed
    await RequestFlex.deleteOne({ _id: requestId }).session(session);
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
    throw new Error("Error Proccessing Transaction");
  }
});

// @desc User Request Points Transaction
// route GET /api/transaction/points
// @access Private
const requestPointsTransaction = asyncHandler(async (req, res) => {
  const { requestId, fromUserId, toUserId, pointsCount } = req.body;

  if (!requestId || !fromUserId || !toUserId || !pointsCount) {
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

    if (sender.points < 0) {
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

    const recipientUser = await User.findById(toUserId);

    await Ledger.create({
      userID: fromUserId,
      recipientID: toUserId,
      recipient_name: recipientUser.name,
      amount: pointsCount,
      type: "Points",
      transaction: "request",
    });

    // Commit the transaction if both updates succeed
    await RequestPoints.deleteOne({ _id: requestId }).session(session);
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
const directDonateTransaction = asyncHandler(async (req, res) => {
  const { fromEmail, toEmail, type, amount } = req.body;

  if (!fromEmail || !toEmail || !amount || !type) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  const fromUser = await User.findOne({ email: fromEmail });
  const toUser = await User.findOne({ email: toEmail });


  if (!fromUser || !toUser) {
    res.status(404);
    throw new Error("One or both users not found");
  }

  const fromuserID = fromUser._id;
  const toUserID = toUser._id;

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const balanceField =
      type === "flexpass"
        ? "flexpass"
        : type === "points"
        ? "points"
        : "balance";

    // Subtract donation amount from sender
    const sender = await User.findByIdAndUpdate(
      fromuserID,
      { $inc: { [balanceField]: -amount } },
      { new: true, session }
    );


    if (!sender) {
      throw new Error("Sender not found");
    }

    if (sender[balanceField] < 0) {
      throw new Error("Sender has insufficient balance");
    }

    // Add donation amount to recipient
    const recipient = await User.findByIdAndUpdate(
      toUserID,
      { $inc: { [balanceField]: amount } },
      { new: true, session }
    );

    if (!recipient) {
      throw new Error("Recipient not found");
    }

    // const recipientUser = await User.findById(toUser);


    // Commit the transaction if both updates succeed
    await session.commitTransaction();
    session.endSession();

    await Ledger.create({
      userID: fromuserID,
      recipientID: toUserID,
      recipient_name: toUser.name,
      amount,
      type:
        type === "flexpass" ? "Flex" : type === "points" ? "Points" : "Donate",
      transaction: "donate",
    });

    res.status(200).json({
      message: "Donation successful",
    });
  } catch (error) {
    // Rollback transaction in case of any error
    await session.abortTransaction();
    session.endSession();
    res.status(400);
    throw new Error(error.message);
  }
});

export { requestFlexTransaction, requestPointsTransaction, directDonateTransaction };
