"use client"
import React from 'react';
import crossIcon from "@/public/close.svg"
import Image from 'next/image';
import { handlePersonalInfo } from '@/action';

const EditPersonalInfoModal = ({ editInfo, closeThis, lang, dictionary }) => {

    const handleEdit = async (event) => {
        event.preventDefault()
        // const editProperTy = editWhat.toLowerCase().split(" ")[0]

        const formData = new FormData(event.currentTarget)
        const name = formData.get("name")


        const email = formData.get("email")
        const phone = formData.get("phone")

        const info = {

            email, phone, name


        }
        // console.log(addressInfo);
        const res = await handlePersonalInfo(editInfo?.id, info)
        console.log(res);
        // if (addressInfo?.shipping) {
        //     console.log("shipping was given");
        // } else {
        //     console.log("billing Was given");
        // }
    }

    // const { fullName, emailAddress, phone, edit, update, editPersonalInfo, } = dictionary

    return (
        < div className="absolute left-0 top-0 w-full h-full grid place-items-center bg-slate-50/40 backdrop-blur-[1px] z-50">
            {/* Search Container */}
            <div className="relative w-1/4 mx-auto bg-white p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
                <div className=" border border-gray-200 p-4 rounded">
                    <h3 className="text-lg font-medium capitalize mb-4">{dictionary?.editPersonalInfo} </h3>
                    <form className="space-y-4" onSubmit={handleEdit}>

                        <div>
                            <label htmlFor="name" className="text-gray-600">
                                {dictionary?.fullName}
                            </label>
                            <input

                                type="text"
                                required
                                name="name"
                                id="name"
                                className="input-box"
                                defaultValue={
                                    editInfo?.name
                                }
                            />
                        </div>



                        <div>
                            <label htmlFor="email" className="text-gray-600">
                                {dictionary?.emailAddress}
                            </label>
                            <input type="email"
                                defaultValue={
                                    editInfo?.email
                                }
                                required
                                // disabled
                                name="email" id="email" className="input-box disabled:border-none" />
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
                            {dictionary?.update}
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

export default EditPersonalInfoModal;