"use client"
import { useState } from "react"
import EditAddressModal from "./EditAddressModal";
import user from "@/public/icons/user.svg"
import addressIcon from "@/public/icons/pin.svg"
import phoneIcon from "@/public/icons/phone2.svg"
import Image from "next/image";


const Address = ({ userId, address, editWhat, dictionary }) => {
    const [showModal, setShowModal] = useState(false)
    // const { fullName, emailAddress, phone, edit, update, editPersonalInfo, } = dictionary


    return (
        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800 text-lg">{dictionary[editWhat]}</h3>
                <button
                    onClick={() => setShowModal(!showModal)}
                    className="text-primary">
                    {dictionary?.edit}
                </button>
            </div>
            {
                address ? <div className="space-y-3">
                    <h4 className="text-gray-700 font-medium flex items-center gap-2">
                        <Image src={user} alt="user" height={20} width={20} />

                        {address?.name}</h4>
                    <p className="text-gray-800 flex items-start gap-2">
                        <Image src={addressIcon} alt="address" height={20} width={20} />

                        {address?.address}, {address?.city}, {address?.region}</p>
                    {/* <p className="text-gray-800"></p> */}
                    <p className="text-gray-800 flex items-center gap-2">
                        <Image src={phoneIcon} alt="phone" height={20} width={20} />

                        {address?.phone}</p>
                </div> : <div className="space-y-1">No {editWhat} was added </div>
            }
            {
                showModal && <EditAddressModal dictionary={dictionary} editInfo={address} editWhat={editWhat} closeThis={() => setShowModal(!showModal)} userId={userId} />
            }
        </div>
    );
};

export default Address;