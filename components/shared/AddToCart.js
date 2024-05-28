"use client"
import { addToCart } from '@/action';
import { useRouter } from 'next/navigation';
import React from 'react';

const AddToCart = ({ quantity, userId, orderError, page, productId }) => {

    const router = useRouter()
    const handleCart = async () => {
        if (!userId) {
            router.push("/login")
            return
        }
        const cartInfo = {
            productId,
            userId,
            quantity
        }
        console.log(cartInfo);
        const res = await addToCart(cartInfo)
        console.log(res);

    }
    return (
        <button
            onClick={handleCart}
            disabled={orderError}

            className={`${page ? "px-8 py-2 font-medium rounded uppercase flex items-center gap-2" : "block w-full py-1 "}  text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition`}
        >
            {
                page && <i className="fa-solid fa-bag-shopping" />
            }
            Add to cart
        </button >
    );
};

export default AddToCart;

// //productId: {
// type: String,
//     required: true
//     },
// userId: {
//     type: String,
//         required: true
// },
// quantity: {
//     type: Number,
//         required: true
// },
// status: {
//     type: String,
//         required: true,
//         default: "pending"
// },