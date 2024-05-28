import { auth } from '@/auth';
import { getUserInfo, getUsersCartInfo } from '@/db/queries';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
    const session = await auth()
    const user = session?.user
    if (!user) {
        redirect("/login")
    }
    const userInfo = await getUserInfo(user?.email)
    const cartInfo = await getUsersCartInfo(userInfo?.id)
    return (
        <div>

        </div>
    );
};

export default page;