"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = ({ searchTerm }) => {
    const { replace } = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const [searchState, setSearchState] = useState(searchTerm ?? "")
    const doSearch = () => {
        console.log(searchState);
        const params = new URLSearchParams(searchParams)
        params.set("search", searchState)
        console.log(pathName);

        if (pathName.includes("shop")) {
            replace(`${pathName}?${params.toString()}`)
        } else {
            replace(`${pathName}/shop?${params.toString()}`)
        }
    }
    return (
        <div className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
                <i className="fa-solid fa-magnifying-glass" />
            </span>
            <input
                type="text"
                name="search"
                value={searchState}
                id="search"
                className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
                placeholder="search"
                onChange={(e) => setSearchState(prev => e.target.value)}

            />
            <button
                onClick={doSearch}
                className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex justify-center items-center">
                Search
            </button>
        </div>
    );
};

export default Search;