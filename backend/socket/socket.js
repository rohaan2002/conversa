import { Server } from "socket.io";
import http from "http";
import express from "express";
const app = express();

const server = http.createServer(app); //httpserver bnaya
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId =( receiverId)=>{
  return userSocketMap[receiverId];
}
  
const userSocketMap ={} //{userId :socketId}

io.on("connection", (socket) => {
  console.log(`user ${socket.id} connected`);  //io.on is used to listen for and handle events related to the entire server, such as a new client connection.

  const userId = socket.handshake.query.userId; //handshake from the frontend, see socket.context in frontend
  if(userId !="undefined") userSocketMap[userId]=socket.id; // note that userId is actually the authUser's '_id' 

  io.emit("getOnlineUsers", Object.keys(userSocketMap)); //io.emit used to send an event to all connected clients . so its  gonna send the object keys(userIds of all those users which are authorized (since the query sent from frontend - usedId : authUser._id) of those who are online - using getOnlineUsers event)

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id); //socket.on is used to listen for events specific to that particular client, such as messages sent by the client or disconnection events.
      delete userSocketMap[userId];
      io.emit("getOnlineUsers", Object.keys(userSocketMap))
  });
});

export { app, io, server };
