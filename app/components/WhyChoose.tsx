import React from 'react'

const WhyChoose = () => {
    return (
        <div className="overflow-hidden px-5 md:px-24">
            <div className='border-t-1 border-gray-300 my-24 pt-24 text-center'>
                <p className='font-bold text-[#485c11]'>Specs</p>
                <h1 className='my-12 text-5xl font-bold'>Why Choose Ecotonics?</h1>
                <p className='text-[#485c11]'>You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to streamline your business.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-center'>
                <div className='border-t-1 border-gray-300 pt-10'>
                    <p className='font-medium text-gray-500 text-7xl'>01</p>
                    <p className='py-5'>Get Started</p>
                    <p className='text-[#485c11]'>With our intuitive setup, you’re up and running in minutes.</p>
                </div>
                <div className='border-t-1 border-gray-300 pt-10'>
                    <p className='font-medium text-gray-500 text-7xl'>02</p>
                    <p className='py-5'>Customize and Configure</p>
                    <p className='text-[#485c11]'>Adapt Area to your specific requirements and preferences.</p>
                </div>
                <div className='border-t-1 border-gray-300 pt-10'>
                    <p className='font-medium text-gray-500 text-7xl'>03</p>
                    <p className='py-5'>Grow Your Business</p>
                    <p className='text-[#485c11]'>Make informed decisions to exceed your goals.</p>
                </div>
            </div>

            <div className="w-full mt-24 h-140 rounded-3xl overflow-hidden">
                <img src="/images/banner.avif" alt="Banner" className="w-full h-full object-cover" />
            </div>
        </div>
    )
}

export default WhyChoose