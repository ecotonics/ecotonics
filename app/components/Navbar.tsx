'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <div className="flex md:justify-center items-center md:px-10 md:py-5">

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-8 text-sm font-bold bg-white/30 backdrop-blur-md py-3 px-10 rounded-3xl">
                    <Link href="/" className="relative group">
                        <span className="transition">Home</span>
                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/solutions" className="relative group">
                        <span className="transition">Solutions</span>
                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/projects" className="relative group">
                        <span className="transition">Projects</span>
                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/partnership" className="relative group">
                        <span className="transition">Pertnership</span>
                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex justify-between items-center w-full rounded-b-2xl shadow-md bg-white px-5 py-3">
                    <Link href="/" className="text-2xl font-bold text-black hover:text-gray-800 transition-all duration-300">
                        <p className='text-2xl'>Ecotonics</p>
                    </Link>
                    <button onClick={() => setMenuOpen(true)} className="focus:outline-none" aria-label="Open menu">
                        <Menu size={20} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-x-0 inset-y-0 bg-white flex flex-col justify-center items-center z-50 p-8 transition-all duration-500 ease-in-out transform ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
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
        </div>
    );
};

export default Navbar;