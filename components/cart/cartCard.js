import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DeleteButton from './deleteButton';

const CartCard = ({ info, lang, quantity, userId }) => {
    return (
        <div className="flex justify-between max-w-3xl mx-auto my-4">

            <div className="flex gap-6">
                <Image src={info?.gallery[0]} height={90} width={90} alt={info?.name} className="rounded" />

                <div>
                    <Link href={`/${lang}/detail/${info?.id}`}>{info?.name} x {quantity}</Link>
                    <div className="flex gap-6">
                        <span className="uppercase"> Size: {info?.size}</span>

                    </div>
                    <div>
                        Price: {info?.price}
                    </div>

                </div>

            </div>
            <div className="flex  flex-col items-end gap-4">
                <h1>
                    ${info?.price * quantity}

                </h1>
                <DeleteButton productId={info?.id} userId={userId} />

            </div>


        </div>
    );
};

export default CartCard;