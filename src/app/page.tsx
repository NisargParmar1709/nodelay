// app/page.tsx
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
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Wrap page sections in a central container where needed — components can also add their own container */}
      <section aria-label="Hero" className="pt-12">
        <HeroSection />
      </section>

      <section aria-label="AI for business">
        <AIForBusiness />
      </section>

      <section aria-label="Features">
        <FeatureBullets />
      </section>

      <section aria-label="How it works">
        <HowItWorks />
      </section>

      <section aria-label="NoDelay actions">
        <NoDelayInAction />
      </section>

      <section aria-label="Value cards">
        <ValueCards />
      </section>

      <section aria-label="Our creations">
        <OurCreations />
      </section>

      <section aria-label="About NoDelay">
        <AboutNoDelay />
      </section>

      <section aria-label="Security readiness">
        <SecurityReadiness />
      </section>

      <section aria-label="Contact">
        <ContactSection />
      </section>

      <Footer />
    </main>
  );
}
