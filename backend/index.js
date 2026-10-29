import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js"
import cookieParser from "cookie-parser";

mongoose.connect(process.env.MONGO_URI).then(()=> {
  console.log("DATABASE IS CONNECTED !!");
}).catch((err)=>{
  console.log(err);
})



const app = express();

//Middlewares to handle cors
app.use(
  cors({
    origin : process.env.FRONT_END_URL || "http://localhost:5173",
    methods : ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders : ["Content-Type", "Authorization"],
  })
)

//Middleware to handle json 
app.use(express.json());

//Middleware to handle cookies
app.use(cookieParser());

//API Routes
app.use("/api/auth",authRoutes);

const PORT= 8000;
app.listen(process.env.PORT || PORT,()=> {
  console.log(`Server is running at ${process.env.PORT || PORT}`);
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500

  const message = err.message || "Internal Server Error"

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})