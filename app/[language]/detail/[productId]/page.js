import Description from '@/components/Details/Description';
import Detail from '@/components/Details/Detail';
import RelatedProducts from '@/components/Details/RelatedProducts';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { getAProduct } from '@/db/queries';
import React from 'react';

const page = async ({ params: { language, productId } }) => {
    console.log(productId);
    const product = await getAProduct(productId)
    return (

        <>
            <BreadCrumb page={"Product"} />
            <Detail product={product} />
            <Description description={product?.description} size={product?.size} color={product?.color} />
            <RelatedProducts category={product?.category} id={productId} />

        </>
    );
};

export default page;