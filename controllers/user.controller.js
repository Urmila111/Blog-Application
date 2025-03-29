import {User} from "../models/user.models.js";

export const getAllUser = async(req,res,next)=> {
    let users;
    try {
        users = await User.find()
    } catch (err) {
        console.log(err);
    }
    if (!users){
        return res.status(400).json({message: "No users found."})
    }
    return res.status(200).json({ users});
};