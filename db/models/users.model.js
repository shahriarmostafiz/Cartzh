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
        type: Object,
        required: false
    },
    billingAddress: {
        type: Object,
        required: false
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