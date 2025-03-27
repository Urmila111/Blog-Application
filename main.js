import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose
.connect(
    "mongodb+srv://genius:<db_password>@cluster0.cscvf5v.mongodb.net/"
)
.then(()=>app.listen(5000))
.then(()=>
    console.log("Connected to database and listening to localhost 5000")
)
.catch((err)=> console.log(err))

