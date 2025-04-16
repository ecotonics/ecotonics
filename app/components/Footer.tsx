import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="overflow-hidden p-3 md:px-10 md:pb-10">
            <div className="rounded-3xl p-6 md:p-10 bg-black text-white flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Website name or logo */}
                <div className="text-xl font-semibold tracking-wide">
                    Ecotonic Automation Solutions
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-5 text-white text-lg">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
                        <FaTwitter />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                        <FaInstagram />
                    </a>
                </div>

                {/* Copyright or other info */}
                <div className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Ecotonics. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer
