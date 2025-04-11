import {Blog} from "../models/blog.models.js";

export const getAllBlogs = async(req,res,next) => {
    let blogs;
    try {
        blogs = await Blog.find();
    } catch (err) {
        return console.log(err)
    }
    if (!blogs){
        return res.ststus(400).json({message:"No Blogs Found"})
    }
    return res.status(200).json({blogs})
}