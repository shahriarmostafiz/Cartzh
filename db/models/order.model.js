import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    productIds: {
        type: Array,
        required: true
    },

    userId: {
        type: String,
        required: true
    },
    orderSummery: {
        type: Array,
        required: true
    },
    shippingAddress: {
        type: Object,
        required: true
    },
    billingAddress: {
        type: Object,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },


}, {
    timestamps: true
})
export const orderModel = mongoose.models.orders ?? mongoose.model("orders", orderSchema)


// name: `${fname} ${lname}`,
//     userId: userInfo?.id,
//         orderSummery: orderSummery,
//             productIds: productIds,
//                 shippingAddress,
//                 billingAddress: userInfo?.billingAddress ?? shippingAddress,
//                     phone: phone,
//                         email: email