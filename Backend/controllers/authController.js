import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import { redis } from "../config/redis.js";
import jwt from "jsonwebtoken";

// @desc Auth user/set token
// route POST /api/auth/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

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

    // res.cookie("accessToken", "", {
    //   httpOnly: true,
    //   expires: new Date(0),
    // });

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

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateProfile,
  refreshToken,
};
