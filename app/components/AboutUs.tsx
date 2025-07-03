"use client";

import React from 'react';

const AboutUs = () => {
    return (
        <div className="overflow-hidden px-5 md:px-24 mt-24">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='border-t-1 border-gray-300'>
                    <h1 className='text-5xl pt-10'>See the Big Picture</h1>

                    <div className='my-5 pt-5 border-t-1 border-gray-300 flex'>
                        <p className='text-[#485c11] pr-5 font-bold'>01</p>
                        <p>Spot Trends in Seconds: No more digging through numbers.</p>
                    </div>
                    <div className='my-5 pt-5 border-t-1 border-gray-300 flex'>
                        <p className='text-[#485c11] pr-5 font-bold'>02</p>
                        <p>Get Everyone on the Same Page: Share easy-to-understand reports with your team. </p>
                    </div>
                    <div className='my-5 pt-5 border-t-1 border-gray-300 flex'>
                        <p className='text-[#485c11] pr-5 font-bold'>03</p>
                        <p>Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.</p>
                    </div>
                    <div className='my-5 pt-5 border-t-1 border-gray-300 flex'>
                        <p className='text-[#485c11] pr-5 font-bold'>04</p>
                        <p>Your Global Snapshot: Get a quick, clear overview of your entire operation.</p>
                    </div>

                    <div className='mt-10 flex justify-center md:block'>
                        <button className='bg-[#485c11] text-white px-5 py-2 rounded-3xl'> Discover More </button>
                    </div>
                </div>
                <div className="w-full h-120 rounded-3xl overflow-hidden">
                    <img src="/images/banner.avif" alt="Banner" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;