import React from 'react';
import ProductCard from '../Home/Products/ProductCard';
import { getProductsByCategory } from '@/db/queries';

const RelatedProducts = async ({ category, id }) => {
    const categoryProduct = await getProductsByCategory(category)
    const products = categoryProduct.filter(product => product.id !== id)
    return (
        <div className="container pb-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
                Related products
            </h2>
            <div className="grid grid-cols-4 gap-6">
                {
                    products?.map(product => <ProductCard product={product} key={product?.id} />)
                }
            </div>
        </div>

    );
};

export default RelatedProducts;