'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center px-4 md:px-10 py-5">
                <Link href='/' className="text-xl font-extrabold">ECOTONICS</Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-8 text-sm font-bold">
                    <Link href="/" className="relative group">
                        <span className="hover:text-gray-300 transition">HOME</span>
                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/solutions" className="relative group">
                        <span className="hover:text-gray-300 transition">SOLUTIONS</span>
                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/projects" className="relative group">
                        <span className="hover:text-gray-300 transition">PROJECTS</span>
                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>

                {/* Let's Talk Button */}
                <div className="hidden lg:block">
                    <Link href='/contact' className="text-sm bg-black text-white font-bold px-6 py-2 rounded-2xl hover:bg-gray-300 transition">
                      LET&apos;S TALK
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={() => setMenuOpen(true)} className="focus:outline-none" aria-label="Open menu">
                      <Menu size={28} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-x-3 inset-y-3 bg-white border-2 border-gray-300 flex flex-col justify-center items-center z-50 rounded-3xl p-8 transition-all duration-500 ease-in-out transform ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-black focus:outline-none transition-transform duration-300 hover:rotate-90" aria-label="Close menu">
                    <X size={32} />
                </button>

                <nav className="flex flex-col space-y-8 text-black text-xl font-bold text-center">
                    <Link href="/" className="hover:text-gray-800 transition-all duration-300 transform hover:translate-x-1">HOME</Link>
                    <Link href="/solutions" className="hover:text-gray-800 transition-all duration-300 transform hover:translate-x-1">SOLUTIONS</Link>
                    <Link href="/projects" className="hover:text-gray-800 transition-all duration-300 transform hover:translate-x-1">PROJECTS</Link>
                </nav>

                <div className="mt-10">
                    <Link href="/contact" className="text-sm bg-black text-white font-bold px-6 py-2 rounded-2xl hover:bg-gray-900 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                      LET&apos;S TALK
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;