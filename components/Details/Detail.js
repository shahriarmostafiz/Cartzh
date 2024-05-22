import React from 'react';
import Gallery from './gallery';
import ProductInfo from './ProductInfo';

const Detail = ({ product }) => {
    return (
        <div className="container grid grid-cols-2 gap-6">
            <Gallery gallery={product?.gallery} />
            <ProductInfo product={product} />
        </div>
    );
};

export default Detail;