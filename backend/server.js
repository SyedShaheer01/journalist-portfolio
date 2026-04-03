import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import "dotenv/config.js"
import mongoose from "./config/index.js";
import userRouter from "./routes/userRoute.js";


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());



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

// PORT
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});