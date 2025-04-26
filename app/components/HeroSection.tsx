"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen p-3 md:p-10">
            <div className="relative rounded-3xl h-full py-5 px-6 md:px-20 overflow-hidden border-2 border-gray-300 bg-[#2c4c9c] text-white">

                {/* Radial Gradient Overlays */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute top-0 left-0 w-80 h-80 bg-blue-400 rounded-full blur-3xl pointer-events-none"
                />
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl pointer-events-none"
                />

                {/* Decorative Images */}
                <motion.img 
                    src="/images/top-left.png" 
                    alt="Top Left Decoration" 
                    className="absolute top-0 left-0 pointer-events-none"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                />
                <motion.img 
                    src="/images/bottom-right.png" 
                    alt="Bottom Right Decoration" 
                    className="absolute bottom-0 right-0 pointer-events-none"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                />

                <div className="relative z-10 flex flex-col justify-between h-full">
                    <Navbar />

                    <div className="flex-1 flex items-center justify-center text-center px-4">
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
                                SMART SPACES <br /> TAILORED FOR YOU
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;