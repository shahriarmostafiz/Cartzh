"use client"
import React from 'react';
import EditPersonalInfoModal from './EditPersonalModal';
import { useState } from 'react';
import user from "@/public/icons/user.svg"
import phone from "@/public/icons/phone2.svg"
import email from "@/public/icons/email.svg"
import Image from 'next/image';


const PersonalInfo = ({ userInfo, lang, dictionary }) => {
    const [showModal, setShowModal] = useState(false)



    return (
        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800 text-lg">{dictionary?.personalInfo}</h3>
                < button
                    onClick={() => setShowModal(!showModal)}
                    className="text-primary">
                    {dictionary?.edit}
                </button>
            </div>
            <div className="space-y-4">
                <h4 className="text-gray-700 font-medium flex items-center gap-2">
                    <Image src={user} alt="user" height={20} width={20} />
                    {userInfo?.name}</h4>
                <p className="text-gray-800  flex items-center gap-2">
                    <Image src={email} alt="user" height={20} width={20} />

                    {userInfo?.email ?? "Not added"}</p>
                <p className="text-gray-800 flex items-center gap-2">
                    <Image src={phone} alt="user" height={20} width={20} />

                    {userInfo?.phone ?? "Not added"}</p>
            </div>
            {
                showModal && <EditPersonalInfoModal editInfo={userInfo} closeThis={() => setShowModal(!showModal)} lang={lang} dictionary={dictionary} />
            }
        </div>
    );
};

export default PersonalInfo;