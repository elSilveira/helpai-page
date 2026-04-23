import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { PainPoints } from "@/components/sections/pain-points";
import { HowItWorks } from "@/components/sections/how-it-works";
import { UseCases } from "@/components/sections/use-cases";
import { StealthMode } from "@/components/sections/stealth-mode";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <HowItWorks />
        <UseCases />
        <StealthMode />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
