import Description from '@/components/Details/Description';
import Detail from '@/components/Details/Detail';
import RelatedProducts from '@/components/Details/RelatedProducts';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { getAProduct, getAllProductIds } from '@/db/queries';
import React from 'react';
import { getDictionary } from '../../dictionary';

export async function generateMetadata({ params: { language, productId } }) {

    const product = await getAProduct(productId)


    return {
        title: `${product?.name}  `,
        description: product?.description,
        openGraph: {
            images: [product?.gallery[0]]
        }

    }
}

const page = async ({ params: { language, productId } }) => {
    console.log(productId);
    const product = await getAProduct(productId)
    const dictionary = await getDictionary(language)
    return (

        <>
            <BreadCrumb page={"Product"} />
            <Detail product={product} lang={language} />
            <Description lang={language} description={product?.description} size={product?.size} color={product?.color} dictionary={dictionary} />
            <RelatedProducts category={product?.category} id={productId} lang={language} dictionary={dictionary} />

        </>
    );
};

export default page;

export async function generateStaticParams() {
    // Fetch all product IDs
    const { idArray } = await getAllProductIds()

    // Create an array of paths with `language` and `id` parameters
    const paths = [];
    const languages = ['en', 'bn']; // Add all supported languages here

    languages.forEach((language) => {
        idArray.forEach((id) => {
            paths.push({ language: language, productId: id });
        });
    });

    return paths;
}
