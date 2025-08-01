import HeroSection from "@/components/hero-section";
import LogoCarousel from "@/components/logo-carousel";
import StatsSection from "@/components/stats-section";
import CustomerRetentionSection from "@/components/customer-retention-section";
import CaseStudiesSection from "@/components/case-studies-section";
import EmailRevenueSection from "@/components/email-revenue-section";
import ServicesSection from "@/components/services-section";
import TransformSection from "@/components/transform-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoCarousel />
      <StatsSection />
      <CustomerRetentionSection />
      <CaseStudiesSection />
      <EmailRevenueSection />
      <ServicesSection />
      <TransformSection />
      <ContactSection />
    </main>
  );
}
