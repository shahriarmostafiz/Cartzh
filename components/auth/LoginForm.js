"use client"

import { login } from "@/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
    const [loginError, setLoginError] = useState(null)
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const formData = new FormData(event.currentTarget)
            const email = formData.get("email")
            const password = formData.get("password")

            const response = await login({ email, password })
            console.log(response);
            if (response.error) {
                setLoginError(response.error)
            } else {
                router.push("/")
            }
        } catch (error) {
            setLoginError(error.message)
        }
    }
    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="space-y-2">
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
            </div>
            <div className="flex items-center justify-between mt-6">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="remember"
                        id="remember"
                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label htmlFor="remember" className="text-gray-600 ml-3 cursor-pointer">
                        Remember me
                    </label>
                </div>
                <Link href="#" className="text-primary">
                    Forgot password
                </Link>
            </div>
            <div className="mt-4">
                <button
                    type="submit"
                    className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                >
                    Login
                </button>
            </div>
            {
                loginError && <p className="py-4">{loginError}</p>
            }
        </form>

    );
};

export default LoginForm;