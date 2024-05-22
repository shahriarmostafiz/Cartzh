import React from 'react';

const SocialLogin = ({ page }) => {
    return (
        <>
            <div className="mt-6 flex justify-center relative">
                <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
                    Or login with
                </div>
                <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200" />
            </div>
            <div className="mt-4 flex gap-4">
                <a
                    href="#"
                    className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
                >
                    facebook
                </a>
                <a
                    href="#"
                    className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
                >
                    google
                </a>
            </div>
            {/* ./login with */}
            <p className="mt-4 text-center text-gray-600">
                {
                    page === "login" ? "Don't have account?  " : "Already have account?"
                }
                {page === "login" ? <a href="register.html" className="text-primary">
                    Register now
                </a> : <a href="login.html"
                    class="text-primary">Login now</a>}
            </p>
        </>

    );
};

export default SocialLogin;