"use client"
import { useState } from 'react';

import CheckoutProducts from './CheckoutProducts';
import CheckOutForm from './CheckOutForm';
import { getQuantity } from '@/utils/infoUtils';
import { handleOrder, handlePdf, sendEmailWithAttachment } from '@/action';
import { useRouter } from 'next/navigation';
import { pdf } from '@react-pdf/renderer';
import { MyDocument } from '../order/MyDocument';



const CheckoutController = ({ checkoutProducts, cartInfo, userInfo, lang, dictionary }) => {
    const router = useRouter()
    const [orderError, setOrderErr] = useState(null)

    // const [orderInfo, setOrderInfo] = useState({

    // })
    // userId={userInfo?.id} userEmail={userInfo?.email} billingAddress={userInfo?.billingAddress}
    // const handleOrderInfo = info => {
    //     // event.preventDefault()
    //     setOrderInfo(prev => ({ ...prev, info }))
    // }
    // fname, lname, company, region, address, city, phone, email
    const handleForm = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const agreeToTerms = event.target.aggreement.checked
        if (!agreeToTerms) {
            if (lang.includes("en")) {
                setOrderErr("Please agree to terms and conditions")
            } else {
                setOrderErr("নিয়ম এবং শর্তাবলী সম্মত করুন")
            }

            return
        }
        if (checkoutProducts?.length < 1) {
            if (lang.includes("en")) {
                setOrderErr("No products added to cart")
            } else {
                setOrderErr("কোন পণ্য কার্টে যুক্ত করা হয় নি")

            }
            return
        }
        const fname = formData.get("fname")
        const lname = formData.get("lname")
        const region = formData.get("region")
        const address = formData.get("address")
        const city = formData.get("city")
        const phone = formData.get("phone")
        const email = formData.get("email")
        const shippingAddress = {
            address,
            city,
            region,
        }
        const orderInfo = {
            name: `${fname} ${lname}`,
            email: email,
            userId: userInfo?.id,
            productIds: productIds,
            orderSummery: orderSummery,
            shippingAddress,
            billingAddress: userInfo?.billingAddress ?? shippingAddress,
            phone: phone,
            cost: parseInt(tSum)
        }
        // console.log(orderInfo);
        try {
            const res = await handleOrder(orderInfo)
            console.log(res, "from order ");
            if (res) {
                const pdf = await handlePdf(res)
                if (pdf === "success") {
                    router.push(`/${lang}/order/${res?.id}`)
                }
                else {
                    console.log(pdf);
                }



            }
        } catch (error) {
            console.log(error);
            setOrderErr(error.message)
        }



    }


    let tSum = 0;

    let productIds = checkoutProducts?.map(product => product.id)
    let orderSummery = checkoutProducts?.map((product, idx) => {
        tSum = tSum + (product.discountedPrice * getQuantity(cartInfo, product.id))
        return (`item - ${idx + 1} ${product?.name} - size: ${product?.size}  x ${getQuantity(cartInfo, product?.id)}`)

    })

    return (
        <form
            onSubmit={handleForm}
            className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
            <CheckOutForm userInfo={userInfo} dictionary={dictionary} />
            <div className="col-span-4 border border-gray-200 p-4 rounded">
                <CheckoutProducts products={checkoutProducts} tSum={tSum} cartInfo={cartInfo} dictionary={dictionary} lang={lang} />
                <button
                    type="submit"

                    className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
                >
                    {dictionary?.placeOrder}
                </button>
                <div className="text-red-700 pt-4">
                    {orderError ?? <p >{orderError}</p>}

                </div>
            </div>


        </form>
    );
};

export default CheckoutController;