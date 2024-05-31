"use client"
import { getCategoryValue } from '@/utils/infoUtils';
import React from 'react';
import FilterbyCategory from './Filter/FilterbyCategory';
import FilterByPrice from './Filter/FilterByPrice';
import FilterBySize from './Filter/FilterBySize';

const Filter = ({ products, lang, dictionary }) => {

    return (
        <div className="divide-y divide-gray-200 space-y-5">
            <FilterbyCategory products={products} lang={lang} dictionary={dictionary} />
            <FilterByPrice lang={lang} priceLang={dictionary?.price} />
            <FilterBySize lang={lang} sizeLang={dictionary?.size} sizes={dictionary?.categoriesSize} />


        </div>


    );
};

export default Filter;