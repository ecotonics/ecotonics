import React from 'react'

const HowWeWork = () => {
    return (
        <div className='p-5 lg:p-10'>
            <p className='text-center pb-10 font-bold text-3xl lg:text-5xl'>
                How <span className='text-primary'>We</span> Work
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

                {/* ITEM 1 */}
                <div className='flex justify-center'>
                    <div className='w-60 text-center'>
                        <div className='rounded-full border border-gray-400 w-48 h-48 mx-auto flex items-center justify-center'>
                            <img src="images/Designing.png" className="w-32 h-32 object-contain" alt="" />
                        </div>
                        <p className='font-bold my-3 text-2xl'>Designing</p>
                        <p className='text-lg'>We create eco friendly solutions that combine innovation and sustainability</p>
                    </div>
                </div>

                {/* ITEM 2 */}
                <div className='flex justify-center lg:mt-48'>
                    <div className='w-60 text-center'>
                        <div className='rounded-full border border-gray-400 w-48 h-48 mx-auto flex items-center justify-center'>
                            <img src="images/Designing.png" className="w-32 h-32 object-contain" alt="" />
                        </div>
                        <p className='font-bold my-3 text-2xl'>Designing</p>
                        <p className='text-lg'>We create eco friendly solutions that combine innovation and sustainability</p>
                    </div>
                </div>

                {/* ITEM 3 */}
                <div className='flex justify-center'>
                    <div className='w-60 text-center'>
                        <div className='rounded-full border border-gray-400 w-48 h-48 mx-auto flex items-center justify-center'>
                            <img src="images/Designing.png" className="w-32 h-32 object-contain" alt="" />
                        </div>
                        <p className='font-bold my-3 text-2xl'>Designing</p>
                        <p className='text-lg'>We create eco friendly solutions that combine innovation and sustainability</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HowWeWork
