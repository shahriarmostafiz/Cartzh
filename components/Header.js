import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import Logo from "@/public/logo.svg"
import { auth } from '@/auth';
import LoggedInUserStats from './LoggedInUserStats';
import Search from './Search';

const Header = async () => {
    const session = await auth()
    return (
        <header className="py-4 shadow-sm bg-white">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <Image src={Logo} alt="Logo" className="w-32" />
                </Link>
                <Search />
                {
                    session?.user ? <LoggedInUserStats email={session?.user?.email} /> : <Link href="/" className="text-gray-800 hover:text-emerald-600">Signup Today</Link>

                }
            </div>
        </header>

    );
};

export default Header;