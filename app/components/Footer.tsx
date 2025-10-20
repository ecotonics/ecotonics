import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='relative px-6 lg:px-24 pb-24 bg-primary'>
                {/* <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12'>
                    <div className='bg-[url("/images/graphic.png")] bg-cover bg-center text-white rounded-3xl px-6 py-12 flex flex-col lg:flex-row justify-between items-center shadow-xl'>
                        <p className='text-2xl lg:text-5xl font-semibold text-center leading-snug'>
                            Contact us to see how our solar solutions can power your home or business and save you money.
                        </p>
                    </div>
                </div> */}

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 pt-24 pb-24 border-b border-gray-400'>
                    <div>
                        <div>
                            <h1 className='text-white font-bold text-2xl lg:text-4xl'>ecotonics</h1>
                            <p className='text-white mt-6'>What began as a simple idea grew into a mission—to harness nature&apos;s most abundant resources, wind and sunlight, to power a brighter tomorrow.</p>
                            <p className='text-white mt-6'>5B, Sri, Kamarajar Rd, Alamelu Nagar, Coimbatore, Tamil Nadu 641015</p>
                        </div>
                    </div>
                    <div className='lg:flex justify-end'>
                        <div>
                            <p className='font-bold text-white text-lg'>SERVICES</p>
                            <p className='mt-6 text-white'>Home Automation</p>
                            <p className='mt-3 text-white'>Industrial Automation</p>
                            <p className='mt-3 text-white'>Power Solutions</p>
                            <p className='mt-3 text-white'>Security Systems</p>
                        </div>
                    </div>
                    <div className='lg:flex justify-end'>
                        <div>
                            <p className='font-bold text-white text-lg'>CONTACT</p>
                            <p className='mt-6 text-white'>+91 7510 348 448</p>
                            <p className='mt-3 text-white'>info@ecotonics.in</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className='text-white pt-12 text-center'>© 2025 ecotonic automation solutions – All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer
