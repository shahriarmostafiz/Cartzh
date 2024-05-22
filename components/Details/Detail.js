import React from 'react';

import ProductInfo from './ProductInfo';
import Gallery from './Gallery';

const Detail = ({ product }) => {
    return (
        <div className="container grid grid-cols-2 gap-6">
            <Gallery gallery={product?.gallery} />
            <ProductInfo product={product} />
        </div>
    );
};

export default Detail;