import express from "express";
import mongoose from "mongoose";
import {router} from "./routes/user.routes.js";
import blogRouter from "./routes/blog.routes.js";
const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
.connect(
    "mongodb+srv://genius:genius123@cluster0.cscvf5v.mongodb.net/"
)
.then(()=>app.listen(9000))
.then(()=>
    console.log("Connected to database and listening to localhost 9000")
)
.catch((err)=> console.log(err));

