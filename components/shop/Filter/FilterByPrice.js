import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useEffect, useState } from 'react';

const FilterByPrice = ({ lang, priceLang }) => {

    const [query, setQuery] = useState({
        min: "",
        max: ""
    })
    const { replace } = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)

    const handlePrice = (event) => {
        event.preventDefault()
        const name = event.target.name
        const value = event.target.value
        const state = { ...query, [name]: value }

        setQuery(state)


        // const checked = event.target.checked
        // const name = event.target.name
        // if (checked) {
        //     setQuery(prev => [...prev, name])
        // } else {
        //     const filtered = query.filter(item => item !== name)
        //     setQuery(filtered)
        // }
    }
    useEffect(() => {
        const minParams = params.get("min")
        const maxParams = params.get("max")
        if (maxParams && minParams) {
            const min = minParams
            const max = maxParams
            const queryInvalue = { min, max }
            setQuery(queryInvalue)

        }
    }, [])
    useEffect(() => {

        if (query.min && query.max) {
            // console.log(query);
            params.set("min", query.min)
            params.set("max", query.max)
        } else {
            params.delete("min")
            params.delete("max")
        }
        replace(`${pathName}?${params.toString()}`)
    }, [query])



    return (
        <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                {priceLang}
            </h3>
            <div className="mt-4 flex items-center">
                <input
                    type="text"
                    name="min"
                    id="min"
                    className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                    placeholder="min"
                    onChange={handlePrice}
                    value={query.min}

                />
                <span className="mx-3 text-gray-500">-</span>
                <input
                    type="text"
                    name="max"
                    id="max"
                    value={query.max}
                    className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                    placeholder="max"
                    onChange={handlePrice}

                />
            </div>
        </div>
    );
};

export default FilterByPrice;