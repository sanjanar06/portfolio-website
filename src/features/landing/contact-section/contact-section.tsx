import { ArrowDownRightIcon, FootprintsIcon } from "lucide-react";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionHeading,
  SectionSubtitle,
  SectionTopline,
} from "../landing-section";
import { contactData } from "./contact-section-config";

const ContactSection = () => {
  return (
    <Section id="contact" className="snap-start min-h-[calc(100vh-5rem)] mx-auto max-w-screen-lg px-4 xl:px-0">
      <SectionHeader>
        <SectionTopline variant="secondary" className="text-xl">Contact</SectionTopline>
        <div className="flex items-center justify-left">
          <div>
            <SectionHeading>FIND ME ONLINE</SectionHeading>
          </div>
          <FootprintsIcon className="ml-4 w-12 h-12"/>
        </div>
        <SectionSubtitle>
          {`Whether I'm squashing bugs on LeetCode, pushing pixels on GitHub, or pretending to be a professional on LinkedIn — this is where my digital life unfolds.`}
        </SectionSubtitle>
      </SectionHeader>

      <SectionContent className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {contactData.map((service, _) => (
          <div key={_} className="group space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">{service.title}</h1>
                <a
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted group-hover:bg-accent p-4 group-hover:-rotate-45 rounded-full transition-all duration-700"
                >
                <ArrowDownRightIcon />
                </a>
            </div>
            <p className="text-sm">{service.description}</p>
            <div className="border-b" />
          </div>
        ))}
      </SectionContent>
    </Section>
  );
};

export default ContactSection;
