import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import AIForBusiness from "@/components/sections/ai-for-business";
import FeatureBullets from "@/components/sections/feature-bullets";
import HowItWorks from "@/components/sections/how-it-works";
import NoDelayInAction from "@/components/sections/action-features";
import ValueCards from "@/components/sections/value-cards";
import OurCreations from "@/components/sections/our-creations";
import AboutNoDelay from "@/components/sections/about-nodelay";
import SecurityReadiness from "@/components/sections/security-readiness";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F1EFE7]">
      <Header />
      <HeroSection />
      <AIForBusiness />
      <FeatureBullets />
      <HowItWorks />
      <NoDelayInAction />
      <ValueCards />
      <OurCreations />
      <AboutNoDelay />
      <SecurityReadiness />
      <ContactSection />
      <Footer />
    </main>
  );
}
