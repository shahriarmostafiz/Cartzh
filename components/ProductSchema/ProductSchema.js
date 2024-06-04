
const ProductSchema = ({ product }) => {
    const productName = encodeURIComponent(product?.name)
    const formattedData = {

        "@context": "https://schema.org/",
        "@type": "Product",
        "name": productName,
        "image": [...product?.gallery],
        "description": product?.description,
        "mpn": "925872",
        "brand": {
            "@type": "Brand",
            "name": product?.brand
        },
        "review": {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": product?.rating,
                "bestRating": 5
            },
            "author": {
                "@type": "Person",
                "name": "LWS-Kart"
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": product?.rating,
            "reviewCount": product?.reviews
        },
        "offers": {
            "@type": "Offer",
            "url": "https://example.com/anvil",
            "priceCurrency": "USD",
            "price": product?.discountedPrice,
            "priceValidUntil": "2024-11-20",
            "itemCondition": "https://schema.org/UsedCondition",
            "availability": "https://schema.org/InStock"
        }


    }


    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(formattedData)
                }}
            >

            </script>
        </>
    );
};

export default ProductSchema;