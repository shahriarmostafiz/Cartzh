import { auth } from "@/auth";
import CheckoutController from "@/components/checkout/CheckoutController";
import BreadCrumb from "@/components/shared/BreadCrumb";
import { getCartProducts, getUserInfo, getUsersCartInfo } from "@/db/queries";
import { redirect } from "next/navigation";

const page = async () => {
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
    return (
        <>
            <BreadCrumb page={"Checkout"} />

            <CheckoutController checkoutProducts={checkoutProducts} cartInfo={cartInfo} userInfo={userInfo} />

        </>
    );
};

export default page;
