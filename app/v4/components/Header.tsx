import React from 'react'

const Header = () => {
    return (
        <>
            <div className=''>
                <div className='header p-6 lg:py-6 lg:px-10 flex justify-between items-center'>
                    <h1 className='font-bold text-2xl md:text-2xl lg:text-4xl text-secondary'>ecotonics</h1>
                    <button className='text-white bg-primary rounded-full px-6 py-2'>Connect.</button>
                </div>
            </div>
        </>
    )
}

export default Header