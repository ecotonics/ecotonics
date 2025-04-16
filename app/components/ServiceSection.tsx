import React from 'react';

const ServiceSection = () => {

    return (
        <div className="overflow-hidden p-3 md:px-10 md:pb-10">
            <div className="rounded-3xl p-2 md:p-5 bg-gradient-to-b from-gray-100 to-white">
                <div className="pt-10">
                    {/* Service Section Content */}
                    <div className='text-center'>
                        <h3 className="inline-block font-extrabold text-gray-800 text-sm rounded-3xl border border-gray-300 px-3 py-1">
                            WHAT WE DO
                        </h3>
                        <p className='py-10 text-3xl md:text-5xl'>We Transform Spaces <br/>with Smart Automation.</p>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {/* Service Items */}
                        <div className="md:flex md:justify-center md:text-start text-center items-center border-2 border-gray-300 rounded-3xl bg-white px-4 py-6 text-gray-800">
                            <div className='p-3'>
                                <img src="/images/automation.png" alt="Automation" className="mb-2 w-64" />
                            </div>
                            <div className='p-3'>
                                <h1 className='font-bold mb-5'>HARMONIOUS HOMES</h1>
                                <p>Step into a smart home where comfort and security are at your fingertips. Bespoq's residential solutions make your home truly smart, adapting to your needs.</p>
                            </div>
                        </div>

                        <div className="md:flex md:justify-center md:text-start text-center items-center border-2 border-gray-300 rounded-3xl bg-white px-4 py-6 text-gray-800">
                            <div className='p-3'>
                                <img src="/images/automation.png" alt="Automation" className="mb-2 w-64" />
                            </div>
                            <div className='p-3'>
                                <h1 className='font-bold mb-5'>INTELLIGENT OFFICES</h1>
                                <p>Step into a smart home where comfort and security are at your fingertips. Bespoq's residential solutions make your home truly smart, adapting to your needs.</p>
                            </div>
                        </div>

                        <div className="md:flex md:justify-center md:text-start text-center items-center border-2 border-gray-300 rounded-3xl bg-white px-4 py-6 text-gray-800">
                            <div className='p-5'>
                                <img src="/images/automation.png" alt="Automation" className="mb-2 w-64" />
                            </div>
                            <div className='p-5'>
                                <h1 className='font-bold mb-5'>HEALING SPACES</h1>
                                <p>Step into a smart home where comfort and security are at your fingertips. Bespoq's residential solutions make your home truly smart, adapting to your needs.</p>
                            </div>
                        </div>

                        <div className="md:flex md:justify-center md:text-start text-center items-center border-2 border-gray-300 rounded-3xl bg-white px-4 py-6 text-gray-800">
                            <div className='p-5'>
                                <img src="/images/automation.png" alt="Automation" className="mb-2 w-64" />
                            </div>
                            <div className='p-5'>
                                <h1 className='font-bold mb-5'>SMART RETREATS</h1>
                                <p>Step into a smart home where comfort and security are at your fingertips. Bespoq's residential solutions make your home truly smart, adapting to your needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;