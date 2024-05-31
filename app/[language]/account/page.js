import { auth } from '@/auth';
import Address from '@/components/account/BillingAddress';
import PersonalInfo from '@/components/account/PersonalInfo';
import ShippingAddress from '@/components/account/ShippingAddress';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { getUserInfo } from '@/db/queries';
import { redirect } from 'next/navigation';
import React from 'react';
import { getDictionary } from '../dictionary';

export const metadata = {
    title: 'Account - LWSKart',
    description: ' Discover LWSKart, your ultimate online destination for stylish and high-quality furniture. Explore a curated selection of living room,  bedroom, kitchen, and outdoor furniture designed to enhance your home. Enjoy exceptional craftsmanship, competitive prices, and a seamless shopping experience, backed by excellent customer service and fast shipping. Transform your living space with LWSKart – where quality meets style..',
}

const AccountPage = async ({ params: { language } }) => {
    const session = await auth()
    const userInfo = await getUserInfo(session?.user?.email)
    if (!session?.user) {
        redirect("/login")
    }
    const dictionary = await getDictionary(language)
    // const { fullName, emailAddress, phone, edit, update, editPersonalInfo, } = dictionary
    return (
        <>
            <BreadCrumb page={"Account"} />
            <div className="container  items-start gap-6 pt-4 pb-16">
                {/* info */}
                <div className=" grid grid-cols-3 gap-4 mx-auto max-w-5xl">
                    <PersonalInfo userInfo={userInfo} lang={language} dictionary={dictionary} />
                    {/* <ShippingAddress /> */}
                    <Address userId={userInfo?.id} address={userInfo?.shippingAddress} editWhat={"Shipping Address"} lang={language} dictionary={dictionary} />
                    <Address userId={userInfo?.id} address={userInfo?.billingAddress} editWhat={"Billing Address"} lang={language} dictionary={dictionary} />
                </div>
                {/* ./info */}
            </div>

        </>
    );
};

export default AccountPage;

export async function generateStaticParams() {
    let lang = ["en", "bn"]
    return lang.map(l => ({ language: l }))
}