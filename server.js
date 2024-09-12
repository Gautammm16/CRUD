import express from "express";
import mongoose from "mongoose";
import itemRoutes from "./routes/itemRoutes.js";

const app = express();

const PORT = 3000

mongoose.connect('mongodb://127.0.0.1:27017/cruddb');
  
const db =mongoose.connection;
db.on("error",console.error.bind(console,"connection error"));
db.once("open",()=>{
    console.log("connection established successfully");
})

app.use(express.json());

app.use('/api/items',itemRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})