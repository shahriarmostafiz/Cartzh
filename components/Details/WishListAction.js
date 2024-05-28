"use client"

import { handleWish } from "@/action";
import { Button } from "flowbite-react";
import { useState } from "react"

const WishListAction = ({ userId, wishList, productId }) => {
    const isLiked = wishList.includes(productId)
    const [liked, setLiked] = useState(isLiked)
    const toggleFavourite = async () => {
        if (userId) {

            console.log(userId);
            await handleWish({ productId, userId })
            // const userData = await handleUsrData(userId)
            setLiked(!liked)
            // setAuth(userData)
            // console.log(userData);
        } else {
            router.push(`/login?page=${path}`)
        }
    }

    return (
        <button
            onClick={toggleFavourite}
            className={`${liked && "bg-primary  border-primary text-white hover:text-gray-600"} border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition`}
        >
            <i className={`fa-solid fa-heart ${liked && "text-primary"} `} /> {liked ? "Added to WishList" : "Wishlist"}
        </button>
    );
};

export default WishListAction;