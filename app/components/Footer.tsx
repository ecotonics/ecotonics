import React from 'react'
import { PhoneCall, Mail, MapPin, Facebook, Instagram, MessageCircle,} from 'lucide-react'

const Footer = () => {
    return (
        <div className="flex flex-col justify-end">
            <div className="relative mt-32">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-secondary w-[90%] lg:w-[70%] rounded-3xl shadow-xl z-10">
                    <div className=''>
                        <div className='p-5 py-10 lg:p-10'>
                            <h1 className='text-white font-bold text-3xl lg:text-5xl'>Get In Touch</h1>
                            <p className='mt-5 text-lg text-white'>We create eco friendly solutions that combine innovation and sustainability</p>
                        </div>
                        {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10'>
                            <div className='p-5 lg:p-10 space-y-5'>
                                <div className='flex items-center'>
                                    <div className='bg-white rounded-full p-2 h-8 w-8 flex justify-center items-center'>
                                        <PhoneCall className='text-primary h-6 w-4'/>
                                    </div>
                                    <p className='text-white text-xl font-bold ml-3'>+91 7510 348 448</p>
                                </div>
                                <div className='flex items-center'>
                                    <div className='bg-white rounded-full p-2 h-8 w-8 flex justify-center items-center'>
                                        <Mail className='text-primary h-6 w-4'/>
                                    </div>
                                    <p className='text-white text-xl font-bold ml-3'>info@ecotonics.in</p>
                                </div>
                                <div className='flex items-center'>
                                    <div className='bg-white rounded-full p-2 h-8 w-8 flex justify-center items-center'>
                                        <MapPin className='text-primary h-6 w-4'/>
                                    </div>
                                    <p className='text-white text-xl font-bold ml-3'>+91 7510 348 448</p>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="bg-primary p-5 lg:p-10 pt-24 lg:pt-28">
                    <div className="">
                        <div>
                            <ul className='flex justify-center space-x-10 text-white font-bold text-2xl mt-5'>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Cotact Us</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='flex justify-center space-x-10 text-white font-bold text-2xl mt-16'>
                                <li>
                                    <Facebook/>
                                </li>
                                <li>
                                    <Instagram/>
                                </li>
                                <li>
                                    <MessageCircle/>
                                </li>
                            </ul>
                        </div>
                        <div className='mt-16'>
                            <p className='text-white text-center text-lg'>Copyright 2025 Ecotonics. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer