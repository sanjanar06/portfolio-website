import MediumSection from "@/features/landing/blog-section/blog-section";
import ContactSection from "@/features/landing/contact-section/contact-section";
import HeroSection from "@/features/landing/hero-section/hero-section";
import ServicesSection from "@/features/landing/services-section/services-section";
import WorkSection from "@/features/landing/work-section/work-section";
export const metadata = {
  title: "Sanjana's Portfolio",
  
}
export default function Home() {
  return (
    <main
      className="h-[calc(100vh-5rem)] snap-y snap-mandatory overflow-y-scroll scrollbar-hide"
      id="landing-container"
    >
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <MediumSection />
      <ContactSection />
    </main>
  );
}
