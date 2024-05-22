"use client"
import React, { useState } from 'react';

const ProductAction = ({ product }) => {
    const [orderAmmount, setOrderAmmount] = useState(1)

    const [orderError, setOrderError] = useState("")
    // const changeOrder
    return (
        <>
            <div className="mt-4">
                <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                    <div
                        onClick={() => {
                            setOrderError("")
                            if (orderAmmount === 1) {
                                return
                            }
                            setOrderAmmount(prev => prev - 1)
                        }}

                        className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                        -
                    </div>
                    <div className="h-8 w-8 text-base flex items-center justify-center">
                        {orderAmmount}
                    </div>
                    <div
                        onClick={() => {
                            if (orderAmmount > product.stock) { setOrderError("Not Enough Stock") }
                            setOrderAmmount(prev => prev + 1)
                        }}
                        className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                        +
                    </div>
                    {
                        orderError && <span className='ml-2 text-red-600'>Not enough Stock</span>
                    }
                </div>
            </div>
            <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                <button
                    disabled={orderError}
                    href="#"
                    className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
                >
                    <i className="fa-solid fa-bag-shopping" /> Add to cart
                </button>
                <a
                    href="#"
                    className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
                >
                    <i className="fa-solid fa-heart" /> Wishlist
                </a>
            </div>
        </>
    );
};

export default ProductAction;