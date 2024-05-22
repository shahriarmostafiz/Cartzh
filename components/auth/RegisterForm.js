"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
const RegisterForm = () => {
    const [regErr, setRegErr] = useState(null)
    const router = useRouter()
    const handleReg = async (event) => {
        event.preventDefault()
        try {
            const formData = new FormData(event.currentTarget)
            const name = formData.get("name")


            const email = formData.get("email")
            const password = formData.get("password")
            const confirm = formData.get("confirm")
            const agreeToTerms = formData.get('agreement') !== null;
            if (!agreeToTerms) {
                setRegErr("Please agree to terms and conditions")
            }
            if (confirm !== password) {
                setRegErr("password do not match")
                return
            }
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            })

            res.status === 201 && router.push("/login")
        } catch (error) {
            setRegErr(error.message)
        }
    }
    return (
        <form action="#" method="post" autoComplete="off">
            <div className="space-y-2">
                <div>
                    <label htmlFor="name" className="text-gray-600 mb-2 block">
                        Full Name
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
                        Email address
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
                        Password
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
                        Confirm password
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
                        name="aggrement"
                        id="aggrement"
                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label
                        htmlFor="aggrement"
                        className="text-gray-600 ml-3 cursor-pointer"
                    >
                        I have read and agree to the{" "}
                        <a href="#" className="text-primary">
                            terms &amp; conditions
                        </a>
                    </label>
                </div>
            </div>
            <div className="mt-4">
                <button
                    type="submit"
                    className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                >
                    create account
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;