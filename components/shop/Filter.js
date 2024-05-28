"use client"
import { getCategoryValue } from '@/utils/infoUtils';
import React from 'react';
import FilterbyCategory from './Filter/FilterbyCategory';
import FilterByPrice from './Filter/FilterByPrice';
import FilterBySize from './Filter/FilterBySize';

const Filter = ({ products }) => {

    return (
        <div className="divide-y divide-gray-200 space-y-5">
            <FilterbyCategory products={products} />
            <FilterByPrice />
            <FilterBySize />


        </div>


    );
};

export default Filter;