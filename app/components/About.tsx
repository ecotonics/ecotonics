import React from 'react'

const About = () => {
    return (
        <div className="p-5 lg:p-10">
            <div className='rounded-3xl text-center lg:text-left border border-gray-300 p-5 lg:p-10'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-15 lg:gap-10">
                    <div className='grid grid-cols-3 gap-5 lg:gap-10'>
                        <div className='h-90 rounded-full overflow-hidden'>
                            <img src="images/about-1.jpg" className='w-full h-full object-cover rounded-full' alt="" />
                        </div>
                        <div className='h-90 rounded-full overflow-hidden mt-24'>
                            <img src="images/about-2.jpg" className='w-full h-full object-cover rounded-full' alt="" />
                        </div>
                        <div className='h-90 rounded-full overflow-hidden'>
                            <img src="images/about-4.jpg" className='w-full h-full object-cover rounded-full' alt="" />
                        </div>
                    </div>
                    <div className='lg:col-span-2 flex items-center'>
                        <div className='lg:ml-24'>
                            <p className='text-3xl lg:text-5xl font-medium'>We are <span className='text-primary'>ecotonics</span></p>
                            <p className='text-lg lg:text-2xl mt-5 font-medium leading-loose'>
                                We create eco friendly solutions that combine innovation and and sustainability 
                                <br /> 
                                we are a leading automation solutions provider dedicated to engineering innovative technologies that not only optimize your operations for maximum efficiencybut also significantly reduce your enviornmental footprint.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
