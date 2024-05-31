"use client"
import React from 'react';
import crossIcon from "@/public/close.svg"
import Image from 'next/image';
import { handleAddressEdit } from '@/action';

const EditAddressModal = ({ userId, editInfo, editWhat, closeThis, dictionary }) => {
    const handleEdit = async (event) => {
        event.preventDefault()
        const editProperTy = editWhat.toLowerCase().split(" ")[0]

        const formData = new FormData(event.currentTarget)
        const fname = formData.get("fname")
        const lname = formData.get("lname")
        const region = formData.get("region")
        const address = formData.get("address")
        const city = formData.get("city")
        const phone = formData.get("phone")

        const addressInfo = {
            [editProperTy]: {
                name: `${fname} ${lname}`,
                address,
                city,
                region,
                phone
            }

        }
        console.log(addressInfo);
        const res = await handleAddressEdit(userId, addressInfo)
        console.log(res);
        // if (addressInfo?.shipping) {
        //     console.log("shipping was given");
        // } else {
        //     console.log("billing Was given");
        // }
    }
    return (
        < div className="absolute left-0 top-0 w-full h-full grid place-items-center bg-slate-50/40 backdrop-blur-[1px] z-50">
            {/* Search Container */}
            <div className="relative w-1/4 mx-auto bg-white p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
                <div className=" border border-gray-200 p-4 rounded">
                    <h3 className="text-lg font-medium capitalize mb-4">{dictionary?.edit} {dictionary[editWhat]} </h3>
                    <form className="space-y-4" onSubmit={handleEdit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="lname" className="text-gray-600">
                                    {dictionary?.fName}
                                </label>
                                <input

                                    type="text"
                                    required
                                    name="fname"
                                    id="fname"
                                    className="input-box"
                                    defaultValue={
                                        editInfo?.name?.split(" ")[0] ?? ""
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="lname" className="text-gray-600">
                                    {dictionary?.lName}
                                </label>
                                <input
                                    type="text"
                                    required
                                    name="lname"
                                    id="lname"
                                    className="input-box"
                                    defaultValue={
                                        editInfo?.name?.split(" ")[1] ?? ""
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="region" className="text-gray-600">
                                {dictionary?.country}

                            </label>
                            <input type="text"
                                defaultValue={
                                    editInfo?.region ?? ""
                                }
                                required name="region" id="region" className="input-box" />
                        </div>
                        <div>
                            <label htmlFor="address" className="text-gray-600">
                                {dictionary?.streetAddress}

                            </label>
                            <input type="text"
                                defaultValue={
                                    editInfo?.address ?? ""
                                }
                                required name="address" id="address" className="input-box" />
                        </div>
                        <div>
                            <label htmlFor="city" className="text-gray-600">

                                {dictionary?.city}

                            </label>
                            <input type="text"
                                defaultValue={
                                    editInfo?.city ?? ""
                                }
                                required name="city" id="city" className="input-box" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="text-gray-600">

                                {dictionary?.phone}

                            </label>
                            <input type="text"
                                defaultValue={
                                    editInfo?.phone ?? ""
                                }
                                required name="phone" id="phone" className="input-box" />
                        </div>

                        <button
                            type="submit"

                            className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
                        >
                            {dictionary?.update} {dictionary[editWhat]}
                        </button>

                    </form>
                </div>
                <button onClick={() => closeThis()}>
                    <Image

                        src={crossIcon}
                        alt="Close"
                        className="absolute right-2 top-2 cursor-pointer w-6 h-6"
                    />
                </button>
            </div>

        </div>
    );
};

export default EditAddressModal;