import React from 'react';
import { getDictionary } from '../dictionary';
import BreadCrumb from '@/components/shared/BreadCrumb';

export const metadata = {
    title: 'About us - LWSKart',
    description: ' Discover LWSKart, your ultimate online destination for stylish and high-quality furniture. Explore a curated selection of living room,  bedroom, kitchen, and outdoor furniture designed to enhance your home. Enjoy exceptional craftsmanship, competitive prices, and a seamless shopping experience, backed by excellent customer service and fast shipping. Transform your living space with LWSKart – where quality meets style..',
}

const page = async ({ params: { language } }) => {
    const dictionary = await getDictionary(language)

    return (
        <>
            <BreadCrumb page={"About us"} />
            <div className="container pt-4 pb-8">
                <h1 className="underline text-2xl text-center font-semibold">{dictionary?.aboutUs}</h1>
                <p className="py-4 whitespace-pre-wrap  max-w-6xl  mx-auto">
                    {dictionary?.aboutUsText}
                </p>


            </div>
        </>
    );
};

export default page;

export async function generateStaticParams() {
    let lang = ["en", "bn"]
    return lang.map(l => ({ language: l }))
}