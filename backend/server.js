import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import connectToMongoDB from './db/connectToMongoDB.js';
import {app,server} from './socket/socket.js';
import path from "path";
import job from './cron.js';
// const app = express();
const PORT = process.env.PORT || 5000;
const __dirname= path.resolve();

dotenv.config(); 

job.start() // har 14 min m ek GET req send krta rhega acc to cron.js (see file)
// we do this cz free tier of render makes it take 1 min time if the server is inactive for 15minutes. so we'll keep sending req eevry 14 min to keep server active and fast

app.use(express.json()) //JSON Parsing: It enables the Express.js application to automatically parse JSON data sent in the body of HTTP requests. When a request is received by the server, if it contains JSON data in its body (checked by content-type: application/json), this middleware parses the JSON data and exposes it in the req.body property of the request object.
app.use(cookieParser()); //Parsing Cookies: When we talk about parsing cookies, it means extracting the individual cookies and their values from the Cookie header of an incoming HTTP request. This allows the server-side application to access and use the cookies sent by the client. simply find cookie in req.cookie object, instead of accessinh header and then finding

app.use("/api/auth", authRoutes);  //middleware for auth functionalities - signup, login, logout
app.use("/api/message", messageRoutes) //middleware for message related functionalities - sendMessage, getMessage
app.use("/api/users", userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")))  
// . When a client makes a request for a static file (e.g., an image or a CSS file), Express will look for that file in the specified directory and serve it back to the client if it exists.


// *******************LEARN ABOUT express.static()************************************
// const express = require('express');
// const app = express();

// Serve static files from the 'public' directory
// app.use(express.static('public'));

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
// In this example, any file within the public directory (e.g., public/css/styles.css, public/images/logo.png, etc.) can be accessed directly from the browser by specifying the appropriate URL path relative to the public directory. For instance, if you have an image called logo.png inside the public/images directory, it would be accessible via "http ://localhost:3000/images/logo.png".

// ***********************************************************************

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
});
// so whenever a GET req is made to ANY PATH (*), the server will send index.html from the folder containing optimized build (/frontend/dist). this approach is used in deploying single page react applications which use client side routing, you just need to send index.html to the server

server.listen(PORT, ()=> {
    connectToMongoDB();
    console.log(`Server up and running on port ${PORT}`);
}
)