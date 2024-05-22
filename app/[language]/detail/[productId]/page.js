import BreadCrumb from '@/components/Details/BreadCrumb';
import Description from '@/components/Details/Description';
import Detail from '@/components/Details/Detail';
import RelatedProducts from '@/components/Details/RelatedProducts';
import { getAProduct } from '@/db/queries';
import React from 'react';

const page = async ({ params: { language, productId } }) => {
    console.log(productId);
    const product = await getAProduct(productId)
    return (

        <>
            <BreadCrumb />
            <Detail product={product} />
            <Description description={product?.description} />
            <RelatedProducts category={product?.category} />

        </>
    );
};

export default page;