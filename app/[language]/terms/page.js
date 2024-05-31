import React from 'react';
import { getDictionary } from '../dictionary';
export const metadata = {
    title: 'Terms and conditions - LWSKart',
    description: 'Discover LWSKart, your ultimate online destination for stylish and high-quality furniture. Explore a curated selection of living room,  bedroom, kitchen, and outdoor furniture designed to enhance your home. Enjoy exceptional craftsmanship, competitive prices, and a seamless shopping experience, backed by excellent customer service and fast shipping. Transform your living space with LWSKart – where quality meets style..'
}

const Page = async ({ params: { language } }) => {
    // const termsAndConditions = [
    //     "1. Introduction: Welcome to LWS-Kart. By using our website, you agree to comply with and be bound by the following terms and conditions.",
    //     "2. Account Registration: You must create an account to make a purchase. Ensure that the information provided is accurate and up-to-date.",
    //     "3. User Data: When you register, we collect personal information such as your name, email address, shipping address, and payment details. This data is used to process your orders and improve our services.",
    //     "4. Data Security: We implement security measures to protect your personal information. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.",
    //     "5. Data Usage: Your personal information may be used for order processing, customer service, marketing communications, and to enhance user experience. We will not sell your personal information to third parties.",
    //     "6. Product Descriptions: We strive to provide accurate product descriptions. However, we do not warrant that the descriptions or other content is accurate, complete, reliable, or error-free.",
    //     "7. Pricing: All prices are listed in USD and are subject to change without notice. We are not responsible for typographical errors regarding pricing.",
    //     "8. Orders: All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including product availability and errors in product or pricing information.",
    //     "9. Payment: Payment must be made in full at the time of purchase. We accept various payment methods including credit/debit cards and online payment services.",
    //     "10. Shipping and Delivery: We will make every effort to deliver products in a timely manner. Delivery times are estimates and we are not responsible for delays beyond our control.",
    //     "11. Returns and Refunds: We accept returns within 30 days of delivery. Products must be in original condition and packaging. Refunds will be issued to the original payment method.",
    //     "12. Warranty: Our products come with a limited warranty. Please refer to the product page for specific warranty details. We are not responsible for damage caused by misuse or normal wear and tear.",
    //     "13. Privacy: Your privacy is important to us. Please review our Privacy Policy to understand our practices regarding your personal information.",
    //     "14. Limitation of Liability: LWS-Kart is not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our website or products.",
    //     "15. Governing Law: These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which LWS-Kart operates.",
    //     "16. Changes to Terms: We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.",
    //     "17. Contact Information: If you have any questions or concerns about these terms, please contact our customer service team at support@lwskart.com."
    // ];
    const dictionary = await getDictionary(language)

    return (
        <div className="flex justify-center  items-center w-full min-h-screen">
            <div className="px-4 space-y-4 md:px-8 lg:px-4 py-4 md:py-8 lg:py-12  w-fit mx-auto ">
                <h1 className="text-3xl font-semibold text-primary">{dictionary?.termsAndConditions}</h1>
                <div className="space-y-4 max-w-4xl ml-4">
                    {
                        dictionary?.terms?.map(terms => <h1 key={terms}>
                            {terms}
                        </h1>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Page;