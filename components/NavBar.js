import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import sofa from "@/public/icons/sofa.svg"
import terrace from "@/public/icons/terrace.svg"
import bed from "@/public/icons/bed.svg"
import office from "@/public/icons/office.svg"
import cafe from "@/public/icons/outdoor-cafe.svg"
import mattress from "@/public/icons/bed-2.svg"
import kitchen from "@/public/icons/kitchenIcon.svg"
import { auth } from '@/auth';
import LoggedUserAction from './LoggedUserAction';

const categoryData = [
    {
        icon: bed,
        category: "Bedroom"
    },
    {
        icon: mattress,
        category: "Mattress"
    },
    {
        icon: cafe,
        category: "Outdoor"
    },
    {
        icon: sofa,
        category: "Sofa"
    },
    {
        icon: terrace,
        category: "Living-Room"
    },
    {
        icon: kitchen,
        category: "Kitchen"
    },
]
const NavBar = async () => {
    const userInfo = await auth()
    return (
        <nav className="bg-gray-800">
            <div className="container flex">
                <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
                    <span className="text-white">
                        <i className="fa-solid fa-bars" />
                    </span>
                    <span className="capitalize ml-2 text-white hidden">All Categories</span>
                    {/* dropdown */}
                    <div
                        className="absolute z-30  left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px]"
                        style={{ width: 300 }}
                    >{
                            categoryData?.map(item => <Link
                                key={item.category}
                                href={`/categories/${item?.category.toLowerCase()}`}
                                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                            >
                                <Image
                                    src={item?.icon}
                                    alt={item?.category}
                                    className="w-5 h-5 object-contain"
                                />
                                <span className="ml-6 text-gray-600 text-sm">{item?.category}</span>
                            </Link>)
                        }


                    </div>
                </div>
                <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
                    <div className="flex items-center space-x-6 capitalize">
                        <Link
                            href="/"
                            className="text-gray-200 hover:text-white transition"
                        >
                            Home
                        </Link>
                        <Link
                            href="/shop"
                            className="text-gray-200 hover:text-white transition"
                        >
                            Shop
                        </Link>
                        <Link href="#" className="text-gray-200 hover:text-white transition">
                            About us
                        </Link>
                        <Link href="#" className="text-gray-200 hover:text-white transition">
                            Contact us
                        </Link>
                    </div>
                    {
                        userInfo?.user ? (<>
                            <LoggedUserAction name={userInfo?.user?.name} />
                        </>) : <Link
                            href="/login"
                            className="text-gray-200 hover:text-white transition"
                        >
                            Login
                        </Link>
                    }
                </div>
            </div>
        </nav>

    );
};

export default NavBar;