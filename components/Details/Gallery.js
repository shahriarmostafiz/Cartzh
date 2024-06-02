"use client"
// import { getBlurData } from '@/utils/image-utils';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Gallery = ({ gallery }) => {
    const [selectedImage, setSelectedImage] = useState(gallery[0])
    // console.log(gallery);
    let remainingImages = [...gallery]
    const [blurData, setBlurData] = useState({})
    // useEffect(() => {
    //     const loadBlurData = async () => {
    //         const blurPromises = gallery?.map(async (img) => {
    //             const { base64 } = await getBlurData(img)
    //             return { img, base64 }
    //         })
    //         const blurDataResults = await Promise.all(blurPromises)
    //         const blurDataMap = {}
    //         blurDataResults.forEach(({ img, base64 }) => {
    //             blurDataMap[img] = base64
    //         })
    //         setBlurData(blurDataMap)

    //     }

    //     loadBlurData()
    // }, [gallery])
    remainingImages.shift()
    const handleClick = (img) => {
        setSelectedImage(img)
    }
    // console.log(remaining);
    return (
        <div>
            <Image
                src={selectedImage}
                alt="product"
                className="w-full"
                height={612}
                width={612}
                placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8cfnGCgAIOwMtw6XbGAAAAABJRU5ErkJggg==y' // "empty" | "blur" | "data:image/..."

            />
            <div className="flex">
                <div className="grid grid-cols-4 gap-4 mt-4">
                    {/* <Image
                        src={gallery[0]}
                        alt="product2"
                        className={`w-full cursor-pointer rounded ${selectedImage === gallery[0] && " border-4 border-primary"}`}
                        height={110}
                        width={110}
                        onClick={() => { handleClick(gallery[0]) }}
                        placeholder="blur"
                        blurDataURL={blurData[img]}


                    /> */}

                    {
                        gallery?.map(img => <Image src={img} key={img}

                            // placeholder="blur"
                            // blurDataURL={blurData[img]}
                            onClick={() => { handleClick(img) }}
                            className={` ${selectedImage === img && " border-4 border-primary"} w-full cursor-pointer rounded`} alt='images' height={110} width={110}

                        />)
                    }

                </div>
            </div>
        </div>

    )
}

export default Gallery;

// return (
//     <h1>
//         GALLERY
//     </h1>
//     //
// );
