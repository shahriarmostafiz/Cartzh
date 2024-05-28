import ProductList from '@/components/categorypage/ProductList';


const CategoriesPage = ({ params: { languge, category } }) => {
    const decoded = decodeURI(category)

    return (
        < div className="container pb-16" >
            <h2 className="text-2xl font-medium text-gray-800 uppercase my-6">
                {decoded} Items
            </h2>

            <ProductList category={decoded} />
        </div>

    );
};

export default CategoriesPage;

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