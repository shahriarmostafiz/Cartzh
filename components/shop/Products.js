import { getProductsBySearchAndFilter } from "@/db/queries";
import ProductCard from "../Home/Products/ProductCard";

const ShopProducts = async ({ products }) => {
    return (
        <div className="col-span-3">
            <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
                {products?.map(product => <ProductCard key={product?.id} product={product} />)}
            </div>
        </div>
    );
};

export default ShopProducts;