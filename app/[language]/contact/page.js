import React from 'react';
import { getDictionary } from '../dictionary';
import BreadCrumb from '@/components/shared/BreadCrumb';

export const metadata = {
    title: 'Contact  us - LWSKart',
    description: ' Discover LWSKart, your ultimate online destination for stylish and high-quality furniture. Explore a curated selection of living room,  bedroom, kitchen, and outdoor furniture designed to enhance your home. Enjoy exceptional craftsmanship, competitive prices, and a seamless shopping experience, backed by excellent customer service and fast shipping. Transform your living space with LWSKart – where quality meets style..',
}

const page = async ({ params: { language } }) => {
    const dictionary = await getDictionary(language)

    return (
        <>
            <BreadCrumb page={"Contact us"} />
            <div className="container pt-4 pb-8">
                <h1 className="underline text-2xl text-center font-semibold">{dictionary?.contactUs}</h1>
                <div className="flex w-full min-h-[70vh] justify-center items-center">
                    <div className="w-3/5 min-h-[50vh] mx-auto p-4 md:p-8 lg:p-12 border-2 border-primary rounded flex flex-col justify-center items-center  text-lg font-semibold"
                    >
                        <div>
                            <p className="pt-4 whitespace-pre-wrap">
                                {dictionary?.streetAddress}: {dictionary?.contactInfo?.address}
                            </p>
                            <p className="py-4 ">
                                {dictionary?.emailAddress}: {dictionary?.contactInfo?.email}
                            </p>
                            <p className="pb-4">
                                {dictionary?.phone}: {dictionary?.contactInfo?.phone}
                            </p>
                        </div>
                    </div>
                </div>



            </div>
        </>
    );
};

export default page;

export async function generateStaticParams() {
    let lang = ["en", "bn"]
    return lang.map(l => ({ language: l }))
}

