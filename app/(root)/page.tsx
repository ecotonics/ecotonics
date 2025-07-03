import HeroSection from "@/app/components/HeroSection";
import AboutUs from "@/app/components/AboutUs";
import WorkProcess from "@/app/components/WorkProcess";
import WhatWeDo from "@/app/components/WhatWeDo";
import Contact from "@/app/components/Contact";
import Footer from "../components/Footer";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
    return (
        <main className="no-vertical-scroll">
            <HeroSection />
            <WhatWeDo />
            {/* <AboutUs /> */}
            {/* <WorkProcess /> */}
            <WhyChoose />
            <Contact />
            <Footer />
        </main>
    );
}
