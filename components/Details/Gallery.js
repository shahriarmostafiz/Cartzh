"use client"
import Image from 'next/image';
import { useState } from 'react';

const Gallery = ({ gallery }) => {
    const [selectedImage, setSelectedImage] = useState(gallery[0])
    // console.log(gallery);
    let remainingImages = [...gallery]
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

            />
            <div className="flex">
                <div className="grid grid-cols-4 gap-4 mt-4">
                    <Image
                        src={gallery[0]}
                        alt="product2"
                        className={`w-full cursor-pointer rounded ${selectedImage === gallery[0] && " border-2 border-primary"}`}
                        height={110}
                        width={110}
                        onClick={() => { handleClick(gallery[0]) }}

                    />

                    {
                        remainingImages?.map(img => <Image src={img} key={img}
                            onClick={() => { handleClick(img) }}
                            className={` ${selectedImage === img && " border-2 border-primary"} w-full cursor-pointer rounded`} alt='images' height={110} width={110} />)
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
