import Link from 'next/link';
import React from 'react';

const Banner = ({ lang, bannerText1, bannerText2, shopNow }) => {
    return (
        <div
            className="bg-cover bg-no-repeat bg-center py-36 bg-[url('/banner-bg.jpg')]"
        >
            <div className="container">
                <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize whitespace-pre-wrap">
                    {bannerText1}
                </h1>
                <p className="whitespace-pre-wrap ">
                    {bannerText2}
                </p>
                <div className="mt-12">
                    <Link
                        href={`/${lang}/shop`}
                        className="bg-primary border border-primary text-white px-8 py-3 font-medium 
              rounded-md hover:bg-transparent hover:text-primary"
                    >
                        {shopNow}
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Banner;