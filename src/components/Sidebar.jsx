import React, { useState } from "react";
import { MdDashboard, MdMenu, MdClose } from 'react-icons/md';
import { BiMessageSquareDetail, BiCalendar, BiFolder } from 'react-icons/bi';
import { FaGavel } from 'react-icons/fa';

const Sidebar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        { icon: <MdDashboard className="text-xl" />, label: "Dashboard" },
        { icon: <BiMessageSquareDetail className="text-xl" />, label: "My Cases" },
        { icon: <BiMessageSquareDetail className="text-xl" />, label: "Activities" },
        { icon: <BiCalendar className="text-xl" />, label: "Calendar" },
        { icon: <BiFolder className="text-xl" />, label: "Files" },
        { icon: <FaGavel className="text-xl" />, label: "Open a Dispute" },
    ];

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-lg shadow-lg"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>

            {/* Sidebar */}
            <div className={`
                fixed md:static inset-y-0 left-0 z-40
                transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
                md:translate-x-0 transition-transform duration-300 ease-in-out
                w-64 bg-white h-screen flex flex-col
            `}>
                <div className="p-6 flex items-center space-x-3 pl-16">
                    <FaGavel className="text-blue-500 text-2xl" />
                    <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                        Jur
                    </h1>
                </div>

                <nav className="flex-1 px-4 space-y-2 overflow-y-auto pt-1">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 
                                     hover:bg-blue-50 hover:text-blue-500 rounded-lg transition-all duration-200
                                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t">
                    <img
                        src="https://media.istockphoto.com/id/451358505/vector/justice-is-expensive.jpg?s=612x612&w=is&k=20&c=uq05epYCmskD6gzmOia4mWXy5y0oJoMTG9G8FC1-ECw="
                        alt="Justice"
                        className="w-full rounded-lg"
                    />
                </div>
            </div>
        </>
    );
};

export default Sidebar;