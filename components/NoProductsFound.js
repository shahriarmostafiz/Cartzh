import React from 'react';

const NoProductsFound = ({ info }) => {
    return (
        <div className="flex w-full min-h-[70vh] justify-center items-center">
            <div className="w-3/5 min-h-[50vh] mx-auto p-4 md:p-8 lg:p-12 border-2 border-primary rounded"
            >
                {info}
            </div>
        </div>
    );
};

export default NoProductsFound;