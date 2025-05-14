"use client"
import { ArrowDownRightIcon } from "lucide-react";
import { useState } from "react";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionSubtitle,
  SectionTopline
} from "../landing-section";
import WellsFargoExp from "./experience-section/wellsFargo";
import WellsFargoInternExp from "./experience-section/wellsFargoInternship";
import { servicesData } from "./work-section-config";

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const renderServiceContent = () => {
    switch (activeService) {
      case "/wellsFargo":
        return <WellsFargoExp />;
      case "/wellsFargoInternship":
        return <WellsFargoInternExp />;
      default:
        return (
          <SectionContent className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {servicesData.map((service, _) => (
              <div
                key={_}
                className="relative group space-y-5 overflow-hidden rounded-xl bg-[#e0dcd3] dark:bg-[#ebe8e1]"
              >
                {/* Overlay */}
                <div className="absolute inset-0" />
                {/* Content */}
                {/* Content */}
                <div className="relative z-10 p-6 text-black space-y-4">
                  {/* Arrow Icon at the Top-Right */}
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => setActiveService(service.href)}
                      className="p-2 group-hover:-rotate-45 rounded-full transition-all duration-700"
                    >
                      <ArrowDownRightIcon />
                    </button>
                  </div>

                  {/* Company Logo */}
                  <div className="flex justify-center">
                    <img
                      src={service.logo} // Assuming `service.logo` contains the logo URL
                      alt={`${service.title} logo`}
                      className="w-16 h-16 object-contain" // Fixed size for the logo
                    />
                  </div>

                  {/* Company Name, Role, and Date */}
                  <div >
                    <h2 className="text-sm">{service.title}</h2>
                    <p className="text-xs">{service.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </SectionContent>
        );
    }
  };

  return (
    <Section
      id="work"
      className="snap-start min-h-[calc(100vh-5rem)] mx-auto max-w-screen-lg px-4 xl:px-0"
    >
      <SectionHeader>
        <SectionTopline variant="secondary">WORK EXPERIENCE</SectionTopline>
        <SectionSubtitle>All the Cool Stuff I Built, Broke, and Eventually Mastered</SectionSubtitle>
      </SectionHeader>

      {activeService ? (
        <button
          onClick={() => setActiveService(null)} // Back button to return to the services list
          className="mb-4 text-blue-500 hover:underline text-lg"
        >
          ← MORE
        </button>
      ) : null}

      {renderServiceContent()}
    </Section>
  );
};

export default Services;