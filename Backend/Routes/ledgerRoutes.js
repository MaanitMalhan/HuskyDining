import express from "express";
import {
    getUserLedgerTransactions
} from "../controllers/ledgerController.js"
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:id", protect, getUserLedgerTransactions);

export default router;