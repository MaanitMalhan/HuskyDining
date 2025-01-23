import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:8000"; // Replace with your backend URL

// Create and export the Socket.IO instance
const socket = io(SOCKET_URL, {
  autoConnect: true, // Prevent automatic connection
});

socket.on("connect", () => {
  console.log("Connected to Socket.IO server:", socket.id);
});

export default socket;
