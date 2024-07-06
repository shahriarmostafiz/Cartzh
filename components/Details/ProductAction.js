"use client"
import React, { useState } from 'react';
import AddToCart from '../shared/AddToCart';
import WishListAction from './WishListAction';

const ProductAction = ({ product, userId, wishList, lang, dictionary }) => {
    const [orderAmmount, setOrderAmmount] = useState(1)

    const [orderError, setOrderError] = useState("")
    // const changeOrder
    return (
        <>
            <div className="mt-4">
                <h3 className="text-sm text-gray-800 uppercase mb-1">{dictionary?.quantity}</h3>
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
                {
                    product?.stock > 0 && <AddToCart orderError={orderError}
                        dictionary={dictionary}
                        lang={lang}
                        userId={userId}
                        quantity={orderAmmount} page={"details"} productId={product?.id} />
                }

                <WishListAction dictionary={dictionary} wishList={wishList} productId={product?.id} lang={lang} userId={userId} />
            </div>
        </>
    );
};

export default ProductAction;