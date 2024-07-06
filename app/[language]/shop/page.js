import BreadCrumb from '@/components/shared/BreadCrumb';
import ShopProducts from '@/components/shop/Products';
import SideBar from '@/components/shop/SideBar';
import { getAllProducts, getProductsBySearchAndFilter } from '@/db/queries';
import React from 'react';
import { getDictionary } from '../dictionary';

export const metadata = {
    title: 'Shop-CartZh',
    description: 'Discover CartZh, your ultimate online destination for stylish and high-quality furniture. Explore a curated selection of living room,  bedroom, kitchen, and outdoor furnitures designed to enhance your home. Enjoy exceptional craftsmanship, competitive prices, and a seamless shopping experience, backed by excellent customer service and fast shipping. Transform your living space with CartZh  where quality meets style..',
}

const refineCategory = (category) => {
    const decodedCategory = decodeURI(category);
    if (decodedCategory === 'undefined') {
        return "";
    }
    return decodedCategory;
}
// {
//     data: replaceIDinArray(newProducts),
//         ammount: productAmmoutData
// }

const page = async ({ params: { language }, searchParams: { search, category, min, max, size } }) => {
    // console.log(decodeURI(category));
    // const categoryString = decodeURI(category)
    const allInfo = await getProductsBySearchAndFilter(search, refineCategory(category), refineCategory(min), refineCategory(max), refineCategory(size))
    const data = allInfo?.data
    // console.log(object);
    // const data = []
    // const ammount = []
    const ammount = allInfo?.ammount
    // console.log(ammount);
    const dictionary = await getDictionary(language)



    return (
        <>
            <BreadCrumb page={"Shop"} />
            <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
                <SideBar ammount={ammount} lang={language} dictionary={dictionary} />
                <ShopProducts products={data} dictionary={dictionary} lang={language} />


            </div>
        </>
    );
};

export default page;

export async function generateStaticParams() {
    let lang = ["en", "bn"]
    return lang.map(l => ({ language: l }))
}