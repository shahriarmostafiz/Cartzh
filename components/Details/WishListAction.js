"use client"

import { handleWish } from "@/action";
import { useRouter } from "next/navigation";
import { useState } from "react"

const WishListAction = ({ userId, wishList, productId, lang, dictionary, iconButton }) => {
    let isLiked = false
    const router = useRouter()
    if (userId) {
        isLiked = wishList?.includes(productId)
    }
    const [liked, setLiked] = useState(isLiked)
    const toggleFavourite = async () => {
        if (userId) {

            console.log(userId);
            const res = await handleWish({ productId, userId })
            // const userData = await handleUsrData(userId)
            if (res === "updated") {
                setLiked(!liked)
            }
            // setAuth(userData)
            // console.log(userData);
        } else {
            router.push(`/${lang}/login`)
        }
    }

    return (
        <button
            onClick={toggleFavourite}
            className={`${liked && "  border-primary text-primary  text-center flex items-center justify-center hover:bg-gray-800 transition"}  ${iconButton ? "" : "border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition text-center"}`}
        >
            {
                iconButton ? <span

                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title={liked ? "remove from wishlist" : "add to wishlist"}
                >
                    {liked ? <i className="fa-solid fa-heart" /> : <i className="fa-regular fa-heart"></i>}
                </span> : (
                    <span className="w-full flex justify-center items-center gap-2">
                        <i className={`fa-solid fa-heart ${liked && "text-primary"} `} />
                        {liked ? dictionary?.addedtoWishlist : dictionary?.AddtoWishlist}
                    </span>)
            }
        </button>
    );
};

export default WishListAction;