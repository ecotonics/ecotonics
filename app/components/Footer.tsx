import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <div className="overflow-hidden p-3 md:px-10 md:pb-10">
            <div className="border-2 border-gray-300 rounded-3xl p-5 bg-white">
                <div className="px-5 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        
                        {/* Company Info */}
                        <div className='md:mx-auto'>
                            <div>
                                <h2 className="text-gray-800 text-lg md:text-xl font-extrabold mb-5">ECOTONICS</h2>
                                <p className="text-gray-800 text-lg md:text-xl">
                                    We bring smart automation to homes, offices, and hospitality spaces with cutting-edge, user-centric solutions — tailored for convenience, efficiency, and control.
                                </p>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className='md:mx-auto'>
                            <div>
                                <h2 className="text-gray-800 text-lg md:text-xl font-extrabold mb-5">QUICK LINKS</h2>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-800 text-lg md:text-lg hover:text-gray-500 transition">ABOUT US</a></li>
                                    <li><a href="#" className="text-gray-800 text-lg md:text-lg hover:text-gray-500 transition">SOLUTIONS</a></li>
                                    <li><a href="#" className="text-gray-800 text-lg md:text-lg hover:text-gray-500 transition">PROJECTS</a></li>
                                    <li><a href="#" className="text-gray-800 text-lg md:text-lg hover:text-gray-500 transition">CONTACT</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact & Social */}
                        <div className='md:mx-auto'>
                            <div>
                                <h2 className="text-gray-800 text-lg md:text-xl font-extrabold mb-5">GET IN TOUCH</h2>
                                <div className="flex items-center space-x-3 mb-4">
                                    <Phone size={20} className="text-gray-800" />
                                    <span className="text-gray-800 text-lg md:text-xl">+91 98765 43210</span>
                                </div>
                                <div className="flex items-center space-x-3 mb-4">
                                    <Mail size={20} className="text-gray-800" />
                                    <span className="text-gray-800 text-lg md:text-xl">info@ecotonics.com</span>
                                </div>
                                <div className="flex space-x-4 mt-4">
                                    <a href="#" className="text-gray-800 hover:text-gray-500 transition"><Facebook size={22} /></a>
                                    <a href="#" className="text-gray-800 hover:text-gray-500 transition"><Instagram size={22} /></a>
                                    <a href="#" className="text-gray-800 hover:text-gray-500 transition"><Linkedin size={22} /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-gray-500 text-lg md:text-xl mt-10 border-t pt-6">
                        © {new Date().getFullYear()} ECOTONICS. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
