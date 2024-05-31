import { auth } from "@/auth";
import CheckoutController from "@/components/checkout/CheckoutController";
import BreadCrumb from "@/components/shared/BreadCrumb";
import { getCartProducts, getUserInfo, getUsersCartInfo } from "@/db/queries";
import { redirect } from "next/navigation";
import { getDictionary } from "../dictionary";

export const metadata = {
    title: 'Checkout - LWSKart',
    description: 'Discover LWSKart, your ultimate online destination for stylish and high-quality furniture. Explore a curated selection of living room,  bedroom, kitchen, and outdoor furniture designed to enhance your home. Enjoy exceptional craftsmanship, competitive prices, and a seamless shopping experience, backed by excellent customer service and fast shipping. Transform your living space with LWSKart – where quality meets style..',
}

const page = async ({ params: { language } }) => {
    const session = await auth()
    const user = session?.user
    if (!user) {
        redirect("/login")

    }
    const userInfo = await getUserInfo(user?.email)
    const cartInfo = await getUsersCartInfo(userInfo?.id)
    // console.log(cartInfo, "Cart");

    const cartProductArray = cartInfo.map(item => item.productId)
    // console.log(cartProductArray, "cartProductArray ");
    const checkoutProducts = await getCartProducts(cartProductArray)
    // console.log(checkoutProducts);
    // const products = cartInfo?.map(product=> )
    const dictionary = await getDictionary(language)
    return (
        <>
            <BreadCrumb page={"Checkout"} />

            <CheckoutController checkoutProducts={checkoutProducts} cartInfo={cartInfo} userInfo={userInfo} lang={language} dictionary={dictionary} />

        </>
    );
};

export default page;
export async function generateStaticParams() {
    let lang = ["en", "bn"]
    return lang.map(l => ({ language: l }))
}
