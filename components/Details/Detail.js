import React from 'react';

import ProductInfo from './ProductInfo';
import Gallery from './Gallery';


const Detail = async ({ product }) => {

    return (
        <div className="container grid grid-cols-2 gap-6">
            <Gallery gallery={product?.gallery} />
            <ProductInfo product={product} />
        </div>
    );
};

export default Detail;