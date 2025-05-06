"use client"
import { ArrowDownRightIcon } from "lucide-react";
import { useState } from "react";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionHeading,
  SectionSubtitle,
  SectionTopline,
} from "../landing-section";
import FrontendSection from "./frontend"; // Import your frontend section component
import { servicesData } from "./work-section-config";

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const renderServiceContent = () => {
    switch (activeService) {
      case "/services-section/frontend":
        return <FrontendSection />;
      default:
        return (
          <SectionContent className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            {servicesData.map((service, _) => (
              <div
                key={_}
                className="relative group space-y-5 overflow-hidden rounded-lg"
              >
                {/* Background Image */}
                <img
                  src={service.image} // Assuming `service.image` contains the image URL
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0" />
                {/* Content */}
                <div className="relative z-10 p-6 text-black space-y-5">
                  <div className="flex justify-between items-center">
                    <h1 className="text-6xl font-extrabold">{service.num}</h1>
                    <button
                      onClick={() => setActiveService(service.href)}
                      className="bg-muted group-hover:bg-accent p-4 group-hover:-rotate-45 rounded-full transition-all duration-700"
                    >
                      <ArrowDownRightIcon />
                    </button>
                  </div>
                  <h2 className="text-2xl font-bold">{service.title}</h2>
                  <p className="text-sm">{service.description}</p>
                  <div className="border-b border-white" />
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
        <SectionTopline variant="secondary">WORK</SectionTopline>
        <SectionHeading>WORK EXPERIENCE</SectionHeading>
        <SectionSubtitle>Recent work</SectionSubtitle>
      </SectionHeader>

      {activeService ? (
        <button
          onClick={() => setActiveService(null)} // Back button to return to the services list
          className="mb-4 text-blue-500 hover:underline text-lg"
        >
          ← Back to Services
        </button>
      ) : null}

      {renderServiceContent()}
    </Section>
  );
};

export default Services;