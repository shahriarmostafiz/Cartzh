"use client"
import { registerUser } from '@/action';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const RegisterForm = ({ lang, dictionary }) => {
    const [regErr, setRegErr] = useState(null)
    const router = useRouter()
    // const { replace } = useRouter()

    const handleReg = async (event) => {
        event.preventDefault()
        setRegErr(prev => null)
        try {
            const formData = new FormData(event.currentTarget)
            // console.log(formData);
            const name = formData.get("name")


            const email = formData.get("email")
            const password = formData.get("password")
            const confirm = formData.get("confirm")
            const agreeToTerms = event.target.aggreement.checked
            console.log({ name, email, confirm, agreeToTerms, password });
            if (!agreeToTerms) {
                setRegErr(prev => "Please agree to terms and conditions")
                return
            }
            if (confirm !== password) {
                setRegErr(prev => "password do not match")
                return
            }
            const user = await registerUser({
                email, password, name
            })
            if (user === "found") {
                setRegErr("User with this Email exists")
                return
            }
            else {
                router.push(`/${lang}/login`)
            }

        } catch (error) {
            setRegErr(error.message)
        }
    }
    return (
        <form onSubmit={handleReg} autoComplete="off">
            <div className="space-y-2">
                <div>
                    <label htmlFor="name" className="text-gray-600 mb-2 block">
                        {dictionary?.fullName}
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                        placeholder="fulan fulana"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="text-gray-600 mb-2 block">
                        {dictionary?.emailAddress}
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                        placeholder="youremail.@domain.com"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="text-gray-600 mb-2 block">
                        {dictionary?.password}
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                        placeholder="*******"
                    />
                </div>
                <div>
                    <label htmlFor="confirm" className="text-gray-600 mb-2 block">
                        {dictionary?.confirmPassword}
                    </label>
                    <input
                        type="password"
                        name="confirm"
                        id="confirm"
                        className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                        placeholder="*******"
                    />
                </div>
            </div>
            <div className="mt-6">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="aggreement"
                        id="aggreement"
                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label
                        htmlFor="aggrement"
                        className="text-gray-600 ml-3 cursor-pointer"
                    >
                        {dictionary?.aggreetoTerms} {" "}
                        <Link href={`/${lang}/terms`} className="text-primary">
                            {dictionary?.termsAndConditions}
                            {/* terms &amp; conditions */}
                        </Link>
                    </label>
                </div>
            </div>

            <div className="mt-4">
                <button
                    type="submit"
                    className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                >
                    {dictionary?.createAcc}
                </button>
            </div>
            {
                regErr && <div className="mt-4 text-red-600 font-medium">{regErr}</div>
            }
        </form>
    );
};

export default RegisterForm;




