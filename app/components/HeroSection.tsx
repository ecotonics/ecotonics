'use client';

import React from 'react';
import Navbar from './Navbar';
import Header from './Header';

const HeroSection = () => {
    return (
        <>
            {/* Fixed Navbar */}
            <Navbar />

            {/* Scrollable Content */}
            <Header />

            <div className="w-full flex flex-col items-center justify-center my-32 md:my-20 p-5 md:p-0">
                {/* Text: Connect + Beyond */}
                <div className="text-[70px] md:text-[100px] font-medium w-full flex flex-col md:flex-row md:justify-center text-black leading-none md:leading-[1.1]">
                    <p className="text-left md:text-center w-full md:w-auto font-bold md:font-medium">Connect</p>
                    <p className="text-right md:text-center w-full md:w-auto font-bold md:font-medium">Beyond.</p>
                </div>

                {/* Screen Image Section */}
                <div className="w-full mt-48 md:mt-64">
                    <div className="h-70 md:h-90 bg-[#8e9c78] mx-4 md:mx-48 rounded-3xl flex items-center justify-center relative">
                        <div className='hidden lg:block w-[90%] md:w-[900px] absolute bottom-0'>
                            <img src="/images/system-screen.png" className="" alt="" />
                        </div>
                        <div className='lg:hidden w-full absolute bottom-0'>
                            <img src="/images/mobile-screen.png" className="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;