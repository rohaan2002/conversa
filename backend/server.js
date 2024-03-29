import express from 'express';
const app = express();
import dotenv from 'dotenv';
import authRoutes from "./routes/authRoutes.js"
import connectToMongoDB from './db/connectToMongoDB.js';

dotenv.config(); 
const PORT = process.env.PORT || 5000;

app.get("/", (req,res)=>{
    res.send(`Hii makin waking talkin chat app on port ${PORT}`)
})

app.use("/api/auth", authRoutes);  //middleware

app.listen(PORT, ()=> {
    connectToMongoDB();
    console.log(`Server up and running on port ${PORT}`);
}
)