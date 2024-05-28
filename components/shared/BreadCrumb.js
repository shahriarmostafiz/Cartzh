import Link from "next/link";

const BreadCrumb = ({ page }) => {
    return (
        <div className="container py-4 flex items-center gap-3">
            <Link href="/" className="text-primary text-base">
                <i className="fa-solid fa-house" />
            </Link>
            <span className="text-sm text-gray-400">
                <i className="fa-solid fa-chevron-right" />
            </span>
            <p className="text-gray-600 font-medium">{page}</p>
        </div>

    );
};

export default BreadCrumb;