import LoginForm from '@/components/auth/LoginForm';
import SocialLogin from '@/components/auth/SocialLogin';
import React from 'react';

const LoginPage = ({ params: { language } }) => {
    return (
        <div className="contain py-16">
            <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
                <p className="text-gray-600 mb-6 text-sm">
                    welcome back customer
                </p>
                <LoginForm />
                <SocialLogin page={"login"} />
            </div>
        </div>

    );
};

export default LoginPage;