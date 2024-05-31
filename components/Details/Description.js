
const Description = ({ description, size, color, dictionary }) => {
    return (
        <div className="container pb-16 mt-4">
            <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium text-2xl">
                {dictionary?.productDetails}
            </h3>
            <div className="w-3/5 pt-4">
                <div className="text-gray-600">
                    {
                        description
                    }
                    <br />
                    {dictionary?.size} : {
                        size.toUpperCase()
                    }
                    <br />
                    {dictionary?.color} : {
                        color
                    }
                </div>
            </div>
        </div>

    );
};

export default Description;