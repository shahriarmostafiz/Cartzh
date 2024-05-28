import Banner from "@/components/Home/Banner";
import Categories from "@/components/Home/Categories";
import Features from "@/components/Home/Features";
import NewArrival from "@/components/Home/NewArrival";
import TrendingProducts from "@/components/Home/Products/TrendingProducts";
import Sale from "@/components/Home/Sale";

export default function Home({ searchParams: { search } }) {
  return (
    <>
      <Banner />
      <Features />
      <Categories />
      <NewArrival />
      <Sale />
      <TrendingProducts />
    </>
  );
}
