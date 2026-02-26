'use client';

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logoWhite from "@/public/logo-white.png";
import logoBlack from "@/public/logo-black.png";

const navLinks = [
    { name: 'Home',     href: '/' },
    { name: 'About',    href: '/about' },
    { name: 'Services', href: '/services' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMobileMenuOpen]);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`}>
            {/* Same max-w-7xl mx-auto px-6 as hero */}
            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2.5 shrink-0">
                        <div className="w-6 h-6 flex items-center justify-center">
                            <Image src={isScrolled ? logoBlack : logoWhite} alt="Ecotonics logo" width={24} height={24} priority/>
                        </div>
                        <span className={`text-lg font-semibold transition-colors ${isScrolled ? "text-foreground" : "text-background"}`}>
                            ecotonics
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${
                                isScrolled
                                    ? "text-muted-foreground hover:text-foreground"
                                    : "text-background/80 hover:text-background"
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:block">
                        <Button size="sm">Get Started</Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button type="button" aria-label="Toggle menu" aria-expanded={isMobileMenuOpen} className={`lg:hidden p-2 rounded-md transition-colors ${isScrolled ? "text-foreground hover:bg-muted" : "text-background hover:bg-background/10"}`} onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu — full screen overlay */}
            <div className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} bg-background`}>
                <div className="w-full max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <a 
                        key={link.name}
                        href={link.href}
                        className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-3 border-b border-border last:border-0"
                        onClick={() => setIsMobileMenuOpen(false)}
                        >
                        {link.name}
                        </a>
                    ))}
                    <Button className="mt-6 w-full" size="lg">
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
}