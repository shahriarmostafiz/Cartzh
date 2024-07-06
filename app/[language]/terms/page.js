import React from 'react';
import { getDictionary } from '../dictionary';
export const metadata = {
    title: 'Terms and conditions - CartZh',
    description: 'Discover CartZh, your ultimate online destination for stylish and high-quality furniture. Explore a curated selection of living room,  bedroom, kitchen, and outdoor furniture designed to enhance your home. Enjoy exceptional craftsmanship, competitive prices, and a seamless shopping experience, backed by excellent customer service and fast shipping. Transform your living space with CartZh – where quality meets style..'
}

const Page = async ({ params: { language } }) => {
    const dictionary = await getDictionary(language)

    return (
        <div className="flex justify-center  items-center w-full min-h-screen">
            <div className="px-4 space-y-4 md:px-8 lg:px-4 py-4 md:py-8 lg:py-12  w-fit mx-auto ">
                <h1 className="text-3xl font-semibold text-primary">{dictionary?.termsAndConditions}</h1>
                <div className="space-y-4 max-w-4xl ml-4">
                    {
                        dictionary?.terms?.map(terms => <h1 key={terms}>
                            {terms}
                        </h1>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Page;

export async function generateStaticParams() {
    let lang = ["en", "bn"]
    return lang.map(l => ({ language: l }))
}