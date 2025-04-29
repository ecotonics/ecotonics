import React from 'react';
import Image from 'next/image';

const WhatWeDo = () => {
    return (
        <div className="overflow-hidden p-3 md:px-10 md:pb-10">
            <div className="border-2 border-gray-300 rounded-3xl p-5">
                <div className="px-5 py-10">
                    <h3 className="font-extrabold text-xl md:text-2xl">WHAT WE DO</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Harmonious Homes */}
                        <div>
                            <div className="border-b-2 md:border-b-0 md:border-r-2 border-gray-300 py-10 md:pr-10 md:flex">
                                <div className="w-24 md:w-48 lg:w-64 flex justify-center items-center mb-10 md:mb-0">
                                    <Image src="/images/1.svg" alt="Harmonious Homes" width={200} height={200} />
                                </div>
                                <div className="md:ml-10">
                                    <h1 className="text-lg md:text-xl font-extrabold mb-5">HARMONIOUS HOMES</h1>
                                    <p className="text-lg md:text-xl">
                                        Step into a smart home where comfort and security are at your fingertips.
                                        Bespoqs residential solutions make your home truly smart, adapting to your needs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Intelligent Offices */}
                        <div>
                            <div className="border-b-2 md:border-b-0 border-gray-300 py-10 md:pl-10 md:flex">
                                <div className="w-24 md:w-48 lg:w-64 flex justify-center items-center mb-10 md:mb-0">
                                    <Image src="/images/2.svg" alt="Intelligent Offices" width={200} height={200} />
                                </div>
                                <div className="md:ml-10">
                                    <h1 className="text-lg md:text-xl font-extrabold mb-5">INTELLIGENT OFFICES</h1>
                                    <p className="text-lg md:text-xl">
                                        Boost productivity and efficiency in your office spaces. Bespoq enhances the workplace
                                        experience with intelligent systems for access, lighting, HVAC, and security.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Healing Spaces */}
                        <div>
                            <div className="border-b-2 md:border-b-0 md:border-r-2 border-gray-300 py-10 md:pr-10 md:flex">
                                <div className="w-24 md:w-48 lg:w-64 flex justify-center items-center mb-10 md:mb-0">
                                    <Image src="/images/3.svg" alt="Healing Spaces" width={200} height={200} />
                                </div>
                                <div className="md:ml-10">
                                    <h1 className="text-lg md:text-xl font-extrabold mb-5">HEALING SPACES</h1>
                                    <p className="text-lg md:text-xl">
                                        In the healthcare sector, Bespoq brings intelligence to hospitals. Our smart solutions
                                        enhance patient experience, optimize energy efficiency, and empower healthcare professionals.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Smart Retreats */}
                        <div>
                            <div className="pt-10 md:pl-10 md:flex">
                                <div className="w-24 md:w-48 lg:w-64 flex justify-center items-center mb-10 md:mb-0">
                                    <Image src="/images/4.svg" alt="Smart Retreats" width={200} height={200} />
                                </div>
                                <div className="md:ml-10">
                                    <h1 className="text-lg md:text-xl font-extrabold mb-5">SMART RETREATS</h1>
                                    <p className="text-lg md:text-xl">
                                        Whether its a hotel, resort, or homestay, elevate your hospitality spaces with Bespoqs
                                        smart automations, combining luxury and technology to create an atmosphere of refined comfort.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;