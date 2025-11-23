"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-3 lg:px-5 pt-3">
            <div className="flex justify-center">
                {/* DESKTOP NAV */}
                <nav className="hidden lg:block px-16 py-3 bg-white/70 backdrop-blur-xl shadow-lg rounded-full border border-white/40">
                    <div className="flex items-center gap-16">
                        {/* LEFT LINKS */}
                        <div className="flex items-center gap-10">
                            <Link href="/" className="text-black font-medium">HOME</Link>
                            <Link href="/services" className="text-black font-medium">SERVICES</Link>
                        </div>

                        {/* LOGO */}
                        <p className="text-primary font-bold text-4xl leading-none tracking-wider">
                            ecotonics
                        </p>

                        {/* RIGHT LINKS */}
                        <div className="flex items-center gap-10">
                            <Link href="/works" className="text-black font-medium">WORKS</Link>
                            <Link href="/contact" className="text-black font-medium">CONTACT</Link>
                        </div>
                    </div>
                </nav>

                {/* MOBILE HEADER */}
                <div className="lg:hidden flex items-center justify-between w-full bg-white/70 backdrop-blur-xl shadow-lg rounded-full px-6 py-3 border border-white/40">
                    <p className="text-primary font-bold text-2xl tracking-wider">ecotonics</p>

                    <button onClick={() => setOpen(true)}>
                        <Menu className="w-7 h-7 text-black" />
                    </button>
                </div>
            </div>

            {/* FULL SCREEN MOBILE MENU */}
            {open && (
                <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center gap-10">
                    {/* CLOSE BUTTON */}
                    <button
                        className="absolute top-6 right-6"
                        onClick={() => setOpen(false)}
                    >
                        <X className="w-10 h-10 text-black" />
                    </button>

                    <Link href="/" onClick={() => setOpen(false)} className="text-3xl font-semibold">HOME</Link>
                    <Link href="/services" onClick={() => setOpen(false)} className="text-3xl font-semibold">SERVICES</Link>
                    <Link href="/works" onClick={() => setOpen(false)} className="text-3xl font-semibold">WORKS</Link>
                    <Link href="/contact" onClick={() => setOpen(false)} className="text-3xl font-semibold">CONTACT</Link>
                </div>
            )}
        </header>
    );
};

export default Header;