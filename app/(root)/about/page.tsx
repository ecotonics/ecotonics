import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React from 'react'


const page = () => {
    return (
        <>
            <div className="w-full px-3 pt-3 md:px-10 md:pt-10">
                <div className="rounded-3xl py-2 px-6 md:px-20 overflow-hidden border-2 border-gray-300 mb-5 md:mb-10">
                    <Navbar/>
                </div>

                <div className="border-2 border-gray-300 rounded-3xl p-5 mb-5 md:mb-10">
                    <div className="px-5 py-10">
                        {/* About Us Content */}
                        <h3 className="font-extrabold text-xl md:text-2xl">ABOUT US</h3>

                        <p className="text-lg md:text-xl mt-10">
                            As a leading provider of automation solutions, we cater to both industrial and domestic clients with innovative,
                            future-ready technologies. Our comprehensive range of services includes end-to-end project implementation, 
                            proactive maintenance, and expert consultation tailored to your unique needs. 
                            By partnering with us, you unlock a new level of convenience, efficiency, 
                            and control bringing the luxury of smart living and intelligent operations to your fingertips, 
                            all through reliable and cost-effective automation systems
                        </p>
                    </div>
                </div>

                <div className="border-2 border-gray-300 rounded-3xl p-5 mb-5 md:mb-10">
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className="mx-5 px-5 my-10 border-r">
                            {/* About Us Content */}
                            <h3 className="font-extrabold text-xl md:text-2xl">OUR VISION</h3>

                            <p className="text-lg md:text-xl mt-10">
                                As a leading provider of automation solutions, we cater to both industrial and domestic clients with innovative,
                                future-ready technologies. Our comprehensive range of services includes end-to-end project implementation, 
                                proactive maintenance, and expert consultation tailored to your unique needs. 
                                By partnering with us, you unlock a new level of convenience, efficiency, 
                                and control bringing the luxury of smart living and intelligent operations to your fingertips, 
                                all through reliable and cost-effective automation systems
                            </p>
                        </div>

                        <div className="mx-5 px-5 my-10">
                            {/* About Us Content */}
                            <h3 className="font-extrabold text-xl md:text-2xl">OUR MISSION</h3>

                            <p className="text-lg md:text-xl mt-10">
                                As a leading provider of automation solutions, we cater to both industrial and domestic clients with innovative,
                                future-ready technologies. Our comprehensive range of services includes end-to-end project implementation, 
                                proactive maintenance, and expert consultation tailored to your unique needs. 
                                By partnering with us, you unlock a new level of convenience, efficiency, 
                                and control bringing the luxury of smart living and intelligent operations to your fingertips, 
                                all through reliable and cost-effective automation systems
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page