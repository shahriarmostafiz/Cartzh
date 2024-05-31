"use client"
import React, { useState } from 'react';
import ToggleDrawer from './ToggleDrawer';
import Drawer from './Drawer';
import Filter from './Filter';

const SideBar = ({ ammount, lang, dictionary }) => {
    const [showDrawer, setShowDrawer] = useState(false)

    const handleToggle = () => {
        setShowDrawer(prev => !prev)
    }
    return (
        <>
            <ToggleDrawer toggle={handleToggle} filter={dictionary?.filter} />
            {
                showDrawer && <Drawer products={ammount} toggle={showDrawer} handleToggle={handleToggle} lang={lang} dictionary={dictionary} />
            }
            <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden hidden md:block">

                <Filter products={ammount} lang={lang} dictionary={dictionary} />
            </div>

        </>
    );
};

export default SideBar;