import HeroSection from "@/app/components/HeroSection";
import WhatWeDo from "@/app/components/WhatWeDo";
import Contact from "@/app/components/Contact";
import Footer from "../components/Footer";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
    return (
        <main className="no-vertical-scroll">
            <HeroSection />
            <WhatWeDo />
            <WhyChoose />
            <Contact />
            <Footer />
        </main>
    );
}
