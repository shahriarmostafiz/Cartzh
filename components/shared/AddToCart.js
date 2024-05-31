"use client"
import { addToCart } from '@/action';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const AddToCart = ({ quantity, userId, orderError, page, productId, lang, dictionary }) => {
    const [added, setAdded] = useState(false)
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
        console.log(res)
        if (res) {
            setAdded(true)
        }

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
            {
                added ? dictionary?.addedtoCart : dictionary?.addtoCart
            }
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