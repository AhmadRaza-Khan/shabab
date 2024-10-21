import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    introduction: {
        type: String,
        required: true
    },
    image1: {
        type: String,
        required: true
    },
    image2: {
        type: String,
        required: true
    },
    heading1: {
        type: String,
        required: true
    },
    heading2: {
        type: String,
        required: true
    },
    para1: {
        type: String,
        required: true
    },
    para2: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;
