import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose
.connect(
    "mongodb+srv://genius:genius123@cluster0.cscvf5v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
.then(()=>app.listen(5000))
.then(()=>
    console.log("Connected to database and listening to localhost 5000")
)
.catch((err)=> console.log(err))

