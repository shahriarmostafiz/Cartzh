import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
    productId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "pending"
    },



}, {
    timestamps: true
})



export const cartModel = mongoose.models.carts ?? mongoose.model("carts", cartSchema)