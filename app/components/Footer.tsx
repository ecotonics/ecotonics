'use client';

import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="overflow-hidden p-3 md:px-10 md:pb-10">
            <div className="border-2 border-gray-300 rounded-3xl p-5">
                <div className="px-5 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        
                        {/* Company Info */}
                        <div className="md:mx-auto">
                            <div>
                                <Link href='/'>
                                    <h2 className="text-lg md:text-xl font-extrabold mb-5">ECOTONICS</h2>
                                </Link>
                                <p className="text-lg md:text-xl">
                                    We bring smart automation to homes, offices, and hospitality spaces with cutting-edge, user-centric solutions — tailored for convenience, efficiency, and control.
                                </p>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="md:mx-auto">
                            <div>
                                <h2 className="text-lg md:text-xl font-extrabold mb-5">QUICK LINKS</h2>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/solutions" className="relative group text-lg md:text-lg">
                                            <span className="hover:text-gray-800 transition">SOLUTIONS</span>
                                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/projects" className="relative group text-lg md:text-lg">
                                            <span className="hover:text-gray-800 transition">PROJECTS</span>
                                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="relative group text-lg md:text-lg">
                                            <span className="hover:text-gray-800 transition">CONTACT</span>
                                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact & Social */}
                        <div className="md:mx-auto">
                            <div>
                                <h2 className="text-lg md:text-xl font-extrabold mb-5">GET IN TOUCH</h2>
                                <div className="flex items-center space-x-3 mb-4">
                                    <Phone size={20} className="text-gray-800" />
                                    <span className="text-lg md:text-xl">+91 98765 43210</span>
                                </div>
                                <div className="flex items-center space-x-3 mb-4">
                                    <Mail size={20} className="text-gray-800" />
                                    <span className="text-lg md:text-xl">info@ecotonics.com</span>
                                </div>
                                <div className="flex space-x-4 mt-4">
                                    <a href="#" className="hover:text-gray-800 transition"><Facebook size={22} /></a>
                                    <a href="#" className="hover:text-gray-800 transition"><Instagram size={22} /></a>
                                    <a href="#" className="hover:text-gray-800 transition"><Linkedin size={22} /></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="text-center text-gray-800 text-lg md:text-xl mt-10 border-t pt-6">
                        © {new Date().getFullYear()} ECOTONICS. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;