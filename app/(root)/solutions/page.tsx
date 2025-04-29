"use client"

import React from 'react'
import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const Page = () => {
    return (
        <>
            {/* Outer Container */}
            <div className="w-full px-3 pt-3 md:px-10 md:pt-10">
                
                {/* Navbar */}
                <div className="rounded-3xl py-2 px-6 md:px-20 overflow-hidden border-2 border-gray-300 mb-5 md:mb-10">
                    <Navbar />
                </div>

                {/* Main Content */}
                <div className="border-2 border-gray-300 rounded-3xl p-5 mb-5 md:mb-10 bg-white overflow-visible relative">
                    <div className="flex flex-col md:flex-row w-full px-5 py-10 relative">

                        {/* Vertical Text (Visible, Big, Black) */}
                        <div className="hidden md:flex items-center justify-center w-48 pr-4">
                            <div className="transform -rotate-90">
                                <h2 className="text-4xl font-extrabold text-black tracking-widest whitespace-nowrap">
                                    AUTOMATION IN
                                </h2>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="w-full md:w-auto space-y-16">
                            
                            {/* Home Automation */}
                            <div className="md:flex gap-10 md:items-center">
                                <div className='w-full lg:w-120 mb-10 md:mb-0'>
                                    <Image src="/images/1.svg" alt="" width={500} height={500} className='w-full h-auto'/>
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-xl md:text-2xl text-black">HOME AUTOMATION</h3>
                                    <p className="text-lg md:text-xl mt-6 text-gray-700">
                                        As a leading provider of automation solutions, we cater to both industrial and domestic clients with innovative,
                                        future-ready technologies. Our comprehensive range of services includes end-to-end project implementation, 
                                        proactive maintenance, and expert consultation tailored to your unique needs. 
                                        By partnering with us, you unlock a new level of convenience, efficiency, 
                                        and control—bringing the luxury of smart living and intelligent operations to your fingertips, 
                                        all through reliable and cost-effective automation systems.
                                    </p>
                                </div>
                            </div>

                            {/* Industrial Automation */}
                            <div className="md:flex gap-10 md:items-center">
                                <div className='w-full lg:w-120 mb-10 md:mb-0'>
                                    <Image src="/images/2.svg" alt="" width={500} height={500} className='w-full h-auto'/>
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-xl md:text-2xl text-black">HOME AUTOMATION</h3>
                                    <p className="text-lg md:text-xl mt-6 text-gray-700">
                                        As a leading provider of automation solutions, we cater to both industrial and domestic clients with innovative,
                                        future-ready technologies. Our comprehensive range of services includes end-to-end project implementation, 
                                        proactive maintenance, and expert consultation tailored to your unique needs. 
                                        By partnering with us, you unlock a new level of convenience, efficiency, 
                                        and control—bringing the luxury of smart living and intelligent operations to your fingertips, 
                                        all through reliable and cost-effective automation systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-2 border-gray-300 rounded-3xl p-5 mb-5 md:mb-10 bg-white overflow-visible relative">
                    <div className="flex flex-col md:flex-row w-full px-5 py-10 relative">

                        {/* Vertical Text (Visible, Big, Black) */}
                        <div className="hidden md:flex items-center justify-center w-48 pr-4">
                            <div className="transform -rotate-90">
                                <h2 className="text-4xl font-extrabold text-black tracking-widest whitespace-nowrap">
                                    CCTV & SECURITY
                                </h2>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="w-full md:w-auto space-y-16">
                            
                            {/* Home Automation */}
                            <div className="md:flex gap-10 md:items-center">
                                <div className='w-full lg:w-120 mb-10 md:mb-0'>
                                    <Image src="/images/3.svg" alt="" width={500} height={500} className='w-full h-auto'/>
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-xl md:text-2xl text-black">HOME AUTOMATION</h3>
                                    <p className="text-lg md:text-xl mt-6 text-gray-700">
                                        As a leading provider of automation solutions, we cater to both industrial and domestic clients with innovative,
                                        future-ready technologies. Our comprehensive range of services includes end-to-end project implementation, 
                                        proactive maintenance, and expert consultation tailored to your unique needs. 
                                        By partnering with us, you unlock a new level of convenience, efficiency, 
                                        and control—bringing the luxury of smart living and intelligent operations to your fingertips, 
                                        all through reliable and cost-effective automation systems.
                                    </p>
                                </div>
                            </div>

                            {/* Industrial Automation */}
                            <div className="md:flex gap-10 md:items-center">
                                <div className='w-full lg:w-120 mb-10 md:mb-0'>
                                    <Image src="/images/4.svg" alt="" width={500} height={500} className='w-full h-auto'/>
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-xl md:text-2xl text-black">HOME AUTOMATION</h3>
                                    <p className="text-lg md:text-xl mt-6 text-gray-700">
                                        As a leading provider of automation solutions, we cater to both industrial and domestic clients with innovative,
                                        future-ready technologies. Our comprehensive range of services includes end-to-end project implementation, 
                                        proactive maintenance, and expert consultation tailored to your unique needs. 
                                        By partnering with us, you unlock a new level of convenience, efficiency, 
                                        and control—bringing the luxury of smart living and intelligent operations to your fingertips, 
                                        all through reliable and cost-effective automation systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Page;