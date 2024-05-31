import Banner from "@/components/Home/Banner";
import Categories from "@/components/Home/Categories";
import Features from "@/components/Home/Features";
import NewArrival from "@/components/Home/NewArrival";
import TrendingProducts from "@/components/Home/Products/TrendingProducts";
import Sale from "@/components/Home/Sale";
import { getDictionary } from "./dictionary";

export default async function Home({ params: { language }, searchParams: { search } }) {

  const dictionary = await getDictionary(language)
  return (
    <>
      <Banner lang={language} bannerText1={dictionary?.bannerText1} bannerText2={dictionary?.bannerText2} shopNow={dictionary?.shopNow} />
      <Features lang={language} dictionary={dictionary} />
      <Categories lang={language} langCategories={dictionary?.categoriesName} shopbyCategory={dictionary?.shopbyCategory} />
      <NewArrival lang={language} dictionary={dictionary} />
      <Sale lang={language} />
      <TrendingProducts lang={language} dictionary={dictionary} />
    </>
  );
}

export async function generateStaticParams() {
  let lang = ["en", "bn"]
  return lang.map(l => ({ language: l }))
}