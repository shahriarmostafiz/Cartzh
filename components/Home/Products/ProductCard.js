import { auth } from '@/auth';
import WishListAction from '@/components/Details/WishListAction';
import ProductSchema from '@/components/ProductSchema/ProductSchema';
import AddToCart from '@/components/shared/AddToCart';
import { getUserInfo } from '@/db/queries';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = async ({ lang, product, dictionary }) => {
    const session = await auth()
    const ratingArray = Array(parseInt(product?.rating)).fill("val")
    let userInfo = null
    if (session) {
        userInfo = await getUserInfo(session?.user?.email)
    }

    return (
        <div className="bg-white shadow rounded overflow-hidden group flex flex-col hover:border-t-2 hover:border-primary">

            <div className="relative">
                <Image
                    src={product?.gallery[0]}
                    alt="product 1"
                    className="w-full"
                    height={262}
                    width={353}
                />
                <div
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                >
                    <Link
                        href={`/${lang}/detail/${product?.id}`}
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="view product"
                    >
                        <i className="fa-solid fa-magnifying-glass" />
                    </Link>

                    <WishListAction lang={lang} dictionary={dictionary} productId={product?.id} userId={userInfo?.id} wishList={userInfo?.wishList} iconButton={true} />

                    {/* <Link
                        href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="add to wishlist"
                    >
                        <i className="fa-solid fa-heart" />
                    </Link> */}
                </div>
            </div>
            <div className="pt-4 pb-3 px-4 flex flex-col flex-1">
                <Link href={`/${lang}/detail/${product?.id}`} >
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition flex-1">
                        {product?.name}
                    </h4>
                </Link>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold">${product?.discountedPrice}</p>
                    <p className="text-sm text-gray-400 line-through">${product?.price}</p>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-1 text-sm text-yellow-400">
                        {
                            ratingArray?.map((rating, idx) => <span key={idx}>
                                <i className="fa-solid fa-star" />
                            </span>)
                        }

                        {/* <span>
                            <i className="fa-solid fa-star" />
                        </span>
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                        <span>
                            <i className="fa-solid fa-star" />
                        </span> */}
                    </div>
                    <div className="text-xs text-gray-500 ml-3">({product?.reviews})</div>
                </div>
            </div>
            {
                session?.user && userInfo?.id ? (
                    product?.stock > 1 ?
                        <AddToCart dictionary={dictionary} productId={product?.id} userId={userInfo?.id} quantity={1} />
                        : <WishListAction dictionary={dictionary} productId={product?.id} userId={userInfo?.id} wishList={userInfo?.wishList} lang={lang} />
                ) : <Link
                    href={`/detail/${product?.id}`}
                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                >
                    {dictionary?.viewDetails}
                </Link>
            }
            <ProductSchema product={product} />
        </div>

    );
};

export default ProductCard;

// serId, wishList, productId 