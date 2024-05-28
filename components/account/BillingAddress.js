"use client"
import { useState } from "react"
import EditAddressModal from "./EditAddressModal";

const Address = ({ userId, address, editWhat }) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800 text-lg">{editWhat}</h3>
                <button
                    onClick={() => setShowModal(!showModal)}
                    className="text-primary">
                    Edit
                </button>
            </div>
            {
                address ? <div className="space-y-1">
                    <h4 className="text-gray-700 font-medium">{address?.name}</h4>
                    <p className="text-gray-800">{address?.address}, {address?.city}</p>
                    <p className="text-gray-800">{address?.region}</p>
                    <p className="text-gray-800">{address?.phone}</p>
                </div> : <div className="space-y-1">No {editWhat} was added </div>
            }
            {
                showModal && <EditAddressModal editWhat={editWhat} closeThis={() => setShowModal(!showModal)} userId={userId} />
            }
        </div>
    );
};

export default Address;