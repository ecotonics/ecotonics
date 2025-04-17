"use client"

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="relative w-full h-screen p-3 md:p-10">
        <div className="relative bg-[url('/images/element.png')] bg-cover bg-center bg-no-repeat rounded-3xl h-full py-5 px-6 md:px-20 overflow-hidden border-2 border-gray-300">
          <div className="relative z-10 flex flex-col justify-between h-full">
            {/* Header Section */}
            <div className="flex justify-between items-center px-4 md:px-10 py-5 text-black border-b">
              <div className="text-xl font-extrabold">ECOTONICS</div>
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8 text-sm font-bold">
                <a href="#" className="hover:text-gray-300 transition">HOME</a>
                <a href="#" className="hover:text-gray-300 transition">ABOUT US</a>
                <a href="#" className="hover:text-gray-300 transition">SOLUTIONS</a>
                <a href="#" className="hover:text-gray-300 transition">PROJECTS</a>
              </div>
              {/* Desktop Contact Button */}
              <div className="hidden md:block">
                <button className="text-sm bg-black text-white font-bold px-6 py-2 rounded-2xl hover:bg-gray-600 transition">
                  LET&apos;S TALK
                </button>
              </div>
              {/* Mobile App Icon */}
              <div className="md:hidden">
                <button onClick={() => setMenuOpen(true)} className="focus:outline-none" aria-label="Open menu">
                  <Menu size={28} />
                </button>
              </div>
            </div>

            {/* Mobile Fullscreen Nav with Enhanced Transitions */}
            <div className={`fixed inset-x-3 inset-y-3 bg-white border-2 border-gray-300  flex flex-col justify-center items-center z-50 rounded-3xl p-8 transition-all duration-500 ease-in-out transform ${
              menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}>
              <button 
                onClick={() => setMenuOpen(false)} 
                className="absolute top-6 right-6 text-black focus:outline-none transition-transform duration-300 hover:rotate-90"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
              <nav className="flex flex-col space-y-8 text-black text-xl font-bold text-center">
                <a href="#" className="hover:text-gray-600 transition-all duration-300 transform hover:translate-x-1">HOME</a>
                <a href="#" className="hover:text-gray-600 transition-all duration-300 transform hover:translate-x-1">ABOUT US</a>
                <a href="#" className="hover:text-gray-600 transition-all duration-300 transform hover:translate-x-1">SERVICES</a>
                <a href="#" className="hover:text-gray-600 transition-all duration-300 transform hover:translate-x-1">PROJECTS</a>
              </nav>
              <div className="mt-10">
                <button className="text-sm bg-black text-white font-bold px-6 py-2 rounded-2xl hover:bg-gray-900 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                  LET&apos;S TALK
                </button>
              </div>
            </div>

            {/* Hero Center Content */}
            <div className="flex-1 flex items-center justify-center text-black text-center px-4">
              <div>
                <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight text-gray-800">
                  SMART SPACES <br/> TAILORED FOR YOU
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;