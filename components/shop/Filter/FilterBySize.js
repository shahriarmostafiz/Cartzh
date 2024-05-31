import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const FilterBySize = ({ lang, sizes, sizeLang }) => {
    // const [query, setQuery] = useState([])
    const { replace } = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const [query, setQuery] = useState('');

    const handleCheck = (e) => {
        const value = e.target.id;
        setQuery(value);
    };

    // const handleCheck = (event) => {
    //     event.preventDefault()
    //     const value = event.target.id;

    //     setQuery(prevQuery => {
    //         // If the value is already in the query array, remove it
    //         if (prevQuery.includes(value)) {
    //             return prevQuery.filter(item => item !== value);
    //         } else {
    //             // Otherwise, add it to the query array
    //             return [...prevQuery, value];
    //         }
    //     });

    //     // const checked = event.target.checked
    //     // const name = event.target.name
    //     // if (checked) {
    //     //     setQuery(prev => [...prev, name])
    //     // } else {
    //     //     const filtered = query.filter(item => item !== name)
    //     //     setQuery(filtered)
    //     // }
    // }
    // useEffect(() => {
    //     const category = params.get("category")
    //     if (category) {
    //         const decodedCategory = decodeURI(category)
    //         const queryInCategory = decodedCategory.split("|")
    //         setQuery(queryInCategory)

    //     }
    // }, [])
    useEffect(() => {
        const sizeParams = params.get("size")
        // const maxParams = params.get("max")
        if (sizeParams) {

            setQuery(sizeParams)

        }
    }, [])

    useEffect(() => {

        if (query) {
            // console.log(query);
            params.set("size", query)
            // params.set("max", query.max)
        } else {
            params.delete("size")
            // params.delete("max")
        }
        replace(`${pathName}?${params.toString()}`)
    }, [query])

    // useEffect(() => {
    //     console.log(query);

    //     // if (query.length) {
    //     //     // console.log(query);
    //     //     params.set("category", encodeURI(query.join("|")))
    //     // } else {
    //     //     params.delete("category")
    //     // }
    //     // replace(`${pathName}?${params.toString()}`)
    // }, [query])
    return (
        <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">{sizeLang}</h3>
            <div className="flex items-center gap-2">
                {['xs', 's', 'm', 'l', 'xl'].map((size) => (
                    <div className="size-selector" key={size}>
                        <input
                            onChange={handleCheck}
                            type="radio"
                            name="size"
                            id={size}
                            className="hidden"
                            checked={query === size}
                        />
                        <label
                            htmlFor={size}
                            className={`text-xs border uppercase border-gray-200 rounded-sm h-6 w-6  flex items-center justify-center cursor-pointer shadow-sm text-gray-600 ${query === size ? 'border-blue-500' : ''}`}
                        >
                            {size}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );

    // return (
    //     <div className="pt-4">
    //         <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">size</h3>
    //         <div className="flex items-center gap-2">
    //             <div className="size-selector">
    //                 <input
    //                     onChange={handlecheck}
    //                     checked={query.includes("xs")}

    //                     type="radio" name="xs" id="xs" className="hidden" />
    //                 <label

    //                     htmlFor="xs"
    //                     className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
    //                 >
    //                     XS
    //                 </label>
    //             </div>
    //             <div className="size-selector">
    //                 <input
    //                     onChange={handlecheck}

    //                     type="radio" name="sm" id="sm" />
    //                 <label
    //                     htmlFor="sm"
    //                     className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
    //                 >
    //                     S
    //                 </label>
    //             </div>
    //             <div className="size-selector">
    //                 <input
    //                     onChange={handlecheck}
    //                     type="radio" name="m" id="m" className="hidden" />
    //                 <label
    //                     htmlFor="m"
    //                     className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
    //                 >
    //                     M
    //                 </label>
    //             </div>
    //             <div className="size-selector">
    //                 <input
    //                     onChange={handlecheck}

    //                     type="radio" name="l" id="l" className="hidden" />
    //                 <label
    //                     htmlFor="l"
    //                     className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
    //                 >
    //                     L
    //                 </label>
    //             </div>
    //             <div className="size-selector">
    //                 <input
    //                     onChange={handlecheck}

    //                     type="radio" name="xl" id="xl" className="hidden" />
    //                 <label
    //                     htmlFor="xl"
    //                     className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
    //                 >
    //                     XL
    //                 </label>
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default FilterBySize;