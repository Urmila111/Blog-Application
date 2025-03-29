import express from "express";
import mongoose from "mongoose";
import {router} from "./routes/user.routes.js";
const app = express();

app.use("/api/user", router)
mongoose
.connect(
    "mongodb+srv://genius:genius123@cluster0.cscvf5v.mongodb.net/"
)
.then(()=>app.listen(9000))
.then(()=>
    console.log("Connected to database and listening to localhost 9000")
)
.catch((err)=> console.log(err));

