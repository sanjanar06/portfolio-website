import AboutSection from "@/features/landing/about-section/about-section";
import ContactSection from "@/features/landing/contact-section/contact-section";
import MediumSection from "@/features/landing/medium-section/medium-section";
import ProjectSection from "@/features/landing/project-section/project-section";
import WorkSection from "@/features/landing/work-section/work-section";
export const metadata = {
  title: "Sanjana's Portfolio",

}
export default function Home() {
  return (
    <main
      className="h-[calc(100vh-5rem)] snap-y snap-mandatory overflow-y-scroll scrollbar-hide"
      id="landing-container">
      <AboutSection />
      <WorkSection />
      <ProjectSection />
      <MediumSection />
      <ContactSection />
    </main>
  );
}
