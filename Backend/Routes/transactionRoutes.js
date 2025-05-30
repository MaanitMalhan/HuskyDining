import express from "express";
import {
  requestFlexTransaction,
  requestPointsTransaction,
  directDonateTransaction
} from "../controllers/transactionController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/flex").post(protect, requestFlexTransaction);
router.route("/points").post(protect, requestPointsTransaction);
router.route("/directDonate").post(protect, directDonateTransaction);

export default router;
