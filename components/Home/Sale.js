import React from 'react';
import offer from "@/public/offer.jpg"
import Image from 'next/image';
import Link from 'next/link';

const Sale = () => {
    return (
        <div className="container pb-16">
            <Link href="#">
                <Image src={offer} alt="ads" className="w-full" />
            </Link>
        </div>
    );
};

export default Sale;