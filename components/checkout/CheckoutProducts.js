import { countQuantity, getQuantity, getSum } from '@/utils/infoUtils';
import Link from 'next/link';
import React from 'react';

const CheckoutProducts = ({ products, cartInfo, tSum, lang, dictionary }) => {

    // console.log(cartInfo, "in checkout ");



    // console.log("order summery", orderSummery)
    console.log("total", tSum);

    return (
        <>
            <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
                {dictionary?.orderSummery}
            </h4>
            <div className="space-y-2">
                {
                    products?.length ? products.map(product => {
                        // sum = sum + (product.discountedPrice * getQuantity(cartInfo, product.id))



                        return (<div key={product.id} className="flex justify-between">
                            <div>
                                <h5 className="text-gray-800 font-medium">{product.name}</h5>
                                <p className="text-sm text-gray-600 uppercase">Size: {product.size}</p>
                            </div>
                            <p className="text-gray-600"> x  {getQuantity(cartInfo, product.id)}</p>
                            <p className="text-gray-800 font-medium">$ {
                                product.discountedPrice * getQuantity(cartInfo, product.id)}   </p>
                        </div>)
                    }) : <div > {dictionary?.noProductsAdded} </div>
                }

            </div>
            <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
                <p>{dictionary?.subTotal}</p>
                <p>${tSum}</p>
            </div>
            <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
                <p>{dictionary?.shipping}</p>
                <p>{dictionary?.free} </p>
            </div>
            <div className="flex justify-between text-gray-800 font-medium py-3 uppercase">
                <p className="font-semibold">{dictionary?.total}</p>
                <p>${tSum}</p>
            </div>
            <div className="flex items-center mb-4 mt-2">
                <input
                    type="checkbox"
                    name="aggreement"
                    id="aggreement"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
                />
                <label
                    htmlFor="aggrement"
                    className="text-gray-600 ml-3 cursor-pointer text-sm"
                >
                    {dictionary?.aggreetoTerms} {" "}
                    <Link href={`/${lang}/terms`} className="text-primary">
                        {dictionary?.termsAndConditions}
                        {/* terms &amp; conditions */}
                    </Link>
                </label>

            </div>




        </>

    );
};

export default CheckoutProducts;