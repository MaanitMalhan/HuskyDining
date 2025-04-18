import asyncHandler from "express-async-handler";
import Ledger from "../models/ledgerModel.js";

const getUserLedgerTransactions = asyncHandler(async (req, res) => {

    const userId = req.user._id;

    const transactions = await Ledger.find({ userID: userId });

    res.json(transactions);
});

export {
    getUserLedgerTransactions
};