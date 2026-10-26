import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

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

const PORT= 8000;
app.listen(process.env.PORT || PORT,()=> {
  console.log(`Server is running at ${process.env.PORT || PORT}`);
})