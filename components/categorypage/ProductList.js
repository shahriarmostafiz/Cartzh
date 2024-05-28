import { getProductsByCategory } from "@/db/queries";
import ProductCard from "../Home/Products/ProductCard";


const ProductList = async ({ category }) => {
    const products = await getProductsByCategory(category)
    if (products.length === 0) {
        return <h1 className="text-red-700 text-3xl font-medium"> No products found </h1>
    }
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {
                products.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    );
};

export default ProductList;