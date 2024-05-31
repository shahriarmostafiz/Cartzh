import React from 'react';

import money from "@/public/icons/money-back.svg"
import delivery from "@/public/icons/delivery-van.svg"
import service from "@/public/icons/service-hours.svg"
import Image from 'next/image';

const Features = ({ lang, dictionary }) => {
    return (
        <div className="container py-16">
            <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
                <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                    <Image
                        src={delivery}
                        alt="Delivery"
                        className="w-12 h-12 object-contain"
                    />
                    <div>
                        <h4 className="font-medium capitalize text-lg">{dictionary?.freeShipping}</h4>
                        <p className="text-gray-500 text-sm">{dictionary?.over200}</p>
                    </div>
                </div>
                <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                    <Image
                        src={money}
                        alt="Delivery"
                        className="w-12 h-12 object-contain"
                    />
                    <div>
                        <h4 className="font-medium capitalize text-lg">{dictionary?.moneyReturn}</h4>
                        <p className="text-gray-500 text-sm">{dictionary?.daysMoneyReturn}</p>
                    </div>
                </div>
                <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                    <Image
                        src={service}
                        alt="Delivery"
                        className="w-12 h-12 object-contain"
                    />
                    <div>
                        <h4 className="font-medium capitalize text-lg">{dictionary?.supportTime}</h4>
                        <p className="text-gray-500 text-sm">{dictionary?.supportType}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Features;