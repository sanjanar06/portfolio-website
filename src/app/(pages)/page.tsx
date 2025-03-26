import ContactSection from "@/features/landing/contact-section/contact-section";
import HeroSection from "@/features/landing/hero-section/hero-section";
import ResumeSection from "@/features/landing/resume-section/resume-section";
import ServicesSection from "@/features/landing/services-section/services-section";
import WorkSection from "@/features/landing/work-section/work-section";
export const metadata = {
  title: "Ganesh's Portfolio",
  
}
export default function Home() {
  return (
    <main
      className="h-[calc(100vh-5rem)] snap-y snap-mandatory overflow-y-scroll scrollbar-hide"
      id="landing-container"
    >
      <HeroSection />
      <ServicesSection />
      <ResumeSection />
      <WorkSection />
      <ContactSection />
    </main>
  );
}
