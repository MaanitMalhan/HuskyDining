import express from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateProfile,
  refreshToken,
  setup2FA,
  verify2FA,
  reset2FA,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/refresh", refreshToken);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateProfile);

router.post("/2fa/setup", protect, setup2FA);
router.post("/2fa/verify", protect, verify2FA);
router.post("/2fa/reset", protect, reset2FA);

export default router;
