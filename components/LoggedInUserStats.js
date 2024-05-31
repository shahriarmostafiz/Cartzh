import { getUserInfo, getUsersCartInfo } from '@/db/queries';
import Link from 'next/link';

const LoggedInUserStats = async ({ email, dictionary, lang }) => {
    const user = await getUserInfo(email)
    let cartStat = 0;
    if (user) {
        const cartInfo = await getUsersCartInfo(user?.id)
        if (cartInfo) {
            cartStat = cartInfo.length
        }

    }

    // let userOrderInfo = await getUser 

    return (
        <div className="flex items-center space-x-4">
            <Link
                href={`/${lang}/wishlist`}
                className="text-center text-gray-700 hover:text-primary transition relative"
            >
                <div className="text-2xl">
                    <i className="fa-regular fa-heart" />
                </div>
                <div className="text-xs leading-3">{dictionary.wishList}</div>
                <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                    {user?.wishList?.length ?? 0}
                </div>
            </Link>
            <Link
                href={`/${lang}/cart`}
                className="text-center text-gray-700 hover:text-primary transition relative"
            >
                <div className="text-2xl">
                    <i className="fa-solid fa-bag-shopping" />
                </div>
                <div className="text-xs leading-3">{dictionary?.cart}</div>
                <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                    {cartStat}
                </div>
            </Link>
            <Link
                href={`/${lang}/account`}
                className="text-center text-gray-700 hover:text-primary transition relative"
            >
                <div className="text-2xl">
                    <i className="fa-regular fa-user" />
                </div>
                <div className="text-xs leading-3">{dictionary?.account}</div>
            </Link>
        </div>
    );
};

export default LoggedInUserStats;