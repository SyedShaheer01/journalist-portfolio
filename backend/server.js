import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import "dotenv/config.js"
import mongoose from "./config/index.js";
import userRouter from "./routes/userRoute.js";
import journalismRouter from "./routes/journalismRoute.js";
import path from 'path'
import bodyParser from 'body-parser'
import blogRouter from "./routes/blogRoute.js";
import writingRouter from "./routes/writingRoute.js";



dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const db= mongoose.connection;
db.on("error", console.error.bind(console,"connection error"))
db.once("open", function(){
    console.log("db connected!")
})


// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});


app.use('/user', userRouter)
app.use('/api/journalism', journalismRouter)
app.use('/api/blog', blogRouter)
app.use('/api/copywriting', writingRouter)
app.use('/images', express.static(path.join('/tmp', 'uploads')));


// PORT
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
