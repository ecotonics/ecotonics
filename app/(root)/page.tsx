import HeroSection from "@/app/components/HeroSection";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import ServiceSection from "../components/ServiceSection";
import WorkProcess from "../components/WorkProcess";

export default function Home() {
    return (
        <main className="no-vertical-scroll">
            <HeroSection />
            <Services />
            <AboutUs />
            <ServiceSection />
            <WorkProcess />
        </main>
    );
}
