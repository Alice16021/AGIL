import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeatureSection from "../components/FeatureSection";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />

            <HeroSection />

            <main className="container mb-5 pb-5">
                <AboutSection />

                <div className="row g-4 align-items-start">
                    <FeatureSection />
                    <TestimonialSection />
                </div>
            </main>

            <Footer />
        </>
    );
}