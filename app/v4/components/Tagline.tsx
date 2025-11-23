import React from 'react'

const Tagline = () => {
    return (
        <>
            <div className="bg-primary px-6 lg:px-24 text-center">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <img src="/images/half.png" alt="" className='order-2 lg:order-1' />
                    <div className="order-1 lg:order-2 flex flex-col justify-center text-white text-2xl lg:text-5xl font-semibold space-y-4 my-12 lg:my-0">
                        <p>We don&apos;t follow the uniform</p>
                        <p>Customisation is the key</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tagline