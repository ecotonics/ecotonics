'use client';

import React from 'react';

const Footer = () => {
    return (
        <div className="overflow-hidden px-5 md:px-24 mb-10">
            <div className="text-center text-[#485c11]">
                © {new Date().getFullYear()} ECOTONICS. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;