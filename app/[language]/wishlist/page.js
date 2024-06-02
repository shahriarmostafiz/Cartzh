import { auth } from '@/auth';
import ProductCard from '@/components/Home/Products/ProductCard';
import { getUserInfo, getWishListProducts } from '@/db/queries';
import React from 'react';
import { getDictionary } from '../dictionary';
import NoProductsFound from '@/components/NoProductsFound';
// import { getDictionary } from '../dictionary';

export const metadata = {
    title: 'Wishlist - LWSKart',
    description: 'Discover LWSKart, your ultimate online destination for stylish and high-quality furniture. Explore a curated selection of living room,  bedroom, kitchen, and outdoor furniture designed to enhance your home. Enjoy exceptional craftsmanship, competitive prices, and a seamless shopping experience, backed by excellent customer service and fast shipping. Transform your living space with LWSKart – where quality meets style..',
}

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
                products?.length ? products?.map(product => <ProductCard key={product?.id} dictionary={dictionary} lang={language} product={product} />) : <NoProductsFound info={dictionary?.noProductsOnWishlist} />
            }
        </div>
    );
};

export default page;

export async function generateStaticParams() {
    let lang = ["en", "bn"]
    return lang.map(l => ({ language: l }))
}