import { Roboto } from "next/font/google";
import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { updateCart } from "@/action";

const roboto = Roboto({
  weight: ['400', "500", '700'],
  subsets: ['latin'],
  display: 'swap',
})
const poppins = Poppins({
  weight: ['400', "500", "600", '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Cart-Zh",
  description: 'Discover CartZh, your ultimate online destination for stylish and high-quality furniture. Explore a curated selection of living room,  bedroom, kitchen, and outdoor furnitures designed to enhance your home. Enjoy exceptional craftsmanship, competitive prices, and a seamless shopping experience, backed by excellent customer service and fast shipping. Transform your living space with CartZh  where quality meets style..',
};

export default async function RootLayout({ children, params: { language } }) {
  await updateCart()
  console.log(language);

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={poppins.className}>
        <Header lang={language} />
        <NavBar lang={language} />
        {children}
        <Footer lang={language} />
      </body>
    </html>
  );
}
