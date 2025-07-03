import React from 'react';
import Image from 'next/image';

const WhatWeDo = () => {
    return (
        <div className="overflow-hidden px-5 md:px-24">
            <div className='border-t-1 border-gray-300 py-24'>
                <p className='font-bold text-[#485c11]'>Benefits</p>
                <h1 className='my-12 text-5xl font-bold'>We’ve cracked the code.</h1>
                <p className='text-[#485c11]'>Area provides real insights, without the data overload.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                <div className='border-t-1 border-gray-300 pt-10'>
                    <img src="images/2.svg" alt="" width={24}/>
                    <p className='py-5 text-xl font-medium'>Amplify Insights</p>
                    <p className='text-[#485c11]'>Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.</p>
                </div>
                <div className='border-t-1 border-gray-300 pt-10'>
                    <img src="images/2.svg" alt="" width={24}/>
                    <p className='py-5 text-xl font-medium'>Control Your Global Presence</p>
                    <p className='text-[#485c11]'>Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.</p>
                </div>
                <div className='border-t-1 border-gray-300 pt-10'>
                    <img src="images/2.svg" alt="" width={24}/>
                    <p className='py-5 text-xl font-medium'>Remove Language Barriers</p>
                    <p className='text-[#485c11]'>Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.</p>
                </div>
                <div className='border-t-1 border-gray-300 pt-10'>
                    <img src="images/2.svg" alt="" width={24}/>
                    <p className='py-5 text-xl font-medium'>Visualize Growth</p>
                    <p className='text-[#485c11]'>Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.</p>
                </div>
            </div>

            <div className="w-full mt-24 h-140 rounded-3xl overflow-hidden">
                <img src="/images/banner.avif" alt="Banner" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default WhatWeDo;