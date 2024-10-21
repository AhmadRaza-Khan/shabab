import mongoose from "mongoose";
const baseURL = process.env.NEXT_PUBLIC_MONGODB_URI;

const connectDB = async () => {
    mongoose.connect(baseURL).then(()=> console.log("DB connected successfully")
    ).catch((error)=> console.log(error)
    )
}

export default connectDB