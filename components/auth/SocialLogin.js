"use client"
import Link from 'next/link';
import { signIn } from "next-auth/react";


const SocialLogin = ({ page, lang, dictionary }) => {
    const handleGoogleLogin = (event) => {
        console.log("pressed");
        signIn("google", { callbackUrl: "http://localhost:3000/" })
    }

    const handeFacebookLogin = event => {
        console.log("pressed facebook")
        signIn("facebook", { callbackUrl: "http://localhost:3000/" })
    }
    return (
        <>
            <div className="mt-6 flex justify-center relative">
                <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
                    {dictionary?.orLogin}
                </div>
                <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200" />
            </div>
            <div className="mt-4 flex gap-4">
                <button
                    onClick={handeFacebookLogin}
                    className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
                >
                    {dictionary?.facebook}
                </button>
                <button
                    onClick={(e) => handleGoogleLogin(e)}
                    className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
                >
                    {dictionary?.google}
                </button>
            </div>
            {/* ./login with */}
            <p className="mt-4 text-center text-gray-600">
                {
                    page === "login" ? "Don't have account?  " : "Already have account?"
                }
                {page === "login" ? <Link href={`${lang}/register`} className="text-primary">
                    {dictionary?.registerNow}
                </Link> : <Link href={`${lang}/login`}
                    className="text-primary">{dictionary?.loginNow}</Link>}
            </p>
        </>

    );
};

export default SocialLogin;