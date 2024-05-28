import { getCategoryValue } from '@/utils/infoUtils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useEffect, useState } from 'react';

const FilterbyCategory = ({ products }) => {
    const [query, setQuery] = useState([])
    const { replace } = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)

    const handlecheck = (event) => {
        event.preventDefault()
        const checked = event.target.checked
        const name = event.target.name
        if (checked) {
            setQuery(prev => [...prev, name])
        } else {
            const filtered = query.filter(item => item !== name)
            setQuery(filtered)
        }
    }
    useEffect(() => {
        const category = params.get("category")
        if (category) {
            const decodedCategory = decodeURI(category)
            const queryInCategory = decodedCategory.split("|")
            setQuery(queryInCategory)

        }
    }, [])
    useEffect(() => {

        if (query.length) {
            // console.log(query);
            params.set("category", encodeURI(query.join("|")))
        } else {
            params.delete("category")
        }
        replace(`${pathName}?${params.toString()}`)
    }, [query])


    return (
        <div>
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Categories
            </h3>
            <div className="space-y-2">
                <div className="flex items-center">
                    <input

                        type="checkbox"
                        name="bedroom"
                        id="cat-1"
                        onChange={handlecheck}
                        checked={query.includes("bedroom")}

                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label htmlFor="cat-1" className="text-gray-600 ml-3 cusror-pointer">
                        Bedroom
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">({getCategoryValue(products, "bedroom")})</div>
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="sofa"
                        id="cat-2"
                        onChange={handlecheck}
                        checked={query.includes("sofa")}
                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label htmlFor="cat-2" className="text-gray-600 ml-3 cusror-pointer">
                        Sofa
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">({getCategoryValue(products, "sofa")})</div>
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="outdoor"
                        id="cat-3"
                        onChange={handlecheck}
                        checked={query.includes("outdoor")}
                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label htmlFor="cat-3" className="text-gray-600 ml-3 cusror-pointer">
                        OutDoor
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">({getCategoryValue(products, "outdoor")})</div>
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="kitchen"
                        id="cat-3"
                        onChange={handlecheck}
                        checked={query.includes("kitchen")}
                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label htmlFor="cat-3" className="text-gray-600 ml-3 cusror-pointer">
                        Kitchen
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">({getCategoryValue(products, "kitchen")})</div>
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="mattress"
                        id="cat-4"
                        onChange={handlecheck}
                        checked={query.includes("mattress")}
                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label htmlFor="cat-4" className="text-gray-600 ml-3 cusror-pointer">
                        Mattress
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">({getCategoryValue(products, "mattress")})</div>
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="living-room"
                        id="cat-4"
                        onChange={handlecheck}
                        checked={query.includes("living-room")}
                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label htmlFor="cat-4" className="text-gray-600 ml-3 cusror-pointer">
                        Living Room
                    </label>
                    <div className="ml-auto text-gray-600 text-sm">({getCategoryValue(products, "living-room")})</div>
                </div>
            </div>
        </div>
    );
};

export default FilterbyCategory;