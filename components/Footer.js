import React from 'react';
import logo from "@/public/logo.svg"
import method from "@/public/methods.png"
import Image from 'next/image';
import { getDictionary } from '@/app/[language]/dictionary';


const Footer = async ({ lang }) => {
    const dictionary = await getDictionary(lang)
    return (
        <>
            <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
                <div className="container grid grid-cols-1 ">
                    <div className="col-span-1 space-y-4">
                        <Image src={logo} alt="logo" className="w-30" />
                        <div className="mr-2">
                            <p className="text-gray-500">

                                {dictionary?.footerTextLine}
                            </p>
                        </div>
                        <div className="flex space-x-5">
                            <a href="https://www.facebook.com/"
                                target="_blank"
                                className="text-gray-400 hover:text-gray-500">
                                <i className="fa-brands fa-facebook-square" />
                            </a>
                            <a href="https://www.instagram.com/"

                                target="_blank" className="text-gray-400 hover:text-gray-500">
                                <i className="fa-brands fa-instagram-square" />
                            </a>
                            <a href="https://www.x.com/"
                                target="_blank"
                                className="text-gray-400 hover:text-gray-500">
                                <i className="fa-brands fa-twitter-square" />
                            </a>
                            <a href="https://www.github.com/"
                                target="_blank"
                                className="text-gray-400 hover:text-gray-500">
                                <i className="fa-brands fa-github-square" />
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                        <div className="grid grid-cols-2 gap-4 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">

                                    {dictionary?.Solutions}
                                </h3>
                                <div className="mt-4 space-y-4">
                                    <a
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary?.Marketing}
                                    </a>
                                    <a
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary?.Analitycs}
                                    </a>
                                    <a
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary?.Commerce}
                                    </a>
                                    <a
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary?.Insights}
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                                    {dictionary?.Support}
                                </h3>
                                <div className="mt-4 space-y-4">
                                    <a
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary?.Pricing}
                                    </a>
                                    {/* <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Documentation</a> */}
                                    <a
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary?.Guides}
                                    </a>
                                    <a
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary?.APIStatus}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                                    {dictionary?.Solutions}
                                </h3>
                                <div className="mt-4 space-y-4">
                                    <a
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary?.Marketing}
                                    </a>
                                    <a
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary?.Analitycs}
                                    </a>
                                    <a
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary?.Commerce}
                                    </a>
                                    <a
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary?.Insights}
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                                    {dictionary?.Support}
                                </h3>
                                <div className="mt-4 space-y-4">
                                    <a
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary?.Pricing}
                                    </a>
                                    {/* <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Documentation</a> */}
                                    <a
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary?.Guides}
                                    </a>
                                    <a
                                        href="#"
                                        className="text-base text-gray-500 hover:text-gray-900 block"
                                    >
                                        {dictionary?.APIStatus}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* ./footer */}
            {/* copyright */}
            <div className="bg-gray-800 py-4">
                <div className="container flex items-center justify-between">
                    <p className="text-white">© LWSKart  - All Right Reserved</p>
                    <div>
                        <Image src={method} alt="methods" className="h-5" height={20} width={237} />
                    </div>
                </div>
            </div>
        </>

    );
};

export default Footer;