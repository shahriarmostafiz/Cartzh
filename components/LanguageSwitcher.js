"use client";

import Image from "next/image";
import down from "@/public/icons/down.svg"

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";


const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    console.log(pathname);
    const searchParams = useSearchParams()
    // console.log(search);
    const params = new URLSearchParams(searchParams)


    // console.log(pathname);

    const languages = [
        {
            'code': 'en',
            'language': 'English'
        },
        {
            'code': 'bn',
            'language': 'Bangla'
        }
    ]
    const found = languages.find(lang => pathname.includes(lang.code));
    const [selectedLanguage, setSelectedLanguage] = useState(found ?? languages[0]);
    const [showManu, setShowManu] = useState(false);




    const handleLanguageChange = lang => {
        let path = pathname;
        let path2 = ""
        if (path.includes("/en")) {
            path2 = path.replace("/en", "")
        }
        if (path.includes("/bn")) {
            path2 = path.replace("/bn", "")
        }
        // if (pathname.includes(selectedLanguage.code)) {
        //     path = pathname.replace(selectedLanguage.code, lang);

        // }

        setSelectedLanguage({ ...selectedLanguage, code: lang, language: lang === 'en' ? 'English' : 'Bangla' });
        setShowManu(false);


        router.push(`/${lang}${path2}?${params.toString()}`)

    }

    return (
        <div className="flex gap-4 items-center text-primary">
            <div className="relative ">
                <button
                    className="flex items-center gap-1 border-2 border-primary px-2 py-0.5 rounded"
                    onClick={() => setShowManu(!showManu)}
                >
                    <Image
                        className="max-w-10"
                        src={down}
                        alt="language"
                        height={10}
                        width={10}
                    />
                    {selectedLanguage.code}
                </button>
                {showManu && (
                    <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
                        {
                            languages.map(entry => (
                                <li
                                    key={entry.code}
                                    onClick={() => handleLanguageChange(entry.code)}
                                    className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
                                >
                                    {/* <Image
                                        className="max-w-8"
                                        src={entry.code === "en" ? "/usa.png" : "/bd.png"}
                                        alt="bangla"
                                        height={100}
                                        width={165}
                                    /> */}
                                    {entry.language}
                                </li>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageSwitcher;