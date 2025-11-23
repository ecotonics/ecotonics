import React from 'react'

const About = () => {
    return (
        <div className="px-6 lg:px-24 py-12 lg:py-24">
            <div>
                <p className="text-secondary font-bold text-4xl lg:text-7xl text-center leading-snug">
                    We create eco-friendly solutions that combine innovation and sustainability
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 lg:mt-24 gap-6">
                <div className="h-100 bg-[url('/images/graphic.png')] bg-cover bg-center rounded-3xl flex flex-col justify-between">
                    <div className="p-6">
                        <img src="/images/home.png" alt="Home Icon" className="w-20" />
                    </div>

                    <p className="text-white font-bold px-6 text-4xl lg:text-3xl flex items-center leading-normal">
                        Empowering your homes to back you up
                    </p>

                    <div className="flex justify-between items-end p-6">
                        <p className="text-white font-bold">SINCE 2020</p>
                        <p className="text-primary bg-white rounded-3xl px-3 py-1 font-bold cursor-pointer">
                            KNOW MORE
                        </p>
                    </div>
                </div>

                <div className="h-100 bg-[url('/images/logo-graphic.png')] bg-cover bg-center rounded-3xl" />

                <div className="h-100 bg-[url('/images/graphic.png')] bg-cover bg-center rounded-3xl flex flex-col justify-between p-6">
                    <div className="flex justify-end p-6">
                        <img src="/images/hand.png" alt="Hand Icon" className="w-20" />
                    </div>

                    <div className="text-white mt-auto">
                        <p className="font-bold text-3xl lg:text-3xl">Ecotonics Promise</p>
                        <p className="font-bold mt-6 text-xl">
                            Unbeatable solar quality, zero investment, guaranteed savings else we&apos;ll pay you back
                        </p>
                        <p className="font-bold mt-6">— the ecotonics promise.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
