import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    productId: {
        type: ObjectId,
        required: true
    },
    userId: {
        type: ObjectId,
        required: true
    },
    billingAddress: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    shippingAddress: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})
export const orderModel = mongoose.models.orders ?? mongoose.model("orders", orderSchema)