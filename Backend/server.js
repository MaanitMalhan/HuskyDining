import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import apiRoutes from "./Routes/apiRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import color from "colors";
import http from "http";
import { Server } from "socket.io";
import { credentials } from "./middleware/credentials.js";

dotenv.config();
const port = process.env.PORT || 8000;

// Database Connection
connectDB();
const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
};

// Express Server
const app = express();
const server = http.createServer(app); // Create HTTP server
const io = new Server(server, {});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000 * 60,
    },
  })
);
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Routes
app.use("/api", apiRoutes);
app.get("/", (req, res) => res.send("Server is ready"));

// Socket.io
io.on("connection", (socket) => {
  socket.on("disconnect", () => {});
});

// Error Handling
app.use(notFound);
app.use(errorHandler);

server.listen(port, () =>
  console.log(`Server started on port ${port}`.green.bold)
);
