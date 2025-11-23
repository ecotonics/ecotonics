import React from 'react'

const Hero = () => {
    return (
        <div className="w-full lg:h-screen p-5 lg:p-10 pt-20 lg:pt-10">
            <div className='bg-gradient-to-br from-[#437b9e] to-[#11354d] h-full w-full rounded-3xl flex justify-center items-center'>
                <div className='p-10 py-48 lg:py-0 lg:px-48'>
                    <div className='space-y-10 lg:space-y-5'>
                        <p className='text-4xl lg:text-9xl font-bold text-white text-center'>ECOTONICS</p>
                        <p className='text-2xl lg:text-4xl font-bold text-white text-center'>SMART AUTOMATION FOR SUSTAINABLE FEATURE</p>
                        <p className='text-2xl lg:text-4xl font-bold text-white text-center'>Unlock power of smart living</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero