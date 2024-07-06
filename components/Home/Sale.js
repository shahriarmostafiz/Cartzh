import React from 'react';
import offer from "@/public/offer.jpg"
import Image from 'next/image';
import Link from 'next/link';

const Sale = ({ lang }) => {
    return (
        <div className="container pb-16">
            <Link prefetch={false} href={`/${lang}/shop`}>
                <Image src={offer} alt="ads" className="w-full" />
            </Link>
        </div>
    );
};

export default Sale;