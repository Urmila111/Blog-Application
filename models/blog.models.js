import mongoose, {Schema} from "mongoose";

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        user: {
             type: mongoose.Types.ObjectId,
             ref:"User",
            required: true,
        },
    },
    {timestamps: true}
);
export const Blog = mongoose.model("Blog", blogSchema);