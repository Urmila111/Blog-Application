import express from "express";
import { getAllBlogs, addBlog, updateBlog, getById, deleteBlog} from "../controllers/blog.controller.js";
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add",addBlog);
blogRouter.put("/update/:id",updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/id",deleteBlog);
export default blogRouter;
