import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config(); 

app.use(express.json()) //JSON Parsing: It enables the Express.js application to automatically parse JSON data sent in the body of HTTP requests. When a request is received by the server, if it contains JSON data in its body (checked by content-type: application/json), this middleware parses the JSON data and exposes it in the req.body property of the request object.
app.use(cookieParser()); //Parsing Cookies: When we talk about parsing cookies, it means extracting the individual cookies and their values from the Cookie header of an incoming HTTP request. This allows the server-side application to access and use the cookies sent by the client. simply find cookie in req.cookie object, instead of accessinh header and then finding

app.use("/api/auth", authRoutes);  //middleware for auth functionalities - signup, login, logout
app.use("/api/message", messageRoutes) //middleware for message related functionalities - sendMessage, getMessage
app.use("/api/users", userRoutes)

// app.get("/", (req,res)=>{
//     res.send(`Hii makin waking talkin chat app on port ${PORT}`)
// })


app.listen(PORT, ()=> {
    connectToMongoDB();
    console.log(`Server up and running on port ${PORT}`);
}
)