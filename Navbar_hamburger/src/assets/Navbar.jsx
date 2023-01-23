import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white py-4 px-6">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <a href="#" className="font-medium text-xl">Your Brand</a>
                </div>
                <button
                    className={`${isOpen ? "bg-white" : "bg-gray-800"} rounded-full focus:outline-none focus:shadow-outline-indigo p-2`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className={`${isOpen ? "hidden" : "block"} w-6 h-6 fill-current text-gray-500`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg className={`${isOpen ? "block" : "hidden"} w-6 h-6 fill-current text-gray-500`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} bg-gray-900 text-white py-4 px-6`}>
                <a href="#" className="block px-2 py-1 text-white font-medium rounded-md hover:bg-gray-800">Link 1</a>
                <a href="#" className="block px-2 py-1 text-white font-medium rounded-md hover:bg-gray-800">Link 2</a>
                <a href="#" className="block px-2 py-1 text-white font-medium rounded-md hover:bg-gray-800">Link 3</a>
            </div>
        </nav>
    );
};

export default Navbar;
