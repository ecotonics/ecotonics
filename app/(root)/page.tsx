import HeroSection from "@/app/components/HeroSection";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import ServiceSection from "../components/ServiceSection";
import WorkProcess from "../components/WorkProcess";
import Projects from "../components/Projects";
import Associations from "../components/Associations";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Services3 from "../components/WhatWeDo";
import WhatWeDo from "../components/WhatWeDo";

export default function Home() {
    return (
        <main className="no-vertical-scroll">
            <HeroSection />
            <AboutUs />
            <WhatWeDo />
            <WorkProcess />
        </main>
    );
}
