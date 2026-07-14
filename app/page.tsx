import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesGrid />
      <ProcessSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
