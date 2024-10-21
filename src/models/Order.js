import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    customerName: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
