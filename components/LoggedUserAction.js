"use client"
import { signOut } from 'next-auth/react';

const LoggedUserAction = ({ name, logout }) => {
    const handleLogout = () => {
        signOut()
    }
    return (
        <div className='flex gap-4 text-white'>

            <span>Hello | </span>
            <span className="mr-2">{name}</span>

            <span
                onClick={handleLogout}
                className="  text-red-600 cursor-pointer  hover:text-white">{logout} </span>
        </div >
    );
};

export default LoggedUserAction;
/****border-2 border-[#eb4a36] px-2 py-1 rounded-md hover:bg-[#eb4a36] */