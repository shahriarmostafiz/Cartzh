import BreadCrumb from '@/components/shared/BreadCrumb';
import ShopProducts from '@/components/shop/Products';
import SideBar from '@/components/shop/SideBar';
import { getAllProducts, getProductsBySearchAndFilter } from '@/db/queries';
import React from 'react';

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




    return (
        <>
            <BreadCrumb page={"Shop"} />
            <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
                <SideBar ammount={ammount} />
                <ShopProducts products={data} />


            </div>
        </>
    );
};

export default page;