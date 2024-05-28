import mongoose, { Schema } from "mongoose";
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountedPrice: {
        type: Number,
        required: true
    },
    gallery: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },

    reviews: {
        type: Number,
        required: true
    }

}, {
    timestamps: true
})

export const productModel = mongoose.models.products ?? mongoose.model("products", productSchema)