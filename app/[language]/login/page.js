import { auth } from '@/auth';
import LoginForm from '@/components/auth/LoginForm';
import SocialLogin from '@/components/auth/SocialLogin';
import { redirect } from 'next/navigation';
import React from 'react';
import { getDictionary } from '../dictionary';

export const metadata = {
    title: 'Login-LWSKart',
    description: 'Login to discover LWSKart, your ultimate online destination for stylish and high-quality furniture. Explore a curated selection of living room,  bedroom, kitchen, and outdoor furniture designed to enhance your home. Enjoy exceptional craftsmanship, competitive prices, and a seamless shopping experience, backed by excellent customer service and fast shipping. Transform your living space with LWSKart – where quality meets style..',
}

const LoginPage = async ({ params: { language } }) => {
    const session = await auth()
    // if()
    console.log(session?.user, "loginPage");
    if (session?.user) {
        redirect(`/${language}`)
    }
    const dictionary = await getDictionary(language)
    return (
        <div className="contain py-16">
            <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                <h2 className="text-2xl uppercase font-medium mb-1">{dictionary?.login}</h2>
                <p className="text-gray-600 mb-6 text-sm">
                    {dictionary?.welcomeBack}
                </p>
                <LoginForm lang={language} dictionary={dictionary} />
                <SocialLogin page={"login"} dictionary={dictionary} />
            </div>
        </div>

    );
};

export default LoginPage;

export async function generateStaticParams() {
    let lang = ["en", "bn"]
    return lang.map(l => ({ language: l }))
}