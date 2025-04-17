import HeroSection from "@/app/components/HeroSection";
import AboutUs from "@/app/components/AboutUs";
import WorkProcess from "@/app/components/WorkProcess";
import WhatWeDo from "@/app/components/WhatWeDo";

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
