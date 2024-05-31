import { auth } from '@/auth';
import ProductCard from '@/components/Home/Products/ProductCard';
import { getUserInfo, getWishListProducts } from '@/db/queries';
import React from 'react';
import { getDictionary } from '../dictionary';
// import { getDictionary } from '../dictionary';

const page = async ({ params: { language } }) => {
    const session = await auth()
    const user = session?.user
    if (!user) {
        redirect("/login")
    }
    const userInfo = await getUserInfo(user?.email)
    const cartList = userInfo?.wishList
    let products = []
    if (cartList?.length) {
        products = await getWishListProducts(cartList)
    }
    const dictionary = await getDictionary(language)
    return (
        <div className=" container grid grid-cols-4 py-6">
            {
                products?.length ? products?.map(product => <ProductCard dictionary={dictionary} lang={language} product={product} />) : <h1>No products found</h1>
            }
        </div>
    );
};

export default page;