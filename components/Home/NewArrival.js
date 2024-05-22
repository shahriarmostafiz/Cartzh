import Image from 'next/image';
import React from 'react';
import ProductCard from './Products/ProductCard';
import { getNewArrivals } from '@/db/queries';

const NewArrival = async () => {
    const newProducts = await getNewArrivals()
    return (
        <div className="container pb-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
                top new arrival
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {newProducts?.map(product => <ProductCard product={product} key={product?.id} />)}

            </div>
        </div>

    );
};

export default NewArrival;