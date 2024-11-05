import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
    },
    introduction: {
        type: String,
    },
    image1: {
        type: String,
    },
    image2: {
        type: String,
    },
    heading1: {
        type: String,
    },
    heading2: {
        type: String,
    },
    para1: {
        type: String,
    },
    para2: {
        type: String,
    }
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;
