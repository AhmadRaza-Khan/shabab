import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    engTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    dosage: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
