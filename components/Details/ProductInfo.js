import React from 'react';
import ProductAction from './ProductAction';
import Link from 'next/link';
import { CapitalizeFirstWord } from '@/utils/infoUtils';
import { auth } from '@/auth';
import { getUserInfo } from '@/db/queries';
import SocialShare from './SocialShare';
import { getDictionary } from '@/app/[language]/dictionary';

const ProductInfo = async ({ product, lang }) => {

    const session = await auth()
    let userInfo = null;
    if (session) {
        userInfo = await getUserInfo(session?.user?.email)
    }
    const ratingArray = Array(product?.rating).fill("val")

    const dictionary = await getDictionary(lang)
    return (
        <div>
            <h2 className="text-3xl font-medium uppercase mb-2">{product?.name}</h2>
            <div className="flex items-center mb-4">
                <div className="flex gap-1 text-sm text-yellow-400">
                    {
                        ratingArray?.map((rating, idx) => <span key={idx}>
                            <i className="fa-solid fa-star" />
                        </span>)
                    }

                </div>
                <div className="text-xs text-gray-500 ml-3">({product?.reviews} {dictionary?.Reviews})</div>
            </div>
            <div className="space-y-2">
                <p className="text-gray-800 font-semibold space-x-2">
                    <span>{dictionary?.availability}: </span>
                    {
                        product?.stock > 0 ?
                            <span className="text-green-600"> {dictionary?.inStock} </span> :
                            <span className="text-Red-600"> {dictionary?.outStock} </span>

                    }
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">{dictionary?.brand}: </span>
                    <span className="text-gray-600">{product?.brand}</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">{dictionary?.category}: </span>
                    <Link href={`/categories/${product?.category}`} className="text-gray-600 hover:text-primary">{CapitalizeFirstWord(product?.category)}</Link>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">{dictionary?.SKU}: </span>
                    <span className="text-gray-600">{product?.sku}</span>
                </p>
            </div>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                <p className="text-xl text-primary font-semibold">${product?.discountedPrice}</p>
                <p className="text-base text-gray-400 line-through">${product?.price}</p>
            </div>
            <p className="mt-4 text-gray-600">
                {product?.description}
            </p>
            <ProductAction product={product} userId={userInfo?.id} wishList={userInfo?.wishList} lang={lang} dictionary={dictionary} />
            <h1 className="my-4 text-gray-600">{dictionary?.shareWith} </h1>
            <SocialShare name={product?.name} />
        </div>

    );
};

export default ProductInfo;