import { auth } from '@/auth';
import Address from '@/components/account/BillingAddress';
import PersonalInfo from '@/components/account/PersonalInfo';
import ShippingAddress from '@/components/account/ShippingAddress';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { getUserInfo } from '@/db/queries';
import { redirect } from 'next/navigation';
import React from 'react';

const AccountPage = async () => {
    const session = await auth()
    const userInfo = await getUserInfo(session?.user?.email)
    if (!session?.user) {
        redirect("/login")
    }

    return (
        <>
            <BreadCrumb page={"Account"} />
            <div className="container  items-start gap-6 pt-4 pb-16">
                {/* info */}
                <div className=" grid grid-cols-3 gap-4 mx-auto max-w-5xl">
                    <PersonalInfo userInfo={userInfo} />
                    {/* <ShippingAddress /> */}
                    <Address userId={userInfo?.id} address={userInfo?.shippingAddress} editWhat={"Shipping Address"} />
                    <Address userId={userInfo?.id} address={userInfo?.billingAddress} editWhat={"Billing Address"} />
                </div>
                {/* ./info */}
            </div>

        </>
    );
};

export default AccountPage;