import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/authRoutes.js"
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config(); 

app.use(express.json()) //to parse requests with JSON payloads (from req.body)

app.use("/api/auth", authRoutes);  //middleware

// app.get("/", (req,res)=>{
//     res.send(`Hii makin waking talkin chat app on port ${PORT}`)
// })


app.listen(PORT, ()=> {
    connectToMongoDB();
    console.log(`Server up and running on port ${PORT}`);
}
)