import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import Logo from "@/public/logo.svg"
import { auth } from '@/auth';
import LoggedInUserStats from './LoggedInUserStats';
import Search from './Search';
import { getDictionary } from '@/app/[language]/dictionary';

const Header = async ({ lang }) => {
    const session = await auth()
    const dictionary = await getDictionary(lang)
    return (
        <header className="py-4 shadow-sm bg-white">
            <div className="container flex items-center justify-between">
                <Link href={`/${lang}`}>
                    <Image src={Logo} alt="Logo" className="w-32" />
                </Link>
                <Search dictionaryValue={dictionary?.search} />
                {
                    session?.user ? <LoggedInUserStats email={session?.user?.email} dictionary={dictionary} lang={lang} /> : <Link href={`/${lang}/register`} className="text-gray-800 hover:text-emerald-600">{dictionary.signupToday}</Link>

                }
            </div>
        </header>

    );
};

export default Header;