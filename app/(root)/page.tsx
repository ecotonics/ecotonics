import HeroSection from "@/app/components/HeroSection";
import Services from "../components/Services";

export default function Home() {
    return (
        <main className="no-vertical-scroll">
            <HeroSection />
            <Services />
        </main>
    );
}
