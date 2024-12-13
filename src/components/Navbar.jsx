import React from "react";
import { BiBell, BiUser } from 'react-icons/bi';
import { FaGavel } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="bg-white shadow-md h-16 flex items-center justify-between px-6">
            <div className="flex items-center space-x-2">
                {/* <FaGavel className="text-blue-500 text-2xl" />
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Jur</h1> */}
            </div>
            <div className="flex items-center space-x-6">
                <div className="relative">
                    <BiBell className="text-gray-600 text-2xl hover:text-blue-500 cursor-pointer" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg">
                    <BiUser className="text-gray-600 text-2xl" />
                    <span className="text-gray-600 hidden md:block">John Doe</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;