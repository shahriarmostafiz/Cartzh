import DownloadWrapper from '@/components/order/DownloadWrapper';
import { getOrder } from '@/db/queries';
import React from 'react';
import { getDictionary } from '../../dictionary';

export const metadata = {
    title: 'Order - LWSKart',
    description: 'Register to discover LWSKart, your ultimate online destination for stylish and high-quality furniture. Explore a curated selection of living room,  bedroom, kitchen, and outdoor furniture designed to enhance your home. Enjoy exceptional craftsmanship, competitive prices, and a seamless shopping experience, backed by excellent customer service and fast shipping. Transform your living space with LWSKart – where quality meets style..',
}

const page = async ({ params: { language, orderId } }) => {
    const orderInfo = await getOrder(orderId)
    console.log(orderInfo);
    const dictionary = await getDictionary(language)
    return (
        <div>
            {/* {
                orderInfo?.orderSummery?.map(info => <h1 key={info} >{
                    info
                }</h1>)
            } */}
            <DownloadWrapper data={orderInfo} confirmLang={dictionary?.orderInfo} congrats={dictionary?.congrats} />
        </div>
    );
};

export default page;