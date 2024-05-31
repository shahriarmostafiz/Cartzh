import { auth } from '@/auth';
import CartCard from '@/components/cart/cartCard';
import { getCartProducts, getUserInfo, getUsersCartInfo } from '@/db/queries';
import { getQuantity } from '@/utils/infoUtils';
import { redirect } from 'next/navigation';
import React from 'react';
import { getDictionary } from '../dictionary';
import Link from 'next/link';
import NoProductsFound from '@/components/NoProductsFound';

const page = async ({ params: { language } }) => {
    const session = await auth()
    const user = session?.user
    if (!user) {
        redirect("/login")
    }
    const userInfo = await getUserInfo(user?.email)
    const cartInfo = await getUsersCartInfo(userInfo?.id)
    console.log("userId", userInfo?.id);
    // console.log(cartInfo);
    const cartProductArray = cartInfo.map(item => item.productId)
    // console.log(cartProductArray, "cartProductArray ");
    const checkoutProducts = await getCartProducts(cartProductArray)
    console.log(checkoutProducts);

    let tSum = 0;

    let productIds = checkoutProducts?.map(product => product.id)
    let orderSummery = checkoutProducts?.map((product, idx) => {
        tSum = tSum + (product.discountedPrice * getQuantity(cartInfo, product.id))
        return (`item - ${idx + 1} ${product?.name} - size: ${product?.size}  x ${getQuantity(cartInfo, product?.id)}`)

    })
    const removeFromCart = async (id) => {
        console.log(id);
    }
    const dictionary = await getDictionary(language)
    return (
        <div className="container">
            {
                checkoutProducts?.length ? (
                    <>
                        <h1 className="text-center text-lg font-medium py-4 text-primary">{dictionary?.cartRemoveMessage}</h1>
                        {
                            checkoutProducts?.map(product => <CartCard key={product?.id} lang={language} quantity={getQuantity(cartInfo, product?.id)} info={product} userId={userInfo?.id} />)
                        }
                        <div className="flex justify-center items-center py-4">
                            <Link
                                href={`/${language}/checkout`}
                                className="w-80  py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"

                            >

                                Checkout  </Link>

                        </div>
                    </>

                ) : <NoProductsFound info={dictionary?.noProductsAdded} />
            }
        </div>
    );
};

export default page;
export async function generateStaticParams() {
    let lang = ["en", "bn"]
    return lang.map(l => ({ language: l }))
}