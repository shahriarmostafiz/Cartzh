import category1 from "@/public/category/category-1.jpg"
import category2 from "@/public/category/category-2.jpg"
import category3 from "@/public/category/category-3.jpg"
import category4 from "@/public/category/category-4.jpg"
import category5 from "@/public/category/category-5.jpg"
import category6 from "@/public/category/category-6.jpg"
import Image from 'next/image';
import Link from "next/link"

const categoryData = [
    {
        image: category1,
        category: "bedroom"
    },
    {
        image: category2,
        category: "mattress"
    },
    {
        image: category3,
        category: "outdoor"
    },
    {
        image: category4,
        category: "sofa"
    },
    {
        image: category5,
        category: "living"
    },
    {
        image: category6,
        category: "kitchen"
    },
]

const Categories = ({ lang, langCategories, shopbyCategory }) => {
    return (
        <div className="container py-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
                {shopbyCategory}
            </h2>
            <div className="grid grid-cols-3 gap-3">
                {
                    categoryData?.map(category => <Link
                        href={`/${lang}/categories/${category.category.toLowerCase()}`}
                        className="relative rounded-sm overflow-hidden group" key={category.category}>
                        <Image
                            src={category.image}
                            alt="category 1"
                            className="w-full"
                        />
                        <span

                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
                        >
                            {
                                langCategories[category.category]
                            }
                        </span>
                    </Link

                    >)
                }

            </div>
        </div>

    );
};

export default Categories;