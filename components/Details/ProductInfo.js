import React from 'react';
import ProductAction from './ProductAction';

const ProductInfo = ({ product }) => {
    return (
        <div>
            <h2 className="text-3xl font-medium uppercase mb-2">{product?.name}</h2>
            <div className="flex items-center mb-4">
                <div className="flex gap-1 text-sm text-yellow-400">
                    <span>
                        <i className="fa-solid fa-star" />
                    </span>
                    <span>
                        <i className="fa-solid fa-star" />
                    </span>
                    <span>
                        <i className="fa-solid fa-star" />
                    </span>
                    <span>
                        <i className="fa-solid fa-star" />
                    </span>
                    <span>
                        <i className="fa-solid fa-star" />
                    </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
            </div>
            <div className="space-y-2">
                <p className="text-gray-800 font-semibold space-x-2">
                    <span>Availability: </span>
                    {
                        product?.stock > 0 ?
                            <span className="text-green-600"> "In Stock" </span> :
                            <span className="text-Red-600"> "Out of Stock" </span>

                    }
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">Brand: </span>
                    <span className="text-gray-600">{product?.brand}</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">Category: </span>
                    <span className="text-gray-600">{product?.category}</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">SKU: </span>
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
            <ProductAction product={product} />
            <div className="flex gap-3 mt-4">
                <a
                    href="#"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                >
                    <i className="fa-brands fa-facebook-f" />
                </a>
                <a
                    href="#"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                >
                    <i className="fa-brands fa-twitter" />
                </a>
                <a
                    href="#"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                >
                    <i className="fa-brands fa-instagram" />
                </a>
            </div>
        </div>

    );
};

export default ProductInfo;