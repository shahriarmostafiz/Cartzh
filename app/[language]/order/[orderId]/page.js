import DownloadWrapper from '@/components/order/DownloadWrapper';
import { getOrder } from '@/db/queries';
import React from 'react';

const page = async ({ params: { language, orderId } }) => {
    const orderInfo = await getOrder(orderId)
    console.log(orderInfo);
    return (
        <div>
            {/* {
                orderInfo?.orderSummery?.map(info => <h1 key={info} >{
                    info
                }</h1>)
            } */}
            <DownloadWrapper data={orderInfo} />
        </div>
    );
};

export default page;