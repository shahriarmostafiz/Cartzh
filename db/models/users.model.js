import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    shippingAddress: {
        type: String,
        required: false
    },
    billingAddress: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    wishList: {
        type: Array,
        required: false,
        default: []
    }
}, {
    timestamps: true
})

export const userModel = mongoose.models.users ?? mongoose.model("users", userSchema)