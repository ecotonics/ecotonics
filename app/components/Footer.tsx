'use client';

import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="overflow-hidden px-5 md:px-24 mb-10 flex w-full justify-between align-middle">
            <div className="text-left text-[#485c11]">
                © {new Date().getFullYear()} ECOTONICS. All rights reserved.
            </div>
            <div className="text-right text-[#485c11]">
                <div className='flex gap-5'>
                    <FaInstagram/>
                    <FaFacebookF/>
                    <FaWhatsapp/>
                </div>
            </div>
        </div>
    );
};

export default Footer;