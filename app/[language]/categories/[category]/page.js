import ProductList from '@/components/categorypage/ProductList';
import { getAllProductIds } from '@/db/queries';
import { CapitalizeFirstWord } from '@/utils/infoUtils';
import { getDictionary } from '../../dictionary';

export async function generateMetadata({ params: { language, category } }) {


    return {
        title: `${CapitalizeFirstWord(category)} Products  `,
        description: 'Discover CartZh, your ultimate online destination for stylish and high-quality furniture. Explore a curated selection of living room,  bedroom, kitchen, and outdoor furnitures designed to enhance your home. Enjoy exceptional craftsmanship, competitive prices, and a seamless shopping experience, backed by excellent customer service and fast shipping. Transform your living space with CartZh  where quality meets style..',

    }
}


const CategoriesPage = async ({ params: { language, category } }) => {
    const decoded = decodeURI(category)
    const dictionary = await getDictionary(language)

    return (
        < div className="container pb-16" >
            <h2 className="text-2xl font-medium text-gray-800 uppercase my-6">
                {dictionary[decoded] ?? ""} {dictionary?.items}
            </h2>

            <ProductList category={decoded} dictionary={dictionary} lang={language} />
        </div>

    );
};

export default CategoriesPage;

export async function generateStaticParams() {
    // Fetch all product IDs
    const { uniqueCategory } = await getAllProductIds()

    // Create an array of paths with `language` and `id` parameters
    const paths = [];
    const languages = ['en', 'bn']; // Add all supported languages here

    languages.forEach((language) => {
        uniqueCategory.forEach((category) => {
            paths.push({ language: language, category: category });
        });
    });

    return paths;
}
/****
 * <div className="container pb-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
                TRENDING PRODUCTS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {
                    trendingProducts?.map(product => <ProductCard product={product} key={product?.id} />)
                }
            </div>
        </div>
 * 
 */