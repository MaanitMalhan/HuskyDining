import express from "express";
import {
  getRequest,
  getUserRequest,
  createRequest,
  getRequestPoints,
} from "../controllers/requestControllers.js";
import { protect } from "../middleware/authMiddleware.js";
import {
  requestFlexTransaction,
  requestPointsTransaction,
  donateTransaction,
} from "../controllers/transactionController.js";

const router = express.Router();

router.get("/flex", getRequest).post("/", createRequest);
router.get("/points", getRequestPoints);
router.get("/:id", protect, getUserRequest);
router.post("/filled", requestFlexTransaction);
router.post("/filled-points", requestPointsTransaction);

export default router;
