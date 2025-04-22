import {Blog} from "../models/blog.models.js";
import {User} from "../models/user.models.js";
import mongoose from "mongoose";

export const getAllBlogs = async(req,res,next) => {
    let blog;
    try {
        blog = await Blog.find();
    } catch (err) {
        return console.log(err)
    }
    if (!blog){
        return res.status(400).json({message:"No Blogs Found"})
    }
    return res.status(200).json({blog})
};

export const addBlog = async(req,res,next) => {
    const { title, description, image, user} = req.body;
   
    let existingUser;
    try {
        existingUser = await User.findById(user);
    } catch (err) {
        return console.log(err)
    }
    if(!existingUser){
        return res.status(400).json({message: "Unable to find User by this id"})
    }
    const blog = new Blog({
        title,
        description,
        image,
        user,
    });

        try {
       const session = await mongoose.startSession()
       session.startTransaction();
       await blog.save({session});
       existingUser.blogs.push(blog);
       await existingUser.save({session})
       await session.commitTransaction();
    } catch (err) {
      console.log(err);
      return res.status(500).json({message:err})
    }
    return res.status(200).json({blog});
};

export const updateBlog = async(req,res,next) => {
    const {title, description } = req.body
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndUpdate(blogId, {
            title,
            description
          })
        
    } catch (err) {
        return
    } 
    if (!blog)
    {
        return res.status(500).json({message: "Unable to update blog"})
    }
    return res.status(200).json({ blog });
};

export const getById = async(req, res, next)=> {
    const blogId = req.params.id;
    let blog;
    try {
       blog = await Blog.findById(blogId);
    } catch (err) {
      return console.log(err);
    }
    if (!blog) {
      return res.status(404).json({message: "No Blog Found"})
    }
    return res.status(200).json({blog})
 };

 export const deleteBlog = async(req, res, next) =>{
    const blogId = req.params.id;

    let blog; 
    try {
        blog = await Blog.findByIdAndDelete(blogId).populate("user");
        await blog.user.blogs.pull(blogId);
        await blog.user.save();
        await Blog.findByIdAndDelete(blogId);
    } catch (err) {
        console.log(err);
    }
    if (!blog){
     return res.status(400).json({message: "Unable to delete"})
    }
    return res.status(200).json({message: "Successfully deleted"})
 }

