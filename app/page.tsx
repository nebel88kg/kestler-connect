import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { TrustSection } from "@/components/home/TrustSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { LocalRootsSection } from "@/components/home/LocalRootsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { ReviewsCTA } from "@/components/home/ReviewsCTA";
import { FAQSection } from "@/components/home/FAQSection";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <TrustSection />
      <AboutSection />
      <ServicesGrid />
      <LocalRootsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <ReviewsCTA />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
