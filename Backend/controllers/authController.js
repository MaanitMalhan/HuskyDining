import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import qrCode from "qrcode";
import { redis } from "../config/redis.js";
import jwt from "jsonwebtoken";
import speakeasy from "speakeasy";
import { log } from "console";

// @desc Auth user/set token
// route POST /api/auth/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password, token } = req.body;

  const user = await User.findOne({ email });

  console.log(user)

  const temp = await user.matchPasswords(password)

  console.log(user)
  // If user doesn't have 2FA then use this login flow
  if (!user.isMfaActive && user && (await user.matchPasswords(password))) {
    const accessToken = await generateToken(res, user._id);
    
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: accessToken,
    });
  } else {
    // Verify 2FA Code
    const verified = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: "base32",
      token,
    });

    // Use 2FA code to validate it is the user and login, error if not
    if (verified) {
      if (user && (await user.matchPasswords(password))) {
        const accessToken = await generateToken(res, user._id);
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: accessToken,
        });
      } else {
        res.status(401);
        throw new Error("Invalid email or password");
      }
    } else {
      res.status(500);
      throw new Error("Invalid 2FA Verification");
    }
  }
});

// @desc Register a new user
// route POST /api/auth
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if name was entered
  if (!name) {
    res.status(400);
    throw new Error("name is required");
  }

  // Check if password is good
  if (!password || password.length <= 6) {
    res.status(400);
    throw new Error("Password required and should be more than six character");
  }

  // Check if user already exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    const accessToken = await generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: accessToken,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Logout a user
// route POST /api/auth/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (refreshToken) {
      const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);

      await redis.del(`refreshToken:${decoded.userId}`);
    }

    res.cookie("accessToken", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    res.cookie("refreshToken", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    res.status(200).json({ message: "User Logged out" });
  } catch (error) {
    res.status(400);
  }
});

// @desc Get user profile
// route GET /api/auth/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    id: req.user._id,
    name: req.user.name,
  };
  res.status(200).json({ user });
});

// @desc Update user profile
// route PUT /api/auth/profile
// @access Private
const updateProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile" });
});

// @desc Update Access Token
// route PUT /api/auth/refresh
// @access Public
const refreshToken = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    res.status(401);
    throw new Error("Not authorized, no refresh token");
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    const token = await redis.get(`refreshToken:${decoded.userId}`);

    if (token !== refreshToken) {
      res.status(401);
      throw new Error("Not authorized, no refresh token");
    }

    const accessToken = await generateToken(res, decoded.userId);
    res.status(200).json({
      accessToken,
    });
  } catch (error) {
    res.status(401);

    throw new Error("Not authorized, no refresh token");
  }
});

// @desc 2FA Setup
// route PUT /api/auth/2fa/setup
// @access Private
const setup2FA = asyncHandler(async (req, res) => {
  const user = req.user;

  if (!user) {
    res.status(401);
    throw new Error("Not authorized");
  }

  try {
    var secret = speakeasy.generateSecret();
    user.twoFactorSecret = secret.base32;
    user.isMfaActive = true;
    await user.save();

    const url = speakeasy.otpauthURL({
      secret: secret.base32,
      label: `HUSKY DINING`,
      issuer: "HuskyDining",
      encoding: "base32",
    });

    const qrImageUrl = await qrCode.toDataURL(url);
    res.status(200).json({
      qrCode: qrImageUrl,
    });
  } catch (error) {
    res.status(500);
    throw new Error("Error Setting Up 2FA");
  }
});

// @desc 2FA Verify
// route PUT /api/auth/2fa/verify
// @access Private
const verify2FA = asyncHandler(async (req, res) => {
  try {
    const { token } = req.body;
    const user = req.user;

    const verfiy = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: "base32",
      token,
    });

    if (verfiy) {
      pass;
    }
  } catch (error) {}
});

// @desc 2FA Reset
// route PUT /api/auth/2fa/reset
// @access Private
const reset2FA = asyncHandler(async (req, res) => {
  try {
    const user = req.user;
    user.twoFactorSecret = "";
    user.isMfaActive = false;
    await user.save();
    res.status(200).json({ message: "2FA Reset" });
  } catch (error) {
    res.status(500);
    throw new Error("Error Reseting 2FA");
  }
});

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateProfile,
  refreshToken,
  setup2FA,
  verify2FA,
  reset2FA,
};
