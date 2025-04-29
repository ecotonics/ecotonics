"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <div className="relative w-full py-0 px-3 md:px-10 md:pb-10 overflow-hidden">
            <div className="relative rounded-3xl h-full py-5 px-6 overflow-hidden border-2 border-gray-300">

                {/* Radial Gradient Overlays (Smooth Breathing Effect with pulsating circles) */}
                {/* <motion.div 
                    initial={{ opacity: 0.4, scale: 0.8 }} 
                    animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }} 
                    transition={{
                        duration: 4, 
                        ease: "easeInOut", 
                        repeat: Infinity, 
                        repeatType: "loop",
                    }}
                    className="absolute top-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 rounded-full blur-3xl opacity-50 pointer-events-none"
                />
                <motion.div 
                    initial={{ opacity: 0.4, scale: 0.8 }} 
                    animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }} 
                    transition={{
                        duration: 4, 
                        ease: "easeInOut", 
                        repeat: Infinity, 
                        repeatType: "loop",
                    }}
                    className="absolute bottom-0 right-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-blue-800 via-blue-600 to-blue-400 rounded-full blur-3xl opacity-50 pointer-events-none"
                /> */}

                {/* About Us Content */}
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-5 py-10 gap-10">
                    
                    {/* Right Side - Text */}
                    <motion.div
                        className="w-full md:flex justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        {/* <div className='mb-15 lg:mb-0 lg:mr-24'>
                            <img src="/images/logo-blue.png" alt="" className='w-full md:w-240'/>
                        </div> */}
                        <div className='md:flex items-center'>
                            <div>
                                <h3 className="font-extrabold text-xl md:text-2xl text-black md:text-left">
                                    WHO WE ARE
                                </h3>

                                <p className="text-lg md:text-xl mt-10 text-black leading-relaxed md:text-left">
                                    As a leading provider of automation solutions, we cater to both industrial and domestic clients with innovative,
                                    future-ready technologies. Our comprehensive range of services includes end-to-end project implementation, 
                                    proactive maintenance, and expert consultation tailored to your unique needs. 
                                    By partnering with us, you unlock a new level of convenience, efficiency, 
                                    and control bringing the luxury of smart living and intelligent operations to your fingertips, 
                                    all through reliable and cost-effective automation systems.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;