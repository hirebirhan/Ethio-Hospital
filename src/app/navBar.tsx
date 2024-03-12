'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="fixed w-full top-0 z-50 shadow-md">
            <nav className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Image src="/ethiotebib.jpg" alt="Ethio-Tebib logo" width={55} height={44} />
                            <h1 className="ml-2">Ethio-Tebib</h1>
                        </div>
                        <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
                            {/* Desktop Menu Items */}
                            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium">HOME</Link>
                            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium">ABOUT</Link>
                            <Link href="/OurSpecialists" className="px-3 py-2 rounded-md text-sm font-medium">DOCTORS</Link>
                            <Link href="/services" className="px-3 py-2 rounded-md text-sm font-medium">SERVICES</Link>
                            <Link href="/blog" className="px-3 py-2 rounded-md text-sm font-medium">BLOG</Link>
                            <Link href="/Contact" className="px-3 py-2 rounded-md text-sm font-medium">CONTACT</Link>
                            <button className="bg-[#155e75] text-white px-4 py-2 rounded-md text-sm font-medium shadow-md transition-all">
                                GET APPOINTMENT
                            </button>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            >
                                {/* Icon for menu open/close */}
                                {isOpen ? (
                                    // Change this SVG to any "close" icon of your choice
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    // Change this SVG to any "hamburger" icon of your choice
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="fixed w-full top-0 z-50 shadow-md">
                    <nav className="bg-white">
                        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>HOME</Link>
                                <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>  ABOUT</Link>
                                <Link href="/OurSpecialists" className="block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}> DOCTORS</Link>
                                <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>SERVICES</Link>
                                <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>BLOG</Link>
                                <Link href="/Contact" className="block px-3 py-2 rounded-md text-base font-medium" onClick={closeMenu}>CONTACT</Link>
                                <button className="block w-full bg-[#155e75] text-white px-4 py-2 rounded-md text-sm font-medium shadow-md transition-all text-center" onClick={closeMenu}>
                                    GET APPOINTMENT
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;
