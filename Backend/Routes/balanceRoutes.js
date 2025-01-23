import express from "express";
import { getBalance } from "../controllers/balanceController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:id", protect, getBalance);

export default router;
