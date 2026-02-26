'use client';

import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "@/public/hero.jpg";

const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "15+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
];

export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image src={heroImage} alt="Smart home automation" fill priority className="object-cover"/>
                <div className="absolute inset-0 bg-linear-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
            </div>

            {/* Content */}
            <div className="relative w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 border border-background/20 mb-8 animate-fade-up backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-sm text-background/90">Premium Smart Home Solutions</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                        Elevate Your
                        <span className="block text-accent">Living Experience</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-background/80 max-w-xl mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                        Transform your space with intelligent automation. We create seamless,
                        intuitive environments that respond to your every need.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                        <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                            Explore Solutions
                            <ArrowRight className="ml-2" size={20} />
                        </Button>
                        <Button variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10">
                            Watch Demo
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-background/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                        {stats.map(({ value, label }) => (
                            <div key={label}>
                                <div className="text-3xl md:text-4xl font-bold text-background">{value}</div>
                                <div className="text-sm text-background/70 mt-1">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}