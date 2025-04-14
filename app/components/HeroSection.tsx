import React from 'react'

const HeroSection = () => {
    return (
        <>
            <div className="relative w-full h-screen p-3">
                <div className="bg-[url('@/app/images/banner.png')] bg-cover bg-center bg-no-repeat rounded-3xl h-full py-5 px-48">
                    <div className="flex flex-col justify-between h-full">

                        {/* Navbar */}
                        <div className="flex justify-between items-center px-10 py-5 text-white rounded-3x">
                            <div className="text-xl font-extrabold">ECOTONICS</div>

                            <div className="hidden md:flex space-x-12 text-sm font-bold">
                                <a href="#" className="hover:text-gray-500 transition-colors duration-300 ease-in-out">HOME</a>
                                <a href="#" className="hover:text-gray-500 transition-colors duration-300 ease-in-out">ABOUT US</a>
                                <a href="#" className="hover:text-gray-500 transition-colors duration-300 ease-in-out">SERVICES</a>
                                <a href="#" className="hover:text-gray-500 transition-colors duration-300 ease-in-out">PROJECTS</a>
                            </div>

                            <div>
                                <button className="text-sm bg-white text-black font-bold px-8 py-2 rounded-2xl hover:bg-gray-400 transition">
                                    CONTACT US
                                </button>
                            </div>
                        </div>

                        {/* Automation Section at the Bottom */}
                        {/* <div className="flex justify-between items-center gap-10 mt-10">
                            <div className="backdrop-blur-sm w-full text-center rounded-3xl py-3 bg-black/40">
                                <h1 className="font-bold text-xl text-white">NETWORK</h1>
                            </div>
                            <div className="backdrop-blur-sm w-full text-center rounded-3xl py-3 bg-black/40">
                                <h1 className="font-bold text-xl text-white">AUTOMATION</h1>
                            </div>
                            <div className="backdrop-blur-sm w-full text-center rounded-3xl py-3 bg-black/40">
                                <h1 className="font-bold text-xl text-white">CCTV</h1>
                            </div>
                            <div className="backdrop-blur-sm w-full text-center rounded-3xl py-3 bg-black/40">
                                <h1 className="font-bold text-xl text-white">SOLAR</h1>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection