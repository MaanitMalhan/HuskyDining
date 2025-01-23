import express from "express";
import authRoutes from "./authRoutes.js";
import transactionRoutes from "./transactionRoutes.js";
import requestRoutes from "./requestRoutes.js";
import reviewRoutes from "./reviewRoutes.js";
import balanceRoutes from "./balanceRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes); // Prefix /auth for auth routes
router.use("/transaction", transactionRoutes); // Prefix /transaction for transaction routes
router.use("/request", requestRoutes); // Prefix /request for request routes
router.use("/review", reviewRoutes); // Prefix /review for review routes
router.use("/balance", balanceRoutes); // Prefix /balance for balance routes

export default router;
