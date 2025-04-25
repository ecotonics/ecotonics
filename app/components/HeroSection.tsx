"use client"

import React from 'react';
import Navbar from './Navbar';

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen p-3 md:p-10">
            <div className="relative rounded-3xl h-full py-5 px-6 md:px-20 overflow-hidden border-2 border-gray-300">
                
                {/* Decorative Images */}
                <img src="/images/top-left.png" alt="Top Left Decoration" className="absolute top-0 left-0 pointer-events-none"/>
                <img src="/images/bottom-right.png" alt="Bottom Right Decoration" className="absolute bottom-0 right-0 pointer-events-none"/>

                <div className="relative z-10 flex flex-col justify-between h-full">
                    <Navbar />

                    <div className="flex-1 flex items-center justify-center text-center px-4">
                        <div>
                            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
                                SMART SPACES <br /> TAILORED FOR YOU
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;