import { allowedOrigins } from "../config/allowedOrigins.js";

export const credentials = (req, res, next) => {
  console.log("Origin:", req.headers.origin);
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Credentials", true);
  }
  next();
};
