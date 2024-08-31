import React, { useState } from 'react';
import {
    FaSearch,
    FaShoppingCart,
    FaUser,
    FaBars,
    FaTimes,
} from "react-icons/fa";

const ProfileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='self-stretch w-full '>
            <header className="self-stretch flex flex-row items-center justify-center top-[0] z-[99] sticky gap-[400px] px-5 w-full h-[70px] text-left text-darkolivegreen font-lexend mq450:gap-[180px] mq450:w-auto bg-gainsboro-800 mq450:h-[55px] mq800:gap-[500px] mq1000:gap-[230px] mq1125:gap-[250px] lg:gap-[270px] mq1350:gap-[320px]">
                <a className="w-[52px] text-5xl relative leading-[52px] font-extrabold flex whitespace-nowrap h-auto z-[1] text-[inherit] ">
                    <span>Farm</span>
                    <span className="text-darkslategray-700">2</span>
                    <span className="text-red-100">Buy</span>
                </a>

                <div className="mq800:hidden flex flex-col items-center justify-center w-auto">
                    <nav className="flex gap-10 text-gray-1100 font-manrope">
                        <a
                            href="/"
                            onClick={() => handleTabClick("Home")}
                            className={`leading-[26px] no-underline hover:text-red ${
                                activeTab === "Home"
                                    ? "font-extrabold text-darkolivegreen underline"
                                    : "text-gray-1200"
                            }`}
                        >
                            Home
                        </a>
                        <a
                            href="#shop"
                            onClick={() => handleTabClick("Shop")}
                            className={`leading-[26px] no-underline hover:text-red ${
                                activeTab === "Shop"
                                    ? "font-extrabold text-darkolivegreen underline"
                                    : "text-gray-1200"
                            }`}
                        >
                            Shop
                        </a>
                        <a
                            href="#about"
                            onClick={() => handleTabClick("About")}
                            className={`leading-[26px] no-underline hover:text-red ${
                                activeTab === "About"
                                    ? "font-extrabold text-darkolivegreen underline"
                                    : "text-gray-1200"
                            }`}
                        >
                            About
                        </a>
                        <a
                            href="/contact-us"
                            onClick={() => handleTabClick("Contact")}
                            className={`leading-[26px] no-underline hover:text-red ${
                                activeTab === "Contact"
                                    ? "font-extrabold text-darkolivegreen underline"
                                    : "text-gray-1200"
                            }`}
                        >
                            Contact
                        </a>
                    </nav>
                </div>

               
                <div className="mq800:hidden flex flex-row relative items-center justify-center gap-5 text-gray-1200 mr-[20px]">
                    <a href="/">
                        <FaSearch className="text-[20px] lg:text-[18px] sm:text-[15px] text-gray-1200" />
                    </a>
                    <a href="/">
                        <FaShoppingCart className="text-[20px] lg:text-[18px] sm:text-[15px] text-gray-1200" />
                    </a>
                    <a href="/">
                        <FaUser className="text-[20px] lg:text-[18px] sm:text-[15px] text-gray-1200" />
                    </a>
                </div>

                <div className="hidden mq800:flex items-center bg-transparent">
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <FaTimes className="text-[24px] text-black bg-transparent" />
                        ) : (
                            <FaBars className="text-[24px] text-black bg-transparent" />
                        )}
                    </button>
                </div>


                {isOpen && (
                    <div className="absolute top-12 right-0 w-48 bg-white shadow-lg rounded-lg z-50">
                        <nav className="flex flex-col gap-4 p-4 text-gray-1100 font-manrope">
                            <a
                                href="#home"
                                className="font-bold text-gray-1200 no-underline"
                                onClick={() => handleTabClick("Home")}
                            >
                                Home
                            </a>
                            <a
                                href="#shop"
                                className="font-bold text-gray-1200 no-underline"
                                onClick={() => handleTabClick("Shop")}
                            >
                                Shop
                            </a>
                            <a
                                href="#about"
                                className="font-bold text-gray-1200 no-underline"
                                onClick={() => handleTabClick("About")}
                            >
                                About
                            </a>
                            <a
                                href="/contact-us"
                                className="font-bold text-gray-1200 no-underline"
                                onClick={() => handleTabClick("Contact")}
                            >
                                Contact
                            </a>
                            <div className="flex gap-5 mt-4">
                                <a href="/">
                                    <FaSearch className="text-[20px] text-gray-1200" />
                                </a>
                                <a href="/">
                                    <FaShoppingCart className="text-[20px] text-gray-1200" />
                                </a>
                                <a href="/">
                                    <FaUser className="text-[20px] text-gray-1200" />
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </header>
        </div>
    );
};

export default ProfileNavbar;
