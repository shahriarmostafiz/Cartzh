import RegisterForm from '@/components/auth/RegisterForm';
import SocialLogin from '@/components/auth/SocialLogin';
import React from 'react';
import { getDictionary } from '../dictionary';

export const metadata = {
    title: 'Signup - LWSKart',
    description: 'Register to discover LWSKart, your ultimate online destination for stylish and high-quality furniture. Explore a curated selection of living room,  bedroom, kitchen, and outdoor furniture designed to enhance your home. Enjoy exceptional craftsmanship, competitive prices, and a seamless shopping experience, backed by excellent customer service and fast shipping. Transform your living space with LWSKart – where quality meets style..',
}

const RegisterPage = async ({ params: { language } }) => {
    const dictionary = await getDictionary(language)
    return (
        <div className="contain py-16">
            <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                <h2 className="text-2xl uppercase font-medium mb-1">{dictionary?.createAcc}</h2>
                <p className="text-gray-600 mb-6 text-sm">{dictionary?.regNewCustomer}</p>

                <RegisterForm lang={language} dictionary={dictionary} />

                <SocialLogin lang={language} />

            </div>
        </div>

    );
};

export default RegisterPage;

export async function generateStaticParams() {
    let lang = ["en", "bn"]
    return lang.map(l => ({ language: l }))
}